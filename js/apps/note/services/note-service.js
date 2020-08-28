import { makeId } from './utils-service.js'

export const noteService = {
  query,
  removeNote,
  addNote,
  notePin,
  editNote,
  getNoteById,
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
    },
  },
  {
    id: makeId(),
    type: 'NoteImg',
    isPinned: false,
    info: {
      url: 'http://coding-academy.org/books-photos/20.jpg',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: makeId(),
    type: 'NoteTodos',
    isPinned: false,
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
    },
  },
  {
    id: makeId(),
    type: 'NoteText',
    isPinned: true,
    info: {
      title: 'How was it:',
      txt: 'Finish the project',
    },
    style: {
      backgroundColor: 'darkorange',
      color: 'white',
    },
  },
  {
    id: makeId(),
    type: 'NoteImg',
    isPinned: false,
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
  let newNote = { ...note, id: makeId(), isPinned: false }
  gNotes.push(newNote)
}

function removeNote(id) {
  gNotes = gNotes.filter((note) => note.id !== id)
}

function notePin(id) {
  gNotes.forEach((note) => {
    if (note.id === id) {
      note.isPinned = !note.isPinned
    }
  })
}

function getNoteById(id) {
  return gNotes.find((note) => note.id === id)
}

function editNote(note) {
  console.log('in edit note')
}
