const fs = require("fs");

const fileName = "test.txt";

console.log("Creating File...");
fs.writeFile(fileName, "Hello Node.js", (createError) => {
  if (createError) {
    console.log(`Error creating file: ${createError.message}`);
    return;
  }

  console.log("File Created");
  console.log("Reading File...");

  fs.readFile(fileName, "utf8", (readError, data) => {
    if (readError) {
      console.log(`Error reading file: ${readError.message}`);
      return;
    }

    console.log(data);
    console.log("Updating File...");

    fs.appendFile(fileName, "\nLearning FS Module", (updateError) => {
      if (updateError) {
        console.log(`Error updating file: ${updateError.message}`);
        return;
      }

      console.log("File Updated");

      fs.readFile(fileName, "utf8", (updatedReadError, updatedData) => {
        if (updatedReadError) {
          console.log(`Error reading updated file: ${updatedReadError.message}`);
          return;
        }

        console.log(updatedData);
        console.log("Deleting File...");

        fs.unlink(fileName, (deleteError) => {
          if (deleteError) {
            console.log(`Error deleting file: ${deleteError.message}`);
            return;
          }

          console.log("File Deleted");
        });
      });
    });
  });
});
