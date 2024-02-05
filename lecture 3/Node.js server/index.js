import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      // TODO: Store user query in "query.txt"
      const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
      fs.appendFile("queries.txt", queryString, (error) =>{
        if(error)throw error;
        console.log(
          `\nQuery saved!\n\nUser name: ${name}\nQuery: ${message}\n`
        )
      } );

      
      // TODO: Use Nodemailer to send confirmation email
       const mailOptions = {
        from: 'codingninjas2k16@gmail.com',
        to: email,
        subject: "Coding Ninjas",
        text: "The world has enough coders; be a coding ninja!",
       }

       transporter.sendMail(mailOptions, function (info , err) {
        if (err) {
          console.log(err);
        } else {
          // TODO: Emit "mailSent" event
          customEvent.mailSent(email);
        }
        
       })

      

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log(`custom event "mailSent" emitted`);
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };
