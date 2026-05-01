import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_KEY, BASE_URL } from "../config";

function RecipeDetail({ match }) {
  const id = match.params.id;
  const [recipe, setRecipe] = useState(null);
  const [status, setStatus] = useState("Loading...");
  const history = useHistory();

  useEffect(() => {
    fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setStatus("");
      })
      .catch(() => setStatus("Failed to load recipe."));
  }, [id]);

  return (
    <>
      <div className="main">
        <div className="detail">
          <button className="btn-back" onClick={() => history.push("/")}>
            ← Back
          </button>

          {status && <p className="status-msg">{status}</p>}

          {recipe && (
            <>
              <h1>{recipe.title}</h1>
              {recipe.image && (
                <img src={recipe.image} alt={recipe.title} />
              )}

              <h2>Ingredients</h2>
              <ul>
                {(recipe.extendedIngredients || []).map((ing, i) => (
                  <li key={i}>{ing.original}</li>
                ))}
              </ul>

              <h2>Instructions</h2>
              <div
                className="instructions"
                dangerouslySetInnerHTML={{
                  __html:
                    recipe.instructions || "<p>No instructions available.</p>",
                }}
              />
            </>
          )}
        </div>
      </div>
      <footer>CPIT-405 | React Examples</footer>
    </>
  );
}

export default RecipeDetail;
