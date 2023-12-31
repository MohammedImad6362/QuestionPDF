const puppeteer = require('puppeteer');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path')

const questionData = require('./UPSC-JSON/Subject-9/merged-questions-chunk2.json'); // Load your JSON data (remove the .js extension)
const htmlTemplate = fs.readFileSync('template.ejs', 'utf8'); // Read the HTML template file
let index = 1;
(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// Create an array to store HTML content for each question
	const htmlContents = [];

	questionData.forEach(async (item, index) => {
		// Compile the EJS template with the JSON data for each question
		const compiledTemplate = ejs.compile(htmlTemplate);
		const htmlContent = compiledTemplate({
			data: item,
			index: index + 1,
		});
		// Push the HTML content into the array
		htmlContents.push(htmlContent);
		// index++;
	});

	// Set the HTML content of the page with all questions
	await page.setContent(htmlContents.join('')); // Join all HTML contents into a single string

    const pdfPath = path.join(__dirname, 'PDF', 'upsc', '9-Current Affairs', 'Part2.pdf')
	// Generate a single PDF containing all questions
	await page.pdf({ path: pdfPath, format: 'A4', timeout: 60000 });

	await browser.close();
	console.log('PDF with all questions generated successfully.');
})();
