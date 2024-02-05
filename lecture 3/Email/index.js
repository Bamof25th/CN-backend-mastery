// 1. Import Nodemailer
const nodemailer = require('nodemailer');


// 2. Configure email and send it .


async function sendMail(){
     
    // 1. Create an email Transporter.
    // SMTP - simple mail transfer protocol
    const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'theshowboatgoat@gmail.com',
            pass:'jkvriirvlnokovpw'
        },
    });
     
  // 2. COnfigure email Content

  const mailOptions = {
    from: 'theshowboatgoat@gmail.com',
    to: 'baghelab1312@gmail.com',
    subject: 'Welcome To node JS App',
    text: 'This is an email using Node js',
}
// 3. Send the email.
try{
    const result = await transporter.sendMail(mailOptions);

    console.log("Email Sent Sucssesfully");
}catch(err){
     console.log("Email sent Faild with error: "+ err);
}


}

sendMail();