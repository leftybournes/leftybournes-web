window.onload = function() {
    
    var apiUrl = "https://sw-said-who.herokuapp.com/api/random";
    var tweetUrl = "https://twitter.com/intent/tweet?text="    
    var apiRequest = new Request(apiUrl, {
        method: "GET",
        mode: "cors",
        headers: new Headers({
            "Content-Type": "text/plain"
        })
    });

    newQuote();
    
    var quoteField = document
        .querySelector(".apps__quoteMachine__quoteWrapper__quote");
    var authorField = document
        .querySelector(".apps__quoteMachine__quoteWrapper__author");
    var quoteButton = document
        .querySelector(".apps__quoteMachine__buttonWrapper__getQuote");
    var tweetButton = document
        .querySelector(".apps__quoteMachine__buttonWrapper__tweet");

    quoteButton.addEventListener("click", newQuote);

    function newQuote() {
        fetch(apiRequest)
            .then(function(response) {
                return response.json();
            })
            .catch(function(error) {
                quoteField.innerHTML = "Error fetching quote";
                authorField.innerHTML = "Error fetching quote";
            })
            .then(function(response) {
                var quote = response.quote;
                var author = response.author;

                quoteField.innerHTML = quote;
                authorField.innerHTML = `- ${author}`;


                tweetButton.href = `${tweetUrl}${quote} - ${author}`;
            });
    }


};
