const EMAIL_STORAGE_KEY = 'emailDB';
const DELETED_EMAIL_STORAGE_KEY = 'deletedEmailDB';


var gEmails = [
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594, id: 'u101' },
    { subject: 'really??', body: 'Shut up!', isRead: false, sentAt: 1551133930594, id: 'u102' },
    { subject: 'Idan?', body: 'What do you get git?!', isRead: false, sentAt: 1551133930594, id: 'u103' },
    { subject: 'Naphtali?', body: 'You are so lazy!!', isRead: false, sentAt: 1551133930594, id: 'u104' },
]

var gDeletedEmails = [];

export const emailService = {
    getEmailsToDisplay,
    deleteEmail,
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
    return gEmails.find(email => email.id === id)
}

function getEmailIdxById(id) {
    return gEmails.findIndex(email => email.id === id)
}