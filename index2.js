const puppeteer = require('puppeteer');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path')
const questionData = require('./upsc/quesTopic2.json')

console.log(questionData)
const htmlTemplate = fs.readFileSync('template.ejs', 'utf8'); // Read the HTML template file

(async () => {
    const browser = await puppeteer.launch({
        protocolTimeout: 4.32e+7, // Increase the timeout to 30 seconds (or adjust as needed)
    });

    const page = await browser.newPage();

    // Create an array to store HTML content for each question
    const htmlContents = [];
    console.log(questionData);

    for (let index = 0; index < questionData.length; index++) {
        const item = questionData[index];
        // Compile the EJS template with the JSON data for each question
        const compiledTemplate = ejs.compile(htmlTemplate);
        const htmlContent = compiledTemplate({
            data: item,
            index: index + 1,
        });

        // Push the HTML content into the array
        htmlContents.push(htmlContent);
    }

    // Set the HTML content of the page with all questions
    await page.setContent(htmlContents.join('')); // Join all HTML contents into a single string

    // Generate a single PDF containing all questions
    const pdfPath = path.join(__dirname,'Ques-PDF','upsc','Indian Polity and Governance','Political Parties.pdf')
    await page.pdf({ path: pdfPath, format: 'A4' });

    await browser.close();
    console.log('PDF with all questions generated successfully.');
})();
