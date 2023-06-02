const randomQuote = () => {
    
    quotes = ["'All our dreams can come true, if we have the courage to pursue them.' —Walt Disney", "'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.' —Socrates", "'Whatever you are, be a good one.' ―Abraham Lincoln", "'Impossible is just an opinion.' —Paulo Coelho", "'People who wonder if the glass is half empty or full miss the point. The glass is refillable.' —Unknown"]
    let randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById("message").innerHTML = quotes[randomNum];

}
