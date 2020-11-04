import { utilService } from '../../services/util-service.js';

var gNotes = [
    { type: 'note-text', id: '101', info: { txt: 'I love vue js' }, createdAt: Date.now(), isPinned: true },
    { type: 'note-text', id: '102', info: { txt: 'I love  js' }, createdAt: Date.now(), isPinned: false },
    { type: 'note-text', id: '103', info: { txt: 'I love html' }, createdAt: Date.now(), isPinned: true },
    { type: 'note-text', id: '104', info: { txt: 'I love css' }, createdAt: Date.now(), isPinned: true },
]

const STORAGE_KEY = 'notesDB';




function getNotesForDisplay() {
    return Promise.resolve(gNotes);
}




function _saveNotesToStorage() {
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}



export const noteService = {
    getNotesForDisplay
}