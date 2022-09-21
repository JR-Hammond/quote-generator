const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  authorText.textContent = quote.author;

  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text;
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

newQuoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote);

newQuote();