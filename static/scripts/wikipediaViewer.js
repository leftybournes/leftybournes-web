window.onload = function() {
    /* Query endpoint
       https://en.wikipedia.org/w/api.php?action=query&list=search&
	   srsearch=${query}&srlimit=10&format=json&origin=* */
    
    var apiUrl = "https://en.wikipedia.org/w/api.php";

    var searchInput = document
        .querySelector(".apps__wikipediaViewer__searchWrapper__searchInput");
    var searchButton = document
        .querySelector(".apps__wikipediaViewer__searchWrapper__searchButton");
    var resultsWrapper = document
        .querySelector(".apps__wikipediaViewer__resultsWrapper");

    searchButton.addEventListener("click", getSearchResults);
    searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            getSearchResults();
        }
    });
    
    function getSearchResults() {

        resultsWrapper.innerHTML = "";

        var spinner = document.createElement("i");
        spinner.className = "apps__wikipediaViewer__resultsWrapper__spinner fas fa-circle-notch fa-spin fa-10x";

        resultsWrapper.appendChild(spinner);
        
        var query = searchInput.value.replace(/ /g,"%20");
        
        var apiRequest = new Request(`${apiUrl}?action=query&list=search&srsearch=${query}&srlimit=10&format=json&origin=*`, {
            method: "GET",
            mode: "cors",
            headers: new Headers({
                "Content-Type": "text/plain"
            })
        });
        
        fetch(apiRequest)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                resultsWrapper.removeChild(spinner);
                
                response.query.search.forEach(function(result) {
                    var resultContainer = document.createElement("div");
                    var title = document.createElement("h3");
                    var snippet = document.createElement("p");
                    var targetUrl = "https://en.wikipedia.org/wiki/"
                    var link = document.createElement("a");

                    title.innerHTML = result.title;
                    title.className = "apps__wikipediaViewer__resultsWrapper__resultTitle"
                    
                    snippet.innerHTML = result.snippet;
                    snippet.className = "apps__wikipediaViewer__resultsWrapper__resultSnippet"

                    link.href = `${targetUrl}${result.title.replace(/ /g, "%20")}`;
                    link.target = "_blank";
                    link.appendChild(title);
                    link.appendChild(snippet);
                    
                    resultContainer.appendChild(link);
                    resultContainer.className = "apps__wikipediaViewer__resultsWrapper__resultContainer"

                    resultsWrapper.appendChild(resultContainer);
                });
            });
    }
}
