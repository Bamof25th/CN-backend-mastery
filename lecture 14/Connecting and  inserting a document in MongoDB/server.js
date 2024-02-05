import app from "./index.js";
import { connectToMongoDB } from "./src/config/mongodb.js";
// 1. Import function to connect to the database

app.listen(3000, () => {
  console.log("server is listening at port 3000");
  // 2. Connect to MongoDB database
  connectToMongoDB();
});
