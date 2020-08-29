import { makeId } from './utils-service.js'
import { storageService } from '../../../../services/storage-service.js'

export const noteService = {
  query,
  removeNote,
  addNote,
  notePin,
  getNoteById,
  updateNote,
  changeColor,
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
      backgroundColor: 'darkred',
    },
  },
  {
    id: makeId(),
    type: 'NoteTodos',
    isPinned: false,

    info: {
      label: 'How was it:',
      todos: [
        { txt: 'do that', createdAt: '', isChecked: false },
        { txt: 'do this', createdAt: '', isChecked: false },
      ],
    },
    style: {
      backgroundColor: 'red',
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

function updateNote(id, newNote) {
  gNotes.forEach((note) => {
    if (note.id === id) {
      note = newNote
    }
  })
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

function changeColor(id, color) {
  gNotes.forEach((note) => {
    if (note.id === id) note.style.backgroundColor = color
  })
}
