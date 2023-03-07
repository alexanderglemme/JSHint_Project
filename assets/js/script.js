const API_KEY = "IdK7JE_YBh9x9vj8HzTT7JIc9Wg";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const `${API_URL}?api_key=${API_KEY}`
}