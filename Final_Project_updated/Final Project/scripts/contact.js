let quoteText = document.getElementById("quotetext");
let quoteAuthor = document.getElementById("quoteauthor");
let imageDiv = document.getElementById("bottom-image");
let form = document.getElementById("form");
let thanks = document.getElementById("thanks");

let url = "http://quotes.rest/qod.json";

form.addEventListener("submit", formSubmitted);

//rate limits...

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        quoteText.innerHTML = data.contents.quotes[0].quote;
        quoteAuthor.innerHTML = " - " + data.contents.quotes[0].author;
        //console.log("<img src=\"" + data.contents.quotes[0].background + "\" />");
        imageDiv.style.backgroundImage = "url('" + data.contents.quotes[0].background + "')";
    })
    .catch(e => console.log(e));

function formSubmitted(e) {
    e.preventDefault();
    console.log("submit");
    thanks.innerHTML = "Thank you for contacting us!";
    form.reset();
}