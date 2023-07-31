const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Please provide the file path as a command-line argument.');
  process.exit(1);
}

// Resolve the absolute path to handle relative paths
const absolutePath = path.resolve(filePath);

fs.readFile(absolutePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file ${absolutePath}: ${err.message}`);
    return;
  }

  const wordCount = countWords(data);
  console.log(`Total word count in data.txt in specified path is: ${wordCount}`);
});

function countWords(text) {


  // Split the cleaned text by spaces to count words
  const words = text.split(' ');

  // Remove empty strings from the words array (e.g., double spaces)
  const nonEmptyWords = words.filter(word => word.trim() !== '');

  return nonEmptyWords.length;
}
