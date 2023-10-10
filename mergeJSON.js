const fs = require('fs');
const path = require('path');

// Function to merge question objects from JSON files recursively into a single array
function mergeQuestionObjectsInFolder(folderPath, outputFile) {
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

    // Write the merged questions (array) to the output file
    fs.writeFileSync(outputFile, JSON.stringify(mergedQuestions, null, 2), 'utf8');

    console.log('Question objects merged successfully.');
  } catch (error) {
    console.error('Error merging question objects:', error);
  }
}

// Specify the folder containing subfolders with JSON files
const folderPath = path.join(__dirname, 'UPSC-JSON', 'Subject-1');

// Output file where the merged question objects will be saved
const outputFile = 'allTopicsMerged.json';

// Call the merge function
mergeQuestionObjectsInFolder(folderPath, outputFile);
