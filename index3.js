const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

// Define your Mongoose models here (e.g., Course, Subject, Topic)

exports.handler = async (event) => {
	const { courseName } = event;

	try {
		// Connect to your MongoDB database
		await mongoose.connect(
			'mongodb://upmyranks:upmyranks@docdb-2023-04-09-13-10-41.cgaao9qpsg6i.ap-south-1.docdb.amazonaws.com:27017/upmyranks?ssl=true&retryWrites=false',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
		);

		// Retrieve the course based on the course name
		const Course = mongoose.model('Course'); // Replace 'Course' with your actual model name
		const course = await Course.findOne({ name: courseName });

		if (!course) {
			return {
				statusCode: 404,
				body: JSON.stringify({ message: 'Course not found' }),
			};
		}

		// Retrieve subjects related to the course
		const Subject = mongoose.model('Subject'); // Replace 'Subject' with your actual model name
		const subjects = await Subject.find({ courseId: course._id });

		// Retrieve topics related to the subjects
		const Topic = mongoose.model('Topic'); // Replace 'Topic' with your actual model name
		const topics = await Topic.find({
			subjectId: { $in: subjects.map((sub) => sub._id) },
		});

		const responseData = {
			courseName: course.name,
			subjects: subjects.map((sub) => sub.name),
			topics: topics.map((topic) => topic.name),
		};

		return {
			statusCode: 200,
			body: JSON.stringify(responseData),
		};
	} catch (error) {
		console.error('Error:', error);

		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal server error' }),
		};
	} finally {
		// Close the MongoDB connection
		mongoose.connection.close();
	}
};
