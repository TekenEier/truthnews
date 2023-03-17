// Search function
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = document.querySelector('#search-input').value;
  const articles = document.querySelectorAll('main article');
  
  articles.forEach(function(article) {
    const articleTitle = article.querySelector('h2').textContent;
    const articleContent = article.querySelector('p').textContent;
    if (articleTitle.includes(searchTerm) || articleContent.includes(searchTerm)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
});
