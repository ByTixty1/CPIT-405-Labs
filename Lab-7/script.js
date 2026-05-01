const ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY";
const API_URL = "https://api.unsplash.com/search/photos";

const queryInput = document.getElementById("query");
const statusMsg = document.getElementById("status-msg");
const resultsDiv = document.getElementById("results");

function getQuery() {
    return queryInput.value.trim();
}

function showStatus(method) {
    statusMsg.textContent = `Fetching via: ${method}`;
}

function renderImages(photos) {
    resultsDiv.innerHTML = "";
    if (!photos.length) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
    }
    photos.forEach((photo) => {
        const card = document.createElement("div");
        card.className = "img-card";
        card.innerHTML = `
            <img src="${photo.urls.small}" alt="${photo.alt_description || photo.id}" />
            <p>${photo.alt_description || "No description"}</p>
        `;
        resultsDiv.appendChild(card);
    });
}

// ── 1. XHR ──
function searchXHR(query) {
    showStatus("XMLHttpRequest");
    const url = `${API_URL}?query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", () => {
        const data = JSON.parse(xhr.responseText);
        renderImages(data.results);
        statusMsg.textContent = `XHR — found ${data.results.length} results`;
    });
    xhr.addEventListener("error", () => {
        statusMsg.textContent = "XHR request failed.";
    });
    xhr.send();
}

// ── 2. Fetch + Promise ──
function searchPromise(query) {
    showStatus("Fetch + Promise");
    const url = `${API_URL}?query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            renderImages(data.results);
            statusMsg.textContent = `Promise — found ${data.results.length} results`;
        })
        .catch(() => {
            statusMsg.textContent = "Fetch (Promise) request failed.";
        });
}

// ── 3. Fetch + Async/Await ──
async function searchAsync(query) {
    showStatus("Fetch + Async/Await");
    const url = `${API_URL}?query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        renderImages(data.results);
        statusMsg.textContent = `Async/Await — found ${data.results.length} results`;
    } catch {
        statusMsg.textContent = "Fetch (Async/Await) request failed.";
    }
}

// ── Events ──
document.getElementById("btn-xhr").addEventListener("click", () => {
    const q = getQuery();
    if (q) searchXHR(q);
});

document.getElementById("btn-promise").addEventListener("click", () => {
    const q = getQuery();
    if (q) searchPromise(q);
});

document.getElementById("btn-async").addEventListener("click", () => {
    const q = getQuery();
    if (q) searchAsync(q);
});

queryInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const q = getQuery();
        if (q) searchAsync(q);
    }
});
