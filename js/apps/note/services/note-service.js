import { makeId } from './utils-service.js'

export const noteService = {
  query,
  removeNote,
  addNote,
}

let DEFAULT_NOTE = {
  id: 0,
  type: 'NoteText',
  isPinned: true,
  info: {
    txt: 'Fullstack Me Baby!',
  },
  style: {
    backgroundColor: 'green',
    height: '100px',
  },
}

let gNotes = [
  {
    id: makeId(),
    type: 'NoteText',
    isPinned: true,
    info: {
      title: 'FULLSTACK',
      txt: 'Fullstack Me Baby!',
    },
    style: {
      backgroundColor: 'green',
      height: '100px',
    },
  },
  {
    id: makeId(),
    type: 'NoteImg',
    info: {
      url: 'http://coding-academy.org/books-photos/20.jpg',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: '#00d',
      height: '400px',
    },
  },
  {
    id: makeId(),
    type: 'NoteTodos',
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: 'red',
      color: 'white',
      height: '200px',
    },
  },
  {
    id: makeId(),
    type: 'NoteText',
    info: {
      title: 'How was it:',
      txt: 'Finish the project',
    },
    style: {
      backgroundColor: 'darkorange',
      color: 'white',
      height: '250px',
    },
  },
  {
    id: makeId(),
    type: 'NoteImg',
    info: {
      url: 'http://coding-academy.org/books-photos/2.jpg',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: 'purple',
      color: 'white',
    },
  },
]

function query() {
  return Promise.resolve(gNotes)
}

function addNote(note) {
  let newNote = { ...note, id: makeId() }
  console.log('adding new note')
  console.log(note)
  gNotes.push(newNote)
}

function removeNote(id) {
  gNotes = gNotes.filter((note) => note.id !== id)
}
