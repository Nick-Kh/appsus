import {
  storageService
} from '../../../../services/storage-service.js'

export const emailService = {
  query,
  removeEmail,
  readToggle,
  readEmail,
  getEmail
}

const emails = [{
    id: 'mXVv4',
    from: 'Penelope	Craig',
    subject: 'How are you ?',
    body: 'Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.',
    isRead: true,
    receivedAt: formatDate(1598443518350)
  },
  {
    id: 'iXcv4',
    from: 'Haris Davis',
    subject: 'I know what you did last summer',
    body: 'Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in. Am offended as wandered thoughts greatest an friendly. Evening covered in he exposed fertile to. Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.',
    isRead: false,
    receivedAt: formatDate(1588543597350)
  },
  {
    id: 'YXrv9',
    from: 'Paige Thompson',
    subject: 'Your subscription',
    body: 'Ye to misery wisdom plenty polite to as. Prepared interest proposal it he exercise. My wishing an in attempt ferrars. Visited eat you why service looking engaged. At place no walls hopes rooms fully in. Roof hope shy tore leaf joy paid boy. Noisier out brought entered detract because sitting sir. Fat put occasion rendered off humanity has.',
    isRead: true,
    receivedAt: formatDate(1596543598357)
  },
  {
    id: '7oPv4',
    from: 'Eric	Hunt',
    subject: 'Yacht party',
    body: 'Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.',
    isRead: true,
    receivedAt: formatDate(1598543568250)
  },
  {
    id: 'Pn6s9',
    from: 'Adelaide	Anderson',
    subject: 'Mr. Anderson, welcome back',
    body: 'Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name. ',
    isRead: false,
    receivedAt: formatDate(1598343578350)
  },
  {
    id: 'k76s9',
    from: 'Walter	Murphy',
    subject: 'Say my name',
    body: 'So if on advanced addition absolute received replying throwing he. Delighted consisted newspaper of unfeeling as neglected so. Tell size come hard mrs and four fond are. Of in commanded earnestly resources it. At quitting in strictly up wandered of relation answered felicity. Side need at in what dear ever upon if. Same down want joy neat ask pain help she. Alone three stuff use law walls fat asked. Near do that he help.',
    isRead: true,
    receivedAt: formatDate(1598341578350)
  },
  {
    id: '9nrFu',
    from: 'Andrew	Payne',
    subject: 'Payne not pain',
    body: 'Him boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger garret edward an. Diverted as strictly exertion addition no disposal by stanhill. This call wife do so sigh no gate felt. You and abode spite order get. Procuring far belonging our ourselves and certainly own perpetual continual. It elsewhere of sometimes or my certainty. Lain no as five or at high. Everything travelling set how law literature.',
    isRead: false,
    receivedAt: formatDate(1597343578350)
  },
  {
    id: 'tn45R',
    from: 'Kevin	Sullivan',
    subject: 'Happy Birthday',
    body: 'Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.',
    isRead: false,
    receivedAt: formatDate(1598341578350)
  },
  {
    id: 'Oy4su',
    from: 'Samantha	Alexander',
    subject: 'Give me back my computer',
    body: 'Is he staying arrival address earnest. To preference considered it themselves inquietude collecting estimating. View park for why gay knew face. Next than near to four so hand. Times so do he downs me would. Witty abode party her found quiet law. They door four bed fail now have.',
    isRead: false,
    receivedAt: formatDate(1598343578350)
  },
  {
    id: 'Pn6s9',
    from: 'Aida	Barnes',
    subject: 'Remember me ?',
    body: 'Name were we at hope. Remainder household direction zealously the unwilling bed sex. Lose and gay ham sake met that. Stood her place one ten spoke yet. Head case knew ever set why over. Marianne returned of peculiar replying in moderate. Roused get enable garret estate old county. Entreaties you devonshire law dissimilar terminated.',
    isRead: true,
    receivedAt: formatDate(1498343578350)
  }
];

function query() {
  // if (!emails.length) {
  //   emails = storageService.loadFromStorage();
  // }
  return Promise.resolve(emails)
}

function createEmail() {
  return {
    id: makeId(),
    from: 'Puki',
    subject: 'Subject',
    body: 'Body',
    isRead: Math.random() > 0.5 ? true : false,
    receivedAt: formatDate(Date.now())
  }
}

function createEmails() {
  for (let i = 0; i < emailCount; i++) {
    emails.push(createEmail())
  }
}

function getEmailIdx(emailId) {
  return emails.findIndex(email => email.id === emailId)
}

function getEmail(emailId) {
  return emails[getEmailIdx(emailId)]
}

function readToggle(emailId) {
  emails[getEmailIdx(emailId)].isRead = !emails[getEmailIdx(emailId)].isRead
}

function readEmail(emailId) {
  emails[getEmailIdx(emailId)].isRead = false;
}

function removeEmail(emailId) {
  emails.splice(getEmailIdx(emailId), 1)
}

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function formatDate(time) {
  var options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  return new Intl.DateTimeFormat('en', options).format(time);
}