import { storageService } from '../../services/storage-service.js';
import { utilService } from '../../services/util-service.js';

const EMAIL_STORAGE_KEY = 'emailDB';
const DELETED_EMAIL_STORAGE_KEY = 'deletedEmailDB';
const defaultEmails = [
    { subject: 'Wassap?', body: 'Pick up!!!!!!!!!', isRead: false, isMarked: false, isTrash: false, sentAt: 1551133930594, id: utilService.makeId(11) },
    { subject: 'really??', body: 'Shut up!!!!!!!!!!!!!', isRead: false, isMarked: false, isTrash: false, sentAt: 1551133930594, id: utilService.makeId(11) },
    { subject: 'Idan?', body: 'What do you get git?!', isRead: false, isMarked: false, isTrash: false, sentAt: 1551133930594, id: utilService.makeId(11) },
    { subject: 'Naphtali?', body: 'You are so lazy!!', isRead: false, isMarked: false, isTrash: false, sentAt: 1551133930594, id: utilService.makeId(11) },
]

var gDeletedEmails;
var gEmails;


export const emailService = {
    getDeletedEmailsToDisplay,
    getEmailsToDisplay,
    deleteEmail,
    getEmailById,
}

function getEmailsToDisplay() {
    gEmails = loadEmailsFromStorage();
    if (!gEmails || gEmails.length < 1) {
        gEmails = defaultEmails
        saveEmailsToStorage();
    }
    console.log('g emails is:', gEmails)
    return Promise.resolve(gEmails);
}

function getDeletedEmailsToDisplay() {
    gDeletedEmails = loadDeletedEmailsFromStorage();
    if (!gDeletedEmails || gDeletedEmails.length < 1) {
        gDeletedEmails = []
        saveDeletedEmailsToStorage();
    }
    console.log('g gDeletedEmails is:', gDeletedEmails)
    return Promise.resolve(gDeletedEmails);
}

function deleteEmail(id) {
    gDeletedEmails = loadDeletedEmailsFromStorage();
    if (!gDeletedEmails || gDeletedEmails.length < 1) {
        gDeletedEmails = []
    }
    return getEmailIdxById(id).then(res => {
        if (res === undefined) {
            return getDeletedEmailIdxById(id)
                .then(res => {
                    gDeletedEmails.splice(res, 1)
                    console.log(gDeletedEmails)
                    saveDeletedEmailsToStorage();
                    return res
                })
        }
        const email = gEmails.splice(res, 1)
        gDeletedEmails.push(email[0])
        saveEmailsToStorage();
        saveDeletedEmailsToStorage();
        return email.id; // returns promise
    })

}

function getEmailById(id) {
    const email = gEmails.find(email => email.id === id)
    return Promise.resolve(email);
}

function getEmailIdxById(id) {
    const index = gEmails.findIndex(email => email.id === id)
    if (index === -1) return Promise.resolve()
    return Promise.resolve(index);
}

function getDeletedEmailIdxById(id) {
    const index = gDeletedEmails.findIndex(email => email.id === id)
    if (index === -1) return Promise.resolve()
    return Promise.resolve(index);
}

function saveEmailsToStorage() {
    storageService.saveToStorage(EMAIL_STORAGE_KEY, gEmails)
}

function saveDeletedEmailsToStorage() {
    storageService.saveToStorage(DELETED_EMAIL_STORAGE_KEY, gDeletedEmails)
}

function loadEmailsFromStorage() {
    return storageService.loadFromStorage(EMAIL_STORAGE_KEY)
}

function loadDeletedEmailsFromStorage() {
    return storageService.loadFromStorage(DELETED_EMAIL_STORAGE_KEY, )
}