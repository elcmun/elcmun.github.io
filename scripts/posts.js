// Example of fetching posts (could be from a Gist, Google Sheet, or static JSON)
const posts = [
  {
    date: "2025-06-26",
    content: "Follow us on Instagram @elcmun for all updates!",
    link: "https://instagram.com/elcmun"
  },
  {
    date: "2025-06-25",
    content: "Committee reveals start next week 🎉"
  }
];

function renderPosts() {
  const feed = document.getElementById("posts-feed");
  posts.forEach(post => {
    const div = document.createElement('div');
    div.className = "card";
    div.innerHTML = `<b>${post.content}</b><br><small>${post.date}</small>` +
      (post.link ? `<br><a href="${post.link}" target="_blank" style="color:#F14726;">View</a>` : '');
    feed.appendChild(div);
  });
}
document.addEventListener("DOMContentLoaded", renderPosts);