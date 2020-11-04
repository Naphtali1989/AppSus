function saveToStorage(key, val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
}

function loadFromStorage(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str)
}

export const storageService = {
    saveToStorage,
    loadFromStorage,

}