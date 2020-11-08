import { utilService } from '../../services/util-service.js';

var gNotes;

const STORAGE_KEY = 'notesDB';



function getDefaultNotes() {
    return [{
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: 'WE ARE NINJA CODERS', title: 'hello' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: { val: 'https://i.ibb.co/wJT60tV/meme-2020-11-08-T024236-391.png', title: 'Welcome Coding Instrctor :D' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: { val: 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif', title: `When People sees Napthali's code` },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: false
        },
        {
            type: 'noteVideo',
            id: utilService.makeId(),
            info: { val: 'https://www.youtube.com/watch?v=5LYrN_cAJoA', title: 'The net ninja is very good coding channel' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: false
        },
        {
            type: 'noteTodo',
            id: utilService.makeId(),
            info: {
                title: "List Name(Editable)",
                todos: [
                    { todoTxt: 'EAT 🍕', isDone: false, id: '0cSqrq9mBu9' },
                    { todoTxt: "SLEEP", isDone: false, id: 'qmUeHTYlzC3' },
                    { todoTxt: "CODE", isDone: false, id: 'jaPqbc92601' },
                    { todoTxt: "REPEAT", isDone: false, id: 'hseW4Q4hCcb' },
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
                title: '🔊 Some Audio 🔊',
                val: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3'
            },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: {
                title: 'When Idan is doing css',
                val: 'https://giffiles.alphacoders.com/129/12903.gif'
            },
            style: { backgroundColor: '#89b4c4' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: 'PLEASE CHANGE NOTE COLOR', title: 'Note color' },
            style: { backgroundColor: '#ffffff' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: {
                title: 'Me trying to understand dynamic components',
                val: 'https://media.giphy.com/media/UrfLgfuQG41sQ/giphy.gif'
            },
            style: { backgroundColor: '#d8fca8' },
            createdAt: Date.now(),
            isPinned: false
        },
        {
            type: 'noteTodo',
            id: utilService.makeId(),
            info: {
                title: "List Name(Editable)",
                todos: [
                    { todoTxt: 'learn vue js', isDone: false, id: '0cSqrq9mBu9' },
                    { todoTxt: "learn node js", isDone: false, id: 'qmUeHTYlzC3' },
                    { todoTxt: "learn many many things", isDone: false, id: 'jaPqbc92601' },
                    { todoTxt: "ask Eyal for help", isDone: false, id: 'hseW4Q4hCcb' },
                ]
            },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: false
        },
        {
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: 'Please unpin me!', title: 'unpin me' },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: {
                title: 'Me at the end of the sprint',
                val: 'https://media.giphy.com/media/AIZZAYU8WkenS/giphy.gif'
            },
            style: { backgroundColor: '#f0a8ff' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: { val: 'https://i.ibb.co/xXs2yWZ/logo-generator-featuring-an-evil-crow-with-red-eyes-1077d-el1-1.png', title: 'Appsus has been created by Idan Atiya and Napthali Rubin in Sprint #3' },
            style: { backgroundColor: '#cccccc' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: '╭∩╮ (︶︿︶) ╭∩╮', title: 'Idan your app has been hacked' },
            style: { backgroundColor: '#be968a' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: 'Please press the Copy icon', title: 'Copy icon!' },
            style: { backgroundColor: '#d5f5ee' },
            createdAt: Date.now(),
            isPinned: false
        },
        {
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: 'I enjoyed to work with Napthali ', title: 'Good experience' },
            style: { backgroundColor: '#ffc04c' },
            createdAt: Date.now(),
            isPinned: true,
        },
        {
            type: 'noteImg',
            id: utilService.makeId(),
            info: { val: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif', title: 'Me and Napthali at the beginning of the sprint' },
            style: { backgroundColor: '#FF0000' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: 'Call 0546313431 for 🍫!', title: 'מאוד מאוד טעים' },
            style: { backgroundColor: '#ffb6c1' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteTxt',
            id: utilService.makeId(),
            info: { val: '✨ Here Some sparkles ✨ ', title: 'Much wow!..' },
            style: { backgroundColor: '#aa6288' },
            createdAt: Date.now(),
            isPinned: true
        },
        {
            type: 'noteVideo',
            id: utilService.makeId(),
            info: {
                title: 'Learn to code with CA',
                val: 'https://www.youtube.com/watch?v=VvU27gvAK40'
            },
            style: { backgroundColor: '#ffff88' },
            createdAt: Date.now(),
            isPinned: true
        },
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