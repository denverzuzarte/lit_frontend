fetch('../data/profile.json')
  .then(r => r.json())
  .then(data => {
    document.getElementById('stat-books-shared').textContent   = data.booksShared;
    document.getElementById('stat-books-borrowed').textContent = data.booksBorrowed;
    document.getElementById('stat-friends').textContent        = data.friends;
  });
