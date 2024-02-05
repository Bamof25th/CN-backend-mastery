import { UserEvents } from "./userEvents.mjs";


const userEvent = new UserEvents()

// userEvent.createPost(' This is my First Post');

// userEvent.addListner('postCreated')


function saveToDatabse() {
    console.log("saving files to database");
}

function sendNotification() {
    console.log('Sending notification')
}

function updatetimeLine(){
    console.log('Updated timeline');
}


userEvent.addListener('postCreated', saveToDatabse);
userEvent.addListener('postCreated', sendNotification);
userEvent.addListener('postCreated', updatetimeLine);

userEvent.createPost(' This is my First Post');
