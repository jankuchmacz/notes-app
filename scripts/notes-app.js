'use strict'

let notes =  getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}
renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const uniqid = uuidv4();
    const currentTimestamp = moment().valueOf();
    notes.push({
        id: uniqid,
        title: '',
        body: '',
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp
    });
    saveNotes(notes);
    location.assign(`/edit.html#${uniqid}`);
})
document.querySelector('#search-text').addEventListener('input', (e)=>{
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})
document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
})
window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})
//const now = moment();

//now.minute(1);
//console.log(now.minute());
/*now.subtract(1, 'week').subtract(7, 'days');
console.log(now.format('MMMM Do, YYYY'));
console.log(now.fromNow());
const nowTimestamp = now.valueOf();
console.log(nowTimestamp);

console.log(moment(nowTimestamp).toString());*/
//
/*const now = moment();
now.month(11);
now.date(30);
now. year(1994);
console.log(now.format('MMM D, YY'));*/


//Unix Epoch - January 1st 1970
/*const now = new Date();
console.log(now.toString());
const timestamp = now.getTime();
const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of the month: ${now.getDate()}`);
console.log(`Hour: ${now.getHours()}`);
console.log(`Minute: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);

const oneDate = new Date('March 04 2022 17:00:00');
const secondDate = new Date('September 25 2021 15:00:00');

const timestampForFirstDate = oneDate.getTime();
const timestampForSecondDate = secondDate.getTime();

if(timestampForFirstDate>timestampForSecondDate){
    console.log(new Date(timestampForSecondDate).toString());
}else {
    console.log(new Date(timestampForFirstDate).toString());
}*/

/*document.querySelector('#for-fun').addEventListener('change', function(e){
    console.log(e.target.checked);
})*/
/*document.querySelector('#remove-all').addEventListener('click', function(){
   document.querySelectorAll('.note').forEach(function(note){
        note.remove();
   })
})*/

//query and remove
//const p = document.querySelector('p');
//p.remove();

//query all and remove
/*const ps = document.querySelectorAll('p');
ps.forEach(function(p){
    p.textContent = '*******';
    //console.log(p.textContent);
    //p.remove();
})*/
//Add a new element
/*const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from JS';
document.querySelector('body').appendChild(newParagraph);*/


