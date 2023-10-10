const fs = require('fs');
const path = require('path');

// Function to merge question objects from JSON files recursively into a single array
function mergeQuestionObjectsInFolder(folderPath, chunkSize) {
  try {
    const mergedQuestions = [];

    // Function to recursively traverse directories
    function traverseDirectory(currentPath) {
      const files = fs.readdirSync(currentPath);

      files.forEach((file) => {
        const filePath = path.join(currentPath, file);
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
          // If it's a directory, recursively traverse it
          traverseDirectory(filePath);
        } else if (file.endsWith('.json')) {
          // If it's a JSON file, read and extract question objects
          const data = fs.readFileSync(filePath, 'utf8');
          const jsonData = JSON.parse(data);

          // Assuming each JSON file contains an array of question objects
          if (Array.isArray(jsonData)) {
            mergedQuestions.push(...jsonData); // Add questions to the merged array
          }
        }
      });
    }

    // Start traversing from the specified folder
    traverseDirectory(folderPath);

    // Split the merged questions into chunks
    const chunks = [];
    for (let i = 0; i < mergedQuestions.length; i += chunkSize) {
      const chunk = mergedQuestions.slice(i, i + chunkSize);
      chunks.push(chunk);
    }

    // Write each chunk to a separate file
    chunks.forEach((chunk, index) => {
      const outputFile = path.join(__dirname, 'UPSC-JSON', 'Subject-9', `merged-questions-chunk${index + 1}.json`);
      fs.writeFileSync(outputFile, JSON.stringify(chunk, null, 2), 'utf8');
    });

    console.log(`Merged and chunked into ${chunks.length} files successfully.`);
  } catch (error) {
    console.error('Error merging and chunking question objects:', error);
  }
}

// Specify the folder containing subfolders with JSON files
const folderPath = path.join(__dirname, 'UPSC-JSON', 'Subject-9');

// Chunk size (number of questions per chunk)
const chunkSize = 2000; // You can adjust this to your desired chunk size

// Call the merge and chunk function
mergeQuestionObjectsInFolder(folderPath, chunkSize);
