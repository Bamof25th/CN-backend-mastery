// Write your code here

import * as fs from "fs";

export const writeBlog = (filePath, name) => {
  fs.appendFileSync(filePath, name);
};
export const publishBlog = (filePath) => {
  return fs.readFileSync(filePath, { encoding: "utf8" });
};







// const readLine = require("readline");
// const fs = require("fs");

// exports.writeBlog = () => {
//   const interface = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   interface.question("Enter your blog: ", (data) => {
//     console.log(`${data}`);
//     const blog = `${data}`;

//    try {
//     fs.writeFileSync("myblog.txt", `${blog}`);
//    } catch (err) {
//     console.log(err)
//    }
//   });
//   interface.close();
// };


