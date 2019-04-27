var APIkey = "493d5df0-b8e4-46c6-9a73-aad7be18f4ab" ;
   if (searchStartYear === '' && searchEndYear === '') {
      queryURl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&facet=true&fl=&q=" + searchItem + "&api-key=" + APIkey;
    } else if(searchStartYear !== '' && searchEndYear === '') {
      queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + begin_date + "&facet=true&fl=&q=" + searchItem + "&api-key=" + APIkey;
    } else if(searchStartYear === '' && searchEndYear != '') {
      queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?end_date=" + searchEndYear + "&facet=true&fl=&q=" + searchItem + "&api-key=" + APIkey;
    } else {
      queryURl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + searchStartYear + "&end_date=" + searchEndYear + "&facet=true&fl=&q=" + searchItem + "&api-key=" + APIkey;
    }