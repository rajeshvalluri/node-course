const notes = require('./notes.js');
const validator = require('validator');
const yargs = require('yargs');



//Add command
yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            body: 'Body of the text',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Adding a new note')
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNotes(argv.title,argv.body)
    }
})

//read  command
yargs.command( {
    command: 'read',
    handler (argsv) {
        notes.readNotes(argsv.title)
     }
})
//list command

yargs.command( {
    command: 'list',
    describe: 'Listing out notes',
    handler() {
    notes.listNotes()
    }
})

//Remove notes Command
yargs.command( {
    command: 'remove',
    describe: 'This command will remove notes with the title given in the command line',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }

})


yargs.parse()