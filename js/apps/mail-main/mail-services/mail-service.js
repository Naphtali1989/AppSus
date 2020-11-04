var gMails = [
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594, id: 'u101' },
    { subject: 'really??', body: 'Shut up!', isRead: false, sentAt: 1551133930594, id: 'u102' },
    { subject: 'Idan?', body: 'What do you get git?!', isRead: false, sentAt: 1551133930594, id: 'u103' },
    { subject: 'Naphtali?', body: 'You are so lazy!!', isRead: false, sentAt: 1551133930594, id: 'u104' },
]

function getMailsToDisplay() {
    return Promise.resolve(gMails);
}

export const mailService = {
    getMailsToDisplay,
}