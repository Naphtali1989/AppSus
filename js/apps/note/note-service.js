import { utilService } from '../../services/util-service.js';

var gNotes;

const STORAGE_KEY = 'notesDB';



function getDefaultNotes() {
    return [{
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: 'I like vue js', title: 'hello' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: { val: 'https://downthetubes.net/wp-content/uploads/2020/01/dragon-ball-super-goku-ultra-instinct-mastered-01.jpg', title: 'Cool title here' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: { val: 'https://troll.link/bl-content/uploads/pages/dec2b671ff28d69d3ad97bc5c890ca35/Pikachu_trollface.png', title: 'I like to troll all' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: false
        },
        {
            type: 'noteVideo',
            id: utilService.makeId(),
            info: { val: 'https://www.youtube.com/watch?v=j18d-hLdTD8', title: 'Good music!' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTodo',
            id: utilService.makeId(),
            info: {
                title: "List Name(Editable)",
                todos: [
                    { todoTxt: 'Learn vue', isDone: false, id: '0cSqrq9mBu9' },
                    { todoTxt: "Learn Node JS", isDone: false, id: 'qmUeHTYlzC3' },
                    { todoTxt: "Learn To catch errors", isDone: false, id: 'jaPqbc92601' },
                    { todoTxt: "Eat more food", isDone: false, id: 'hseW4Q4hCcb' },
                ]
            },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteAudio',
            id: utilService.makeId(),
            info: {
                title: 'Edit me',
                val: 'https://www.computerhope.com/jargon/m/example.mp3'
            },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: {
                title: 'Idan trying to work in css',
                val: 'https://giffiles.alphacoders.com/129/12903.gif'
            },
            style: { backgroundColor: '#89b4c4' },
            createdAt: Date.now(),
            isPinned: false
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

function saveMarkTodo(noteId, todoId, markStatus) {
    const note = getNoteById(noteId);
    const todoIdx = note.info.todos.findIndex(todo => todo.id === todoId);
    note.info.todos[todoIdx].isDone = markStatus;
    _saveNotesToStorage();
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
    deleteTodo,
    saveMarkTodo
}