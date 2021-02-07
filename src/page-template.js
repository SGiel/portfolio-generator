// empty () needed if zero parameters or more than one
// when a function has only one statement curly braces unnecessary and return statement 
// is implied 
const generatePage = (name, github) => {
    return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Demo</title>
        </head>
    
        <body>
            <h1>${name}</h1>
            <h2><a href="https://github.com/${github}">Github</a></h2>
        </body>
        </html>
    `;
};

// In the source file that has the functions we want to make available to other files, 
// we use module.exports at its bottom
module.exports = generatePage;