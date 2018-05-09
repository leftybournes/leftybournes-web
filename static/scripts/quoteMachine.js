window.onload = function() {
    
    var apiUrl = "https://sw-said-who.herokuapp.com/api/random";
        //"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    var apiRequest = new Request(apiUrl, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'text/plain'
        })
    });

    getQuote();
    
    var quoteField = document.querySelector(".apps__quoteMachine__quote");
    var authorField = document.querySelector(".apps__quoteMachine__author");
    var quoteButton = document.querySelector(".apps__quoteMachine__getQuote")

    quoteButton.addEventListener('click', getQuote);

    function getQuote() {
        fetch(apiRequest)
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                var quote = response.quote;
                var author = response.author;

                quoteField.innerHTML = quote;
                authorField.innerHTML = `- ${author}`;
        });
    }
};
