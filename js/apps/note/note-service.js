import { utilService } from '../../services/util-service.js';

var gNotes = [
    { type: 'noteTxt', id: '101', info: { txt: 'I love vue js' }, createdAt: Date.now(), isPinned: true },
    { type: 'noteImg', id: '102', info: { txt: 'I love  js' }, createdAt: Date.now(), isPinned: false },
    { type: 'noteTxt', id: '103', info: { txt: 'I love html' }, createdAt: Date.now(), isPinned: true },
    { type: 'noteImg', id: '104', info: { txt: 'I love css' }, createdAt: Date.now(), isPinned: true },
]

const STORAGE_KEY = 'notesDB';




function getNotesForDisplay() {
    return Promise.resolve(gNotes);
}


function addNote(note) {
    console.log('adding note....')
    note.createdAt = Date.now()
    note.isPinned = false
    gNotes.unshift(note);
    _saveNotesToStorage()
    return Promise.resolve()
}



function _saveNotesToStorage() {
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}



export const noteService = {
    getNotesForDisplay,
    addNote
}