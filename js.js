console.log("I'm alive...");

$(document).ready(function() {
    $("#search-button").click(function(event) {
        search = $("#search-query").val();
        if(search === "") {
            search = "Test...";
        }
        else {
            searchEverywhere(search);
        }
    });
});

function searchEverywhere(query) {
    
}
