const apiKey = process.env.REACT_APP_API_KEY;

export const fetchJokes = async (searchTerm) => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => { response.json() })
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
