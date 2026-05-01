import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_KEY, BASE_URL } from "../config";

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [status, setStatus] = useState("");
  const history = useHistory();

  // Fetch default recipes when the component mounts
  useEffect(() => {
    setStatus("Loading recipes...");
    fetch(
      `${BASE_URL}/recipes/complexSearch?query=chicken&number=10&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.results || []);
        setStatus("");
      })
      .catch(() => setStatus("Could not load recipes. Check your API key."));
  }, []);

  // Fetch recipes based on user search
  function handleSearch() {
    if (!query.trim()) return;
    setStatus("Searching...");
    fetch(
      `${BASE_URL}/recipes/complexSearch?query=${encodeURIComponent(
        query
      )}&number=10&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.results || []);
        setStatus("");
      })
      .catch(() => setStatus("Search failed. Check your API key."));
  }

  return (
    <>
      <div className="main">
        <div className="search-row">
          <input
            className="search-input"
            type="text"
            placeholder="Search recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>
            SEARCH
          </button>
        </div>

        {status && <p className="status-msg">{status}</p>}

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="card-title">
                <a onClick={() => history.push(`/recipe/${recipe.id}`)}>
                  {recipe.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>CPIT-405 | React Examples</footer>
    </>
  );
}

export default Home;
