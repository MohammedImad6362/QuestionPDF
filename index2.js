const puppeteer = require('puppeteer');
const ejs = require('ejs');
const fs = require('fs');
const AWS = require('aws-sdk'); // Import the AWS SDK
const path = require('path');

const s3 = new AWS.S3({region: 'ap-south-1'});

const htmlTemplate = fs.readFileSync('template.ejs', 'utf8'); // Read the HTML template file

async function downloadJSONChunksFromS3() {
    const params = {
        Bucket: 'demotestproducts',
        Key: 'UPSC/1-History/chunk_1.json', // Specify the S3 path to your JSON chunks
    };

    try {
        const { Body } = await s3.getObject(params).promise();
        return JSON.parse(Body.toString());
    } catch (error) {
        throw new Error(`Error downloading JSON chunks from S3: ${error}`);
    }
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Download JSON data from S3
    const questionData = await downloadJSONChunksFromS3();

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
    });

    // Set the HTML content of the page with all questions
    await page.setContent(htmlContents.join('')); // Join all HTML contents into a single string

    const pdfPath = path.join(__dirname, 'PDF', 'new', 'Part1.pdf');
    // Generate a single PDF containing all questions
    await page.pdf({ path: pdfPath, format: 'A4', timeout: 60000 });

    await browser.close();
    console.log('PDF with all questions generated successfully.');
})();
