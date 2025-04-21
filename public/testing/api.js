// Replace 'your-username' with the actual username if you want to filter by a user
const apiUrl = 'https://dev.to/api/articles'; // This fetches all articles

// Use fetch to get data from the API
fetch(apiUrl)
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        console.log('Fetched articles:', data); // Log the articles to the console
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
