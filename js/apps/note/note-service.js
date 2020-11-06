import { utilService } from '../../services/util-service.js';

var gNotes;

const STORAGE_KEY = 'notesDB';



function getDefaultNotes() {
    return [{
            type: 'noteTxt',
            id: '102',
            info: { value: 'I like vue js', title: 'hello' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: '103',
            info: { value: 'https://images-na.ssl-images-amazon.com/images/I/61U3W11hFnL._AC_SL1000_.jpg', title: 'Cool title here' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: '104',
            info: { value: 'https://giffiles.alphacoders.com/208/208599.gif', title: 'some img here' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteVideo',
            id: '105',
            info: { value: 'https://www.youtube.com/watch?v=I-HC_k1mrUo', title: 'some video' },
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
    };
    return Promise.resolve(gNotes);
}

function onChangeStyleProp(id, color) {
    const noteIdx = getNoteIdxById(id)
    gNotes[noteIdx].style.backgroundColor = color;
    _saveNotesToStorage();
    return Promise.resolve()
}

function pinNote(noteId) {
    console.log('note has been unpinned:', noteId)
    const noteIdx = getNoteIdxById(noteId)
    gNotes[noteIdx].isPinned = !gNotes[noteIdx].isPinned;
    // gNotes.filter(note => note.isPinned === false)
    _saveNotesToStorage()
    console.log('pinned note:', noteIdx);
    return Promise.resolve(gNotes)
}


function addNote(note) {
    note.id = utilService.makeId();
    note.createdAt = Date.now();
    note.isPinned = true;
    gNotes.unshift(note);
    _saveNotesToStorage();
    return Promise.resolve();
}

function addTodoNote(todos) {

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

function getNoteById(noteId) {
    return gNotes.find(note => note.id === noteId)
}

function _saveNotesToStorage() {
    utilService.saveToStorage(STORAGE_KEY, gNotes);
}

function confirmNoteEdit(id, noteInfo) {
    const note = getNoteById(id)
    if (!id) return;
    console.log('note info in service:', noteInfo);
    note.info.val = noteInfo;
    _saveNotesToStorage();
    return Promise.resolve();
}

function updateNote(url) {
    _saveNotesToStorage()
    return Promise.resolve();
}

function deleteTodo(noteId, todoId) {
    const note = getNoteById(noteId)
    console.log('note id:', noteId);
    console.log('todo id:', todoId);
    const todoIdx = note.info.todos.findIndex(todo => todo.id === todoId);
    if (todoIdx == -1) return Promise.reject()
    note.info.todos.splice(todoIdx, 1);
    console.log('todo idx:', todoIdx)
    _saveNotesToStorage()
    return Promise.resolve();

}
export const noteService = {
    getNotesForDisplay,
    addNote,
    deleteNote,
    onChangeStyleProp,
    pinNote,
    updateNote,
    confirmNoteEdit,
    deleteTodo
}