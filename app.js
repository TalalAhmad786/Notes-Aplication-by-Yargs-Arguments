// import module libraries from node package manager
import yargs from 'yargs'
import { addNote } from './notes.js'
import { removeNote } from './notes.js'
import { listNote } from './notes.js'
import { readNote } from './notes.js'
import {hideBin} from 'yargs/helpers'
// import notes from './notes.js'

// Yargs stored version number
const y = yargs()
y.version('1.0.0')

// --- ADD COMMAND ----
y.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title: {
        describe: 'Notes Title',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe: 'This is my body for the note.',
        demandOption: true,
        type:'string'
    }
  },
    handler(argv){
        addNote(argv.title, argv.body)
    }
  
})

// --- REMOVE COMMAND ----
y.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title: {
        describe: 'Notes Title',
        demandOption: true,
        type: 'string'
    },
  },
  handler(argv){
    removeNote(argv.title)
}
  
  
})

// --- READ COMMAND ----
y.command({
  command: 'read',
  describe: 'Read a note',
  builder:{
    title: {
        describe: 'Notes Title',
        demandOption: true,
        type: 'string'
    },
  },
  handler(argv){
    readNote(argv.title)
  }
})

// --- LIST COMMAND ----
y.command({
  command: 'list',
  describe: 'Listing the notes',
  
  handler(){
    listNote();
}
})

y.parse(process.argv.slice(2))
// console.log(yargs(hideBin(process.argv)).argv)