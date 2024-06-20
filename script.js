function loadPage(page) {
    const content = document.getElementById('content');
    
    fetch(page + '.html')
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
            content.innerHTML = '<p>Sorry, there was an error loading the page.</p>';
        });
}

// Load the home page by default
window.onload = function() {
    loadPage('home');
};