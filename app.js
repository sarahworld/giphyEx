
$(function(){
    async function getGif(item){
    const api_key = '7NLRe1dtrlQMfvKVBC36MH7qal39Yj6F';
    const response = await axios.get( `http://api.giphy.com/v1/gifs/search?q=${item}&api_key=${api_key}`);

    if(response.data.data.length){
        let randomIdx = Math.floor(Math.random() * response.data.data.length)
        let randomGif = response.data.data[randomIdx]
        
        createGif(randomGif.images.original.url);
    }
    
}

async function createGif(url){
    const gifs = $(".gifs");

    const $singleGif = $('<img>');
    $singleGif.attr("src", url) ;
    $singleGif.addClass = "single";

    gifs.append($singleGif);
    
}

$(".form-inline").on('submit', function(event){
    event.preventDefault();

    let searchItem = $('form').serializeArray();
    
    //make ajax request with search item
    getGif(searchItem[0].value);
    event.target.reset();

     $("#remove").on("click", function(){
        $('img').remove();
    })
})

})





