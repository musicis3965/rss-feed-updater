document.getElementById('rssForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const link = document.getElementById('link').value;
    
    // Call your backend API to update the RSS feed
    fetch('YOUR_HEROKU_BACKEND_URL/update-rss', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, link })
    })
    .then(response => response.json())
    .then(data => {
        alert('RSS Feed updated!');
        // Clear the form
        e.target.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
