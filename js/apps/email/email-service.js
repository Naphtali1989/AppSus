const EMAIL_STORAGE_KEY = 'emailDB';
const DELETED_EMAIL_STORAGE_KEY = 'deletedEmailDB';

var gDeletedEmails = [];

var gEmails = [
    { subject: 'Wassap?', body: 'Pick up!!!!!!!!!', isRead: false, isMarked: false, sentAt: 1551133930594, id: 'u101' },
    { subject: 'really??', body: 'Shut up!!!!!!!!!!!!!', isRead: false, isMarked: false, sentAt: 1551133930594, id: 'u102' },
    { subject: 'Idan?', body: 'What do you get git?!', isRead: false, isMarked: false, sentAt: 1551133930594, id: 'u103' },
    { subject: 'Naphtali?', body: 'You are so lazy!!', isRead: false, isMarked: false, sentAt: 1551133930594, id: 'u104' },
]


export const emailService = {
    getEmailsToDisplay,
    deleteEmail,
    getEmailById,
}

function getEmailsToDisplay() {
    return Promise.resolve(gEmails);
}

function deleteEmail(id) {
    var idx = getEmailIdxById(id)
    const email = gEmails.splice(idx, 1)
    gDeletedEmails.push(email[0])

}

function getEmailById(id) {
    const email = gEmails.find(email => email.id === id)
    return Promise.resolve(email);
}

function getEmailIdxById(id) {
    const index = gEmails.findIndex(email => email.id === id)
    return Promise.resolve(index);
}