const API_KEY = "IdK7JE_YBh9x9vj8HzTT7JIc9Wg";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        displayError(data);
        throw new Error(data.error);

    }
}

function displayStatus(data) {
    document.getElementById("resultsModalTitle").innerText = "API key status:"
    document.getElementById("results-content").innerHTML = `<div>Your key is valid until: ${data.expiry}</div>`
    resultsModal.show()
}

function displayError(data) {
    document.getElementById("resultsModalTitle").innerText = "API key status:"
    document.getElementById("results-content").innerHTML = `<div>${data.error}. <br>Please go to:<br>https://ci-jshint.herokuapp.com/ to find out more.</div>`
    resultsModal.show()
}