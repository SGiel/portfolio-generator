// In the destination file(s) that we want to receive those exported functions, we put require at the top.
const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

// The first argument is the file name that will be created, or the output file. The second argument is the data that's being written: the HTML string template. The third argument is the callback function that will handle any errors as well as the success message.
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
});
 