// Please don't change the pre-written code
// Import the necessary modules here
import multer from "multer";



// Write your code here
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        const UpdatedFileName = Date.now() + file.originalname;

        cb(null, UpdatedFileName);
    },
});

export default multer({ storage });
