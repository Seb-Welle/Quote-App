const button = document.querySelector("#button");

button.addEventListener("click", function () {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      const quoteObj = data.data[0];
      //console.log(quoteObj.quoteAuthor);
      //console.log(quoteObj.quoteText);

      const p = document.querySelector("p");
      p.innerText = quoteObj.quoteText;

      const figcaption = document.querySelector("figcaption");
      figcaption.innerText = quoteObj.quoteAuthor;
    });
});
