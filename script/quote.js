const quotes = [
  {
    text: "Code is like humor. When you have to explain it, it's bad",
    author: "Cory House",
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out",
    author: "Chris Pine",
  },
  {
    text: "Clean code always looks like it was written by someone who cares",
    author: "Robert C. Martin",
  },
  {
    text: "The best error message is the one that never shows up",
    author: "Thomas Fuchs",
  },
  {
    text: "Programming is the art of telling another human what one wants the computer to do",
    author: "Donald Knuth",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    author: "Martin Fowler",
  },
  {
    text: "First, solve the problem. Then, write the code",
    author: "John Johnson",
  },
  {
    text: "The only way to learn a new programming language is by writing programs in it",
    author: "Dennis Ritchie",
  },
];

function updateQuote() {
  const quoteText = document.getElementById("quote-text");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  // quoteText.innerHTML = `${randomQuote.text}<span class="quote-author">- ${randomQuote.author}</span>`;
}

// Update quote every 10 seconds
setInterval(updateQuote, 10000);
updateQuote();
