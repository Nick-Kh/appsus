export const noteService = {
  query,
}

const gNotes = [
  {
    id: 1,
    type: 'NoteText',
    isPinned: true,
    info: {
      txt: 'Fullstack Me Baby!',
    },
    style: {
      backgroundColor: 'green',
    },
  },
  {
    id: 2,
    type: 'NoteImg',
    info: {
      url: 'http://coding-academy.org/books-photos/20.jpg',
      title: 'Me playing Mi',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: 3,
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
    },
  },
]

function query() {
  return Promise.resolve(gNotes)
}
