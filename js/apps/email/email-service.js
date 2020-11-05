import { storageService } from '../../services/storage-service.js';
import { utilService } from '../../services/util-service.js';

const EMAIL_STORAGE_KEY = 'emailDB';
const defaultEmails = [{
        composer: 'Naphtali',
        composerEmail: 'naphtali.com@gmalla.co.ir',
        subject: 'have you heard????',
        body: 'That... Bird is the word?!?!?!?!',
        isRead: false,
        isMarked: false,
        isSent: true,
        isDraft: false,
        isTrash: false,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: 'Idan',
        composerEmail: 'idandaman@warla.cop',
        subject: `I'm going to the gym man`,
        body: 'Shut up!!!!!!!!!!!!!',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: 'Eyal',
        composerEmail: 'thisisfine@codingacoffe.lol',
        subject: `You guys rock! you are the best students in this course Yo!`,
        body: 'For realZ! i love you so much, i wish i can work with you every day of every week!',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: utilService.getRandomDate(),
        id: utilService.makeId(11)
    },
    {
        composer: 'GitHub',
        composerEmail: 'official@githard.come',
        subject: 'Naphtali?',
        body: 'You are so lazy!! go back to work!',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: utilService.getRandomDate(),
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

function getDeletedEmailsToDisplay() {
    gDeletedEmails = loadDeletedEmailsFromStorage();
    if (!gDeletedEmails || gDeletedEmails.length < 1) {
        gDeletedEmails = []
        saveDeletedEmailsToStorage();
    }
    return Promise.resolve(gDeletedEmails);
}

// function getDeletedEmailsToDisplay() {
//     gDeletedEmails = loadDeletedEmailsFromStorage();
//     if (!gDeletedEmails || gDeletedEmails.length < 1) {
//         gDeletedEmails = []
//         saveDeletedEmailsToStorage();
//     }
//     console.log('g gDeletedEmails is:', gDeletedEmails)
//     return Promise.resolve(gDeletedEmails);
// }

function deleteEmail(id) {
    return getEmailIdxById(id).then(res => {
        // if (!gEmails[res].isTrash) {
        //     gEmails[res].isTrash = true;
        //     saveEmailsToStorage();
        //     return gEmails[res].id; // returns promise
        // }
        gEmails.splice(res, 1)
        saveEmailsToStorage();
        return Promise.resolve(gEmails[0].id)
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

function _getEmptyEmail() {
    return {
        composer: '',
        composerEmail: '',
        subject: '',
        body: '',
        isRead: false,
        isMarked: false,
        isSent: false,
        isDraft: false,
        isTrash: false,
        sentAt: new Date(),
        id: utilService.makeId(11)
    }
}