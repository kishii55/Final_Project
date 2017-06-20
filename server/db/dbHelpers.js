const mongoose = require('mongoose');

process.stdin.setEncoding('utf8');

console.log('DROPPING MONGODB DATABASE: lolchampions. Type YES to continue...');

process.stdin.on('data', (text) => {
  text = text.toString().trim();

  if (text === 'YES') {
    dropDatabase(() => {
      console.log('Successfully dropped database!');
      process.exit();
    });
  } else {
    console.log('Did not drop database. Exiting...');
    process.exit();
  }
});

function dropDatabase(cb) {
  mongoose.connect('mongodb://localhost/lolchampions');

  mongoose.connection.on('open', () => {
    // WILL DROP LOCAL DB!!!!
    mongoose.connection.db.dropDatabase(() => {
      cb();
    });
  });
}
