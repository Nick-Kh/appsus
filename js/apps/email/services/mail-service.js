import {
  storageService
} from '../../../../services/storage-service.js'

export const emailService = {
  query,
  removeEmail
}

const emailCount = 10;

const emails = [];

function query() {
  if (!emails.length) createEmails();
  return Promise.resolve(emails)
}

function createEmail() {
  return {
    id: makeId(),
    from: 'Puki',
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

function removeEmail(emailId) {
  let emailIdx = emails.findIndex(email => email.id === emailId)
  emails.splice (emailIdx, 1)
}

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}