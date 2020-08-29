import {
  storageService
} from './storage-service.js'

export const bookService = {
  query,
  currencyFormat,
  pagesCount,
  oldOrNew,
  checkPrice,
  getById,
  addReview,
  getBooks,
  addBook
}

const books = [{
    "id": "OXeMG8wNskc",
    "title": "metus hendrerit",
    "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
    "authors": [
      "Barbara Cartland"
    ],
    "publishedDate": 1999,
    "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
    "pageCount": 713,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
    "language": "en",
    "listPrice": {
      "amount": 109,
      "currencyCode": "EUR",
      "isOnSale": false
    }
  },
  {
    "id": "JYOJa2NpSCq",
    "title": "morbi",
    "subtitle": "lorem euismod dictumst inceptos mi",
    "authors": [
      "Barbara Cartland"
    ],
    "publishedDate": 1978,
    "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
    "pageCount": 129,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
    "language": "sp",
    "listPrice": {
      "amount": 44,
      "currencyCode": "EUR",
      "isOnSale": true
    }
  },
  {
    "id": "1y0Oqts35DQ",
    "title": "at viverra venenatis",
    "subtitle": "gravida libero facilisis rhoncus urna etiam",
    "authors": [
      "Dr. Seuss"
    ],
    "publishedDate": 1999,
    "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
    "pageCount": 972,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
    "language": "he",
    "listPrice": {
      "amount": 108,
      "currencyCode": "ILS",
      "isOnSale": false
    }
  },
  {
    "id": "kSnfIJyikTP",
    "title": "dictum",
    "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
    "authors": [
      "Danielle Steel"
    ],
    "publishedDate": 1978,
    "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
    "pageCount": 303,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
    "language": "en",
    "listPrice": {
      "amount": 30,
      "currencyCode": "EUR",
      "isOnSale": true
    }
  },
  {
    "id": "f4iuVmbuKCC",
    "title": "sem himenaeos aptent",
    "subtitle": "interdum per habitasse luctus purus est",
    "authors": [
      "Dr. Seuss"
    ],
    "publishedDate": 2011,
    "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
    "pageCount": 337,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
    "language": "sp",
    "listPrice": {
      "amount": 19,
      "currencyCode": "USD",
      "isOnSale": false
    }
  },
  {
    "id": "U2rfZO6oBZf",
    "title": "mi ante posuere",
    "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
    "authors": [
      "Leo Tolstoy"
    ],
    "publishedDate": 1978,
    "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
    "pageCount": 748,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
    "language": "en",
    "listPrice": {
      "amount": 91,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "xI0wrXaaAcq",
    "title": "non",
    "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
    "authors": [
      "Leo Tolstoy"
    ],
    "publishedDate": 2011,
    "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
    "pageCount": 65,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
    "language": "he",
    "listPrice": {
      "amount": 90,
      "currencyCode": "USD",
      "isOnSale": false
    }
  },
  {
    "id": "9laHCEdSpFy",
    "title": "tristique",
    "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
    "authors": [
      "Dr. Seuss"
    ],
    "publishedDate": 1999,
    "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
    "pageCount": 299,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
    "language": "he",
    "listPrice": {
      "amount": 176,
      "currencyCode": "EUR",
      "isOnSale": false
    }
  },
  {
    "id": "nGhVwZvGCGp",
    "title": "urna ornare gravida",
    "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
    "authors": [
      "Jin Yong"
    ],
    "publishedDate": 2011,
    "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
    "pageCount": 803,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
    "language": "sp",
    "listPrice": {
      "amount": 116,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "Q8Q9Lsd03BD",
    "title": "consequat neque volutpat",
    "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
    "authors": [
      "Dr. Seuss"
    ],
    "publishedDate": 1978,
    "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
    "pageCount": 891,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
    "language": "en",
    "listPrice": {
      "amount": 145,
      "currencyCode": "EUR",
      "isOnSale": false
    }
  },
  {
    "id": "bd7a76kARao",
    "title": "risus",
    "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
    "authors": [
      "Danielle Steel"
    ],
    "publishedDate": 2018,
    "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
    "pageCount": 86,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
    "language": "sp",
    "listPrice": {
      "amount": 157,
      "currencyCode": "ILS",
      "isOnSale": true
    }
  },
  {
    "id": "qKyG0vqeO3e",
    "title": "interdum etiam vulputate",
    "subtitle": "velit sapien eget tincidunt nunc tortor",
    "authors": [
      "Danielle Steel"
    ],
    "publishedDate": 2018,
    "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
    "pageCount": 882,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
    "language": "sp",
    "listPrice": {
      "amount": 57,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "2RvT48ZNInj",
    "title": "sagittis justo",
    "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
    "authors": [
      "Agatha Christie"
    ],
    "publishedDate": 2011,
    "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
    "pageCount": 598,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
    "language": "en",
    "listPrice": {
      "amount": 167,
      "currencyCode": "ILS",
      "isOnSale": false
    }
  },
  {
    "id": "5z2s9pDXAYj",
    "title": "quam ullamcorper himenaeos",
    "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
    "authors": [
      "Danielle Steel"
    ],
    "publishedDate": 1999,
    "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
    "pageCount": 608,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
    "language": "he",
    "listPrice": {
      "amount": 150,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "zBZu5cDEWha",
    "title": "quis",
    "subtitle": "suscipit turpis etiam turpis libero lobortis",
    "authors": [
      "Jin Yong"
    ],
    "publishedDate": 2011,
    "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
    "pageCount": 583,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
    "language": "en",
    "listPrice": {
      "amount": 58,
      "currencyCode": "ILS",
      "isOnSale": true
    }
  },
  {
    "id": "aOI7tQuPZ2f",
    "title": "aliquam aliquet dapibus",
    "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
    "authors": [
      "Leo Tolstoy"
    ],
    "publishedDate": 2011,
    "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
    "pageCount": 497,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
    "language": "en",
    "listPrice": {
      "amount": 78,
      "currencyCode": "USD",
      "isOnSale": false
    }
  },
  {
    "id": "WBooB82Uvwu",
    "title": "class",
    "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
    "authors": [
      "Danielle Steel"
    ],
    "publishedDate": 1999,
    "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
    "pageCount": 804,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
    "language": "en",
    "listPrice": {
      "amount": 118,
      "currencyCode": "ILS",
      "isOnSale": false
    }
  },
  {
    "id": "xm1z5bbZjlS",
    "title": "vitae",
    "subtitle": "class habitant at commodo semper ligula a bibendum",
    "authors": [
      "Leo Tolstoy"
    ],
    "publishedDate": 1999,
    "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
    "pageCount": 231,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
    "language": "he",
    "listPrice": {
      "amount": 60,
      "currencyCode": "EUR",
      "isOnSale": false
    }
  },
  {
    "id": "u3j6QIKLlJb",
    "title": "rhoncus vivamus",
    "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
    "authors": [
      "Agatha Christie"
    ],
    "publishedDate": 1978,
    "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
    "pageCount": 652,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
    "language": "he",
    "listPrice": {
      "amount": 110,
      "currencyCode": "USD",
      "isOnSale": true
    }
  },
  {
    "id": "vxYYYdVlEH3",
    "title": "donec mi ullamcorper",
    "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
    "authors": [
      "William Shakespeare"
    ],
    "publishedDate": 2011,
    "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
    "pageCount": 904,
    "categories": [
      "Computers",
      "Hack"
    ],
    "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
    "language": "sp",
    "listPrice": {
      "amount": 186,
      "currencyCode": "ILS",
      "isOnSale": true
    }
  }
]

const KEY_BOOKS = 'books';

function getBooks(searchKey) {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchKey}`)
    .then(res => res.data)
}

function addReview(bookId, review) {

}

function query() {
  return Promise.resolve(books)
}

function getById(bookId) {
  const book = books.find(book => book.id === bookId)
  return Promise.resolve(book)
}

function currencyFormat(code) {
  let curr;
  switch (code) {
    case 'ILS':
      curr = '₪';
      break;
    case 'USD':
      curr = '$';
      break;
    case 'EUR':
      curr = '€';
      break;
  }
  return curr;
}

function pagesCount(pages) {
  let readingTime;
  if (pages >= 500) readingTime = 'Long reading';
  else if (pages >= 200 && pages < 500) readingTime = 'Decent Reading';
  else if (pages < 200) readingTime = 'Light reading';
  return readingTime;
}

function oldOrNew(years) {
  let veteranOrNew;
  if (years > 10) veteranOrNew = 'Veteran Book';
  else if (years < 1) veteranOrNew = 'New!';
  return veteranOrNew;
}

function checkPrice(price) {
  let isHighPrice;
  if (price <= 20 && price > 0) isHighPrice = 'green';
  else if (price >= 150) isHighPrice = 'red';
  else isHighPrice = '';
  return isHighPrice;
}

function addBook(book) {
  const newBook = _createBook(book);
  let _books;
  query()
    .then(books => {
      _books = books;
      _books.unshift(newBook);
      // storageService.saveToStorage(KEY_BOOKS, _books);
    })
}

function _createBook(_book) {
  const book = {
    id: _book.id || makeId(),
    title: _book.volumeInfo.title || '',
    subtitle: _book.subtitle || '',
    authors: _book.volumeInfo.authors || [],
    publishedDate: _book.volumeInfo.publishedDate || '',
    description: _book.volumeInfo.description || '',
    pageCount: _book.volumeInfo.pageCount || '',
    categories: _book.volumeInfo.categories || [],
    thumbnail: _book.volumeInfo.imageLinks.thumbnail || '',
    language: _book.volumeInfo.imageLinks.language || '',
  }
  if (_book.saleInfo.listPrice) {
    book.listPrice = {
      amount: _book.saleInfo.listPrice.amount || '',
      currencyCode: _book.saleInfo.listPrice.currencyCode || '',
      isOnSale: _book.saleInfo.listPrice.isEbook || ''
    }
  } else {
    book.listPrice = {
      amount: 70,
      currencyCode: 'USD',
      isOnSale: false
    }
  }
  return book;
}

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}