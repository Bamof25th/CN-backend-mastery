// 1. Import ReadLine

const readLine =  require('readline');

//2. create interface Connnfigure interface to connect with terminal and command line

const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3. Reading values 

interface.question("Enter firssst number", (num1)=>{
    interface.question("Enter second number",(num2) =>{
        const sum = Number(num1) +Number(num2) ;
        console.log(sum);
    })
})