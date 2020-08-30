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
      title: 'Nice Quote',
      txt: '"Only the wisest and stupidest of men never change."',
    },
    style: {
      backgroundColor: 'green',
    },
  },
  {
    id: makeId(),
    type: 'NoteImg',
    isPinned: true,
    info: {
      url: 'https://media1.giphy.com/media/SKGo6OYe24EBG/giphy.gif',
      title: 'Sponge Bob',
    },
    style: {
      backgroundColor: 'darkred',
    },
  },
  {
    id: makeId(),
    type: 'NoteTodos',
    isPinned: true,

    info: {
      title: 'Weekly todos',
      todos: [
        { txt: 'Feed the cat', completedAt: '29/8/2020', isChecked: true },
        { txt: 'Finish Sprint 3', completedAt: '', isChecked: false },
        {
          txt: 'Grab some beer',
          completedAt: '',
          isChecked: false,
        },
      ],
    },
    style: {
      backgroundColor: 'red',
    },
  },
  {
    id: makeId(),
    type: 'NoteText',
    isPinned: false,
    info: {
      title: 'Note to self',
      txt: 'Save your notes',
    },
    style: {
      backgroundColor: 'darkorange',
    },
  },
  {
    id: makeId(),
    type: 'NoteImg',
    isPinned: true,
    info: {
      url: 'http://coding-academy.org/books-photos/2.jpg',
      title: 'Check this book',
    },
    style: {
      backgroundColor: 'purple',
    },
  },
  {
    id: makeId(),
    type: 'NoteVid',
    isPinned: false,
    info: {
      url: 'https://www.youtube.com/embed/jV8B24rSN5o',
      title: 'Tutorial to watch',
    },
    style: {
      backgroundColor: 'purple',
    },
  },
  {
    id: makeId(),
    type: 'NoteImg',
    isPinned: true,
    info: {
      url: 'https://starfishm.com.au/wp-content/uploads/2019/12/3i907q.jpg',
      title: 'Meme of the day',
    },
    style: {
      backgroundColor: 'orange',
    },
  },
]

let gSavedNotes = []

function query() {
  let savedNotes = storageService.loadFromStorage('notes')
  if (savedNotes) gSavedNotes = savedNotes
  return Promise.resolve([...gSavedNotes, ...gNotes])
}

function addNote(note) {
  let newNote = { ...note, id: makeId(), isPinned: false }
  gSavedNotes.push(newNote)
  storageService.saveToStorage('notes', gSavedNotes)
}

function updateNote(id, newNote) {
  gNotes.forEach((note) => {
    if (note.id === id) {
      note = newNote
    }
  })
  gSavedNotes.forEach((note) => {
    if (note.id === id) {
      note = newNote
    }
  })
  storageService.saveToStorage('notes', gSavedNotes)
}

function removeNote(id) {
  gSavedNotes = gSavedNotes.filter((note) => note.id !== id)
  gNotes = gNotes.filter((note) => note.id !== id)
  storageService.saveToStorage('notes', gSavedNotes)
}

function notePin(id) {
  gNotes.forEach((note) => {
    if (note.id === id) {
      note.isPinned = !note.isPinned
    }
  })
  gSavedNotes.forEach((note) => {
    if (note.id === id) {
      note.isPinned = !note.isPinned
    }
  })
  storageService.saveToStorage('notes', gSavedNotes)
}

function getNoteById(id) {
  return gNotes.find((note) => note.id === id)
}

function changeColor(id, color) {
  gNotes.forEach((note) => {
    if (note.id === id) note.style.backgroundColor = color
  })

  gSavedNotes.forEach((note) => {
    if (note.id === id) note.style.backgroundColor = color
  })
  storageService.saveToStorage('notes', gSavedNotes)
}
