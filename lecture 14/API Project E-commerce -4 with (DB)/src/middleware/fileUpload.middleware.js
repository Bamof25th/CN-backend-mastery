
// 1. Import multer.
import multer from 'multer';

// 2. Configure storage with filename and location.
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads/');
    },
    filename:(req, file, cb)=>{
        const filename =  Date.now() + file.originalname;
        cb(null,  filename);
    },
});

export const upload = multer({
    storage: storage,
});
