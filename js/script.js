/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Creating 5 quote objects within an array
const quotes = [
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980
    
  },
  {
    quote: "I fear no one, but respect everyone.",
    source: "Roger Federer",
    //Could not find year
    tag: "inspirational"
  },
  {
    quote: "I'm gonna make him an offer he can't refuse.",
    source: "Don Corleone",
    citation: "The Godfather",
    year: 1972
  },
  {
    quote: "May the Force be with you.",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars"
    //Didn't cite specific movie or year because it is said multiple times
  },
  {
    quote: "You don't have time to think up there. If you think, you're dead.",
    source: "Pete Mitchell (AKA Maverick)",
    citation: "Top Gun",
    year: 1986
  }
];

//timer regularly refreshes random quote every 5 seconds (extra credit)
setInterval(printQuote, 5000);




/***
 * `getRandomQuote` function
***/

//Returns randomly selected quote object from quotes array
function getRandomQuote(arr){
  const index = Math.round(Math.random()*(arr.length-1));
  return arr[index];
}


/***
 * `printQuote` function
***/


function printQuote(){
  //stores random quote object
  const quoteRandom = getRandomQuote(quotes);

  //starts building info to add to page
  let html = `
  <p class="quote">${quoteRandom.quote}</p>
  <p class="source">${quoteRandom.source}`;

  //checks if we have citation and/or year and adds to html if true
  if(typeof quoteRandom.citation !== 'undefined'){
    html += `<span class="citation">${quoteRandom.citation}</span>`;
  }
  if(typeof quoteRandom.year !== 'undefined'){
    html += `<span class="year">${quoteRandom.year}</span>`;
  }
  //checks for tag attribute
  if(typeof quoteRandom.tag !== 'undefined'){
    html += `, <span>${quoteRandom.tag}</span>`;
  }
  html+=`</p>`;
  //adds info to webpage
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);




