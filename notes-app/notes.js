const fs = require('fs')
const chalk = require('chalk')

const readNotes = (title) => {
    const notes = loadNotes()

    const requiredNote = notes.find( (item) => item.title === title ) 
    if (requiredNote) {
        console.log('Note found\nTitle: ' + requiredNote.title + '\nBody: ' + requiredNote.body)
    } else {
        console.log('Note not found')
    }
}

const addNotes = function(title,body) {
    // Load the notes file and read its contents
    // Check for duplicate titles
    // only add if new title, else log an error message
    const notes = loadNotes()
    //helper function to check duplicate note titles
    const duplicateNotes = notes.filter( (note) => note.title === title)
    const duplicateNote = notes.find( (note) => note.title === title)

    if (!duplicateNote) {
        notes.push( {
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Note Added')
    } else {
        console.log('Node title already in use')
    }

}

const removeNote = function(title) {
    const notes = loadNotes()
    const srchItem = (notes.filter((item) => item.title === title)
    )
    if (srchItem.toString() === '') {
        console.log("No notes with the given title found")
        return
    } else {
        // Title found. Create another JSON without the title and save it to disk
        keepItems = (notes.filter((item) => item.title !== title)
        )
        console.log('the remaining string is\n', keepItems)
        console.log(chalk.bold.green.inverse('Note Deleted'))
        saveNotes(keepItems)
    }
}

//helper functions to write to disk
saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const listNotes = () => {
    const listOfNotes = loadNotes() 
    console.log(listOfNotes)
    listOfNotes.forEach( (note) => {
        console.log(chalk.green('Title:' + note.title ) + chalk.blue('---- Body:'  + note.body ))
    })
}

module.exports = {
    readNotes: readNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes
}
