import { storageService } from '../../../../services/storage-service.js'

export const emailService = {
  query
}

const emailCount = 10;

const emails = [];

function query() {
  createEmails();
  return Promise.resolve(emails)
}

function createEmail() {
  return {
    id: makeId(),
    subject: 'Subject',
    body: 'Body',
    isRead: Math.random() > 0.5 ? true : false,
    sentAt: Date.now()
  }
}

function createEmails() {
  for (let i = 0; i < emailCount; i++) {
    emails.push(createEmail())
  }
}

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}