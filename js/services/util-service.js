export const utilService = {
    saveToStorage,
    loadFromStorage,
    getRandomDate,
    makeId,
    getRandomInt
}



function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    const val = localStorage.getItem(key)
    return JSON.parse(val)
}

function deleteFromStorage(key) {
    localStorage.removeItem(key);
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomDate() {
    var start = new Date(2010, 0, 1)
    var end = new Date()
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}