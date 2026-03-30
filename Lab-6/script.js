document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("like-btn");
  const dislikeBtn = document.getElementById("dislike-btn");
  const likeCount = document.getElementById("like-count");
  const dislikeCount = document.getElementById("dislike-count");
  const commentInput = document.getElementById("comment-input");
  const commentSubmit = document.getElementById("comment-submit");
  const commentsContainer = document.getElementById("comments-container");
  const resetBtn = document.getElementById("reset-btn");

  let likes = 0;
  let dislikes = 0;
  let userVote = null;
  let comments = [];
  let hasCommented = false;

  // ── Cookie helpers ──
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
  }

  function getCookie(name) {
    const prefix = name + "=";
    const parts = document.cookie.split(";");
    for (let i = 0; i < parts.length; i++) {
      let c = parts[i].trim();
      if (c.indexOf(prefix) === 0) {
        return decodeURIComponent(c.substring(prefix.length));
      }
    }
    return null;
  }

  function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  }

  // ── UI updates ──
  function updateCounters() {
    likeCount.textContent = likes;
    dislikeCount.textContent = dislikes;
  }

  function renderComments() {
    commentsContainer.innerHTML = "";
    comments.forEach((text) => {
      const div = document.createElement("div");
      div.className = "comment-item";
      div.textContent = text;
      commentsContainer.appendChild(div);
    });
  }

  function updateCommentInput() {
    commentInput.disabled = hasCommented;
    commentSubmit.disabled = hasCommented;
    if (hasCommented) {
      commentInput.placeholder = "You have already commented";
    } else {
      commentInput.placeholder = "Write a comment...";
    }
  }

  // ── Load / Save cookies ──
  function loadState() {
    const savedLikes = getCookie("lab6_likes");
    const savedDislikes = getCookie("lab6_dislikes");
    const savedVote = getCookie("lab6_vote");
    const savedComments = getCookie("lab6_comments");
    const savedHasCommented = getCookie("lab6_hasCommented");

    if (savedLikes !== null) likes = parseInt(savedLikes, 10) || 0;
    if (savedDislikes !== null) dislikes = parseInt(savedDislikes, 10) || 0;
    if (savedVote) userVote = savedVote;
    if (savedComments) {
      try { comments = JSON.parse(savedComments); } catch (e) { comments = []; }
    }
    if (savedHasCommented === "true") hasCommented = true;
  }

  function saveState() {
    setCookie("lab6_likes", likes, 30);
    setCookie("lab6_dislikes", dislikes, 30);
    if (userVote) {
      setCookie("lab6_vote", userVote, 30);
    } else {
      deleteCookie("lab6_vote");
    }
    setCookie("lab6_comments", JSON.stringify(comments), 30);
    setCookie("lab6_hasCommented", hasCommented, 30);
  }

  // ── Events ──
  likeBtn.addEventListener("click", () => {
    if (userVote) return;
    userVote = "like";
    likes++;
    updateCounters();
    saveState();
  });

  dislikeBtn.addEventListener("click", () => {
    if (userVote) return;
    userVote = "dislike";
    dislikes++;
    updateCounters();
    saveState();
  });

  commentSubmit.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (!text || hasCommented) return;
    comments.push(text);
    hasCommented = true;
    commentInput.value = "";
    renderComments();
    updateCommentInput();
    saveState();
  });

  commentInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      commentSubmit.click();
    }
  });

  resetBtn.addEventListener("click", () => {
    likes = 0;
    dislikes = 0;
    userVote = null;
    comments = [];
    hasCommented = false;

    deleteCookie("lab6_likes");
    deleteCookie("lab6_dislikes");
    deleteCookie("lab6_vote");
    deleteCookie("lab6_comments");
    deleteCookie("lab6_hasCommented");

    updateCounters();
    renderComments();
    updateCommentInput();
  });

  // ── Init ──
  loadState();
  updateCounters();
  renderComments();
  updateCommentInput();
});
