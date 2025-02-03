let books = [];

function loadBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            books = data;
            displayBooks(books);
        })
        .catch(error => console.error('Erro ao carregar livros:', error));
}

function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${book.title}</strong> - ${book.author} (${book.year})<br>
            Gênero: ${book.genre}<br>
            Avaliação: ${book.rating || 'N/A'}
            <button onclick="rateBook('${book.title}', 1)">1</button>
            <button onclick="rateBook('${book.title}', 2)">2</button>
            <button onclick="rateBook('${book.title}', 3)">3</button>
            <button onclick="rateBook('${book.title}', 4)">4</button>
            <button onclick="rateBook('${book.title}', 5)">5</button>
        `;
        bookList.appendChild(li);
    });
}

document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    const newBook = {
        title,
        author,
        genre,
        year: parseInt(year),
        rating: null
    };

    books.push(newBook);
    displayBooks(books);
    saveBooks();
    this.reset();
});

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

function sortBooks() {
    const criteria = document.getElementById('sortCriteria').value;
    const sortedBooks = books.sort((a, b) => {
        if (a[criteria] < b[criteria]) return -1;
        if (a[criteria] > b[criteria]) return 1;
        return 0;
    });
    displayBooks(sortedBooks);
}

function rateBook(title, rating) {
    const book = books.find(book => book.title === title);
    if (book) {
        book.rating = rating;
        displayBooks(books);
        saveBooks();
    }
}

function saveBooks() {
    const data = JSON.stringify(books, null, 2);
    fetch('books.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
    .then(response => response.json())
    .then(data => console.log('Livros salvos com sucesso:', data))
    .catch(error => console.error('Erro ao salvar livros:', error));
}

loadBooks();