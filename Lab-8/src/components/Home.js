import React, { useState } from "react";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [result, setResult] = useState("");

  function handleShorten() {
    if (!longUrl.trim()) return;
    const code = shortCode.trim() || Math.random().toString(36).slice(2, 8);
    setResult(`https://cpt405.co/${code}`);
  }

  return (
    <div className="card">
      <h1>Link Shrinker</h1>

      <label>Long URL:</label>
      <input
        type="text"
        placeholder="https://example.com/very/long/url"
        value={longUrl}
        onChange={(e) => { setLongUrl(e.target.value); setResult(""); }}
      />

      <label>Enter short code:</label>
      <input
        type="text"
        placeholder="e.g. react101"
        value={shortCode}
        onChange={(e) => { setShortCode(e.target.value); setResult(""); }}
      />

      <div className="btn-row">
        <button className="btn-shorten" onClick={handleShorten}>
          Shorten
        </button>
      </div>

      {result && (
        <>
          <h2>Short URL</h2>
          <div className="result-box">{result}</div>
        </>
      )}
    </div>
  );
}

export default Home;
