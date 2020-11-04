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

function onChangeStyleProp(id, color) {
    const noteIdx = getNoteIdxById(id)
    console.log('gNotes:', gNotes[noteIdx])
    gNotes[noteIdx].style.backgroundColor = color;
    _saveNotesToStorage();
    console.log('note idx:', noteIdx)
    console.log('id:', id)
    console.log('color in sertvice:', color)
    return Promise.resolve()
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


function deleteNote(noteId) {
    const noteIdx = gNotes.findIndex(note => note.id === noteId);
    if (noteIdx === -1) return Promise.reject();
    gNotes.splice(noteIdx, 1);
    _saveNotesToStorage();
    return Promise.resolve();
}

function getNoteIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId);
}

function _saveNotesToStorage() {
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}



export const noteService = {
    getNotesForDisplay,
    addNote,
    deleteNote,
    onChangeStyleProp
}