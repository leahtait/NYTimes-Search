$(document).ready (function () {
    
    
    
    
    //id for search 
    input = searchItem
    
    //id for number of results 
    display = numberDisplay
    
    //id for search year 
    start = searchStartYear
    
    // id for search year 
    end = searchEndYear
    
    //id for button 
    submit = submit
    
    
    $("#submit").on("click", function() {
        //search term
        var q = $("#searchItem").text();
        console.log("this is q" +  q)
        
        //id for search 
        // input = searchItem
        
        //id for number of results 
        // display = numberDisplay
        
        //id for search year 
        // start = searchStartYear
        
        // id for search year 
        // end = searchEndYear
        
        //id for button 
        // submit = submit
        
        var begin_date =""
        var end_date=""
        var queryURL =''
        
        // API key
        APIkey = "mihrp9G14YWEh0F3YWb9WaMyyhoppJZC";
        // Replaced with if statement
        //queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + begin_date + "&end_date=" + end_date + "&facet=true&q="+ q +"&api-key=" + APIkey
        
        // Code from Catherine goes here
        if (begin_date === '' && end_date === '') {
            queryURl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&facet=true&fl=&q=" + q + "&api-key=" + APIkey;
        } else if(begin_date !== '' && end_date === '') {
            queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + begin_date + "&facet=true&fl=&q=" + q + "&api-key=" + APIkey;
        } else if(begin_date === '' && end_date != '') {
            queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?end_date=" + end_date + "&facet=true&fl=&q=" + q + "&api-key=" + APIkey;
        } else {
            queryURl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + begin_date + "&end_date=" + end_date + "&facet=true&fl=&q=" + q + "&api-key=" + APIkey;
        }
        
        //query URL with facets
        $.ajax({
            url:queryURL, 
            method: "GET"
        }).then(function(response){
            $(".apiDump").text(JSON.stringify(response));
            console.log(response)
            console.log(queryURL);
            // 
            
        }); // ends on click function
    });
    
}); // end the document ready function 