'use strict'

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeButton = document.querySelector('#remove-note');
const saveButton = document.querySelector('#save-note');
const lastEdited = document.querySelector('#last-edited');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) =>note.id === noteId)
if(!note){
    location.assign(`/index.html`);
}
titleElement.value = note.title;
bodyElement.value = note.body;
lastEdited.textContent = updateLastEdited(note);


titleElement.addEventListener('input', function(e){
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEdited.textContent = updateLastEdited(note);
    saveNotes(notes);
})
bodyElement.addEventListener('input', function(e){
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEdited.textContent = updateLastEdited(note);
    saveNotes(notes);
})
removeButton.addEventListener('click', function(e){
    removeNote(noteId);
    saveNotes(notes);
    location.assign('/index.html');
})
saveButton.addEventListener('click', (e)=>{
    location.assign('/index.html');
})
window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note){
            return note.id === noteId
        })
        if(!note){
            location.assign(`/index.html`);
        }
        titleElement.value = note.title;
        bodyElement.value = note.body;
        lastEdited.textContent = updateLastEdited(note);
    }
})