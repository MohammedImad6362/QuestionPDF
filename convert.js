const fs = require('fs');

// Specify the path to your input JSON file and the output JSON file
const inputFilePath = 'input.json';
const outputFilePath = 'output.js';

fs.readFile(inputFilePath, 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading the file:', error);
    return;
  }

  try {
    const jsObject = JSON.parse(data);

    // Do any necessary operations with the jsObject here

    // Convert the JavaScript object back to a JSON string
    const jsonString = JSON.stringify(jsObject, null, 2);

    // Write the JSON string to the output file
    fs.writeFile(outputFilePath, jsonString, 'utf8', (writeError) => {
      if (writeError) {
        console.error('Error writing the output file:', writeError);
        return;
      }
      console.log('JSON data has been written to the output file.');
    });
  } catch (jsonError) {
    console.error('Error parsing JSON:', jsonError);
  }
});
