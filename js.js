// The mappings for each search engine
SEARCH_ENGINE_MAPPINGS = {
    google_search: "https://www.google.com/search?q=",
    bing_search: "https://www.bing.com/search?q=",
    duckduckgo_search: "https://duckduckgo.com/?q=",
    baidu_search: "https://www.baidu.com/s?ie=utf-8&wd=",
    gigablast_search: "https://www.gigablast.com/search?q="
};

$(document).ready(function() {
    // Search button listener, checks if the search
    // query isn't empty and search
    $("#search-button").click(function(e) {
        e.preventDefault();
        search = $("#search-query").val();
        if (search === "") {
            search = "Test...";
        }
        searchEverywhere(search);
    });
});

// Updates each IFrame with the desired search
// query, it is based in the SEARCH_ENGINE_MAPPINGS
// with the ID of the element as the key
function searchEverywhere(query) {
    iframes = $("iframe");
    for (i = 0; i < iframes.length; i++) {
        f = iframes[i];

        f.setAttribute("src", SEARCH_ENGINE_MAPPINGS[f.getAttribute("id")] + query);
    }
}
