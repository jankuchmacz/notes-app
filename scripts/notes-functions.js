'use strict'
/*
const ispublic = true;
let data;
const processData = () => {
    data = '123456789';
}
processData();
console.log(data);
*/


//Read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON  = localStorage.getItem('notes');
    try{
        return notesJSON ? JSON.parse(notesJSON): []
    } catch(e){
        return [];
    }  
}
//Save notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}
//Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if(noteIndex > -1){
        notes.splice(noteIndex, 1);
    }
}

//Generate the DOM structure for note
const generateNoteDOM = (note) => {

    const noteElement = document.createElement('a');
    noteElement.classList.add('list-item');
    const textElement = document.createElement('p');
    textElement.classList.add('list-item__title');
    const status = document.createElement('p');
    status.classList.add('list-item__subtitle')
    
    //setup the note title text
    if(note.title.length > 0){
         textElement.textContent = note.title;
    } else {
        textElement.textContent = 'Unnamed note';
    }
    noteElement.appendChild(textElement);
    //Setup the link
    noteElement.setAttribute('href', `/edit.html#${note.id}`);
    //Setup status message
    status.textContent = updateLastEdited(note)
    noteElement.appendChild(status)
    return noteElement;
}
//sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if(sortBy === 'byEdited'){
        return notes.sort((a, b)=>{
            if(a.updatedAt > b.updatedAt){
                return -1
            } else if(b.updatedAt > a.updatedAt){
                return 1
            }else {
                return 0;
            }
        })
    } else if(sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if(a.createdAt > b.createdAt){
                return -1;
            } else if(b.createdAt > a.createdAt){
                return 1;
            }else {
                return 0;
            }
        });
    } else if(sortBy === 'alphabetical'){
        return notes.sort((a, b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            } else if(a.title.toLowerCase()>b.title.toLowerCase()){
                return 1;
            } else {
                return 0;
            }
        })
    } else {
        return notes;
    }
}
//Render application notes
const renderNotes = (notes, filters) => {
    const notesEl=document.querySelector('#notes');
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) =>  note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    notesEl.innerHTML= '';
    if(filteredNotes.length>0){
        filteredNotes.forEach((note) => {    
                const noteElement = generateNoteDOM(note);
                notesEl.appendChild(noteElement);
            })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent="No notes to show";
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
       
}
//Update last edited of note
const updateLastEdited = (note) => {
    const lastEditedTimestamp = note.updatedAt;
    return  `Last edited: ${moment(lastEditedTimestamp).fromNow()}`;
}


