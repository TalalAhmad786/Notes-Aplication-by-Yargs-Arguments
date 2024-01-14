import fs from 'fs'
import chalk, { Chalk } from 'chalk'
import { title } from 'process'

export const getnotes = ()=>{
    return "Your Notes here...."


}

export const addNote = (title, body) =>{

    const notes = loadnotes()
    const duplicateNotes = notes.find((note)=>note.title === title)
    
    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);
        console.log("New note added! ");
    }else{
        console.log("Note title already exists");
    }

    


}

export const removeNote = (title)=>{
    const notes = loadnotes();
    const notesToKeep = notes.filter((note)=>{
        return note.title!=title
    })
   if(notes.length>notesToKeep.length){
    
    saveNotes(notesToKeep);
    console.log(chalk.green('Note Removed!'))
   }else{
    console.log(chalk.red('No Note Found!'))

   }
}

export const listNote = ()=>{
    const notes = loadnotes();
    let result = notes.map((note)=>note.title);
    console.log(result.join(', '));

}

export const readNote = (title)=>{
    const notes = loadnotes();
    const findNote = notes.find((note)=>note.title===title);
    if(findNote){
        console.log(chalk.inverse(findNote.title));
        console.log(findNote.body);
    }else{
        console.log(chalk.inverse.red("No Note found"))
    }
}


const saveNotes= (notes) =>{
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON);
}

const loadnotes = ()=>{
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
}




