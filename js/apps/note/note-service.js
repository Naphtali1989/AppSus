import { utilService } from '../../services/util-service.js';

var gNotes;

const STORAGE_KEY = 'notesDB';



function getDefaultNotes() {
    return [{
            type: 'noteTxt',
            id: '102',
            info: { txt: 'I love vue js' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTxt',
            id: '103',
            info: { txt: 'I love vue js' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTxt',
            id: '104',
            info: { txt: 'I love vue js' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTxt',
            id: '105',
            info: { txt: 'I love vue js' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        }
    ]
}



function getNotesForDisplay() {
    gNotes = utilService.loadFromStorage(STORAGE_KEY)
    if (!gNotes || !gNotes.length) {
        gNotes = getDefaultNotes();
        _saveNotesToStorage();
    }
    return Promise.resolve(gNotes);
}


function addNote(note) {
    console.log('note?:', note)
    note.id = utilService.makeId()
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