import { storageService } from '../../services/storage-service.js';
import { utilService } from '../../services/util-service.js';

const EMAIL_STORAGE_KEY = 'emailDB';
const defaultEmails = [{
        subject: 'Wassap?',
        body: 'Pick up!!!!!!!!!',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: 1551133930594,
        id: utilService.makeId(11)
    },
    {
        subject: 'really??',
        body: 'Shut up!!!!!!!!!!!!!',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: 1551133930594,
        id: utilService.makeId(11)
    },
    {
        subject: 'Idan?',
        body: 'What do you get git?!',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: 1551133930594,
        id: utilService.makeId(11)
    },
    {
        subject: 'Naphtali?',
        body: 'You are so lazy!!',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: 1551133930594,
        id: utilService.makeId(11)
    },
]

// var gFilterBy = null;
var gEmails;

export const emailService = {
    getEmailsToDisplay,
    deleteEmail,
    getEmailById,
    toggleEmailMark,
    toggleEmailRead,

}

function toggleEmailMark(emailId) {
    getEmailById(emailId)
        .then(res => {
            res.isMarked = !res.isMarked;
            saveEmailsToStorage();
        })
}

function toggleEmailRead(emailId) {
    getEmailById(emailId)
        .then(res => {
            res.isRead = !res.isRead;
            saveEmailsToStorage();
        })
}

function getEmailsToDisplay(filterBy) {
    gEmails = loadEmailsFromStorage();
    if (!gEmails || gEmails.length < 1) {
        gEmails = defaultEmails
        saveEmailsToStorage();
    }
    var emails;
    if (!filterBy) {
        emails = gEmails.filter(mail => !mail.isTrash)
        return Promise.resolve(emails);
    }
    emails = gEmails.filter(email => {
        return email[filterBy]
    })
    return Promise.resolve(emails);
}

function deleteEmail(id) {
    return getEmailIdxById(id).then(res => {
        // if (!gEmails[res].isTrash) {
        //     gEmails[res].isTrash = true;
        //     saveEmailsToStorage();
        //     return gEmails[res].id; // returns promise
        // }
        gEmails.splice(res, 1)
        saveEmailsToStorage();
        return Promise.resolve()
    })
}

function getEmailById(id) {
    const email = gEmails.find(email => email.id === id)
    return Promise.resolve(email);
}

function getEmailIdxById(id) {
    const index = gEmails.findIndex(email => email.id === id)
    if (index === -1) return Promise.resolve(0)
    return Promise.resolve(index);
}

function saveEmailsToStorage() {
    storageService.saveToStorage(EMAIL_STORAGE_KEY, gEmails)
}

function loadEmailsFromStorage() {
    return storageService.loadFromStorage(EMAIL_STORAGE_KEY)
}