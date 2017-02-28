function LoadWikipediaData(title, articleArray) {


    var wikiLink='http://en.wikipedia.org/w/api.php?action=opensearch&search='+title+'&format=json';
    console.log("wikiLink: "+wikiLink);

    var wikiRequestTimeout = setTimeout(function() {
        $wikiElem.text("failed to get wikpedia resources");
    }, 8000);


    $.ajax(wikiLink, {
        dataType: 'jsonp',
    }).done(function (data) {
        console.log(data);

        for(i=0; i< data.length; i++) {
            var wikiHeader = data[1][i];
            var wikiArticleURL = data [3][i];

            articleArray.push('<a href="'+wikiArticleURL+'">'wikiHeader'</a>');

        };




        clearTimeout(wikiRequestTimeout);
    });

}