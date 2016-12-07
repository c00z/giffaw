$(document).on("ready", function(){

//load page with gifs
  $.ajax( {
      method:"GET",
      url:"http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
      dataType: "json",
      success: onSuccess,
      error: onError,
      complete: onCompletion
    })

//form submit search
$("form").on("submit", searchReq)
  function searchReq(event) {
  	event.preventDefault();
  	$.ajax( {
  	  method:"GET",
  		url: "http://api.giphy.com/v1/gifs/search",
  	  dataType: "json",
  		data: $("form").serialize(),
      success: onSuccess,
      error: onError,
      complete: onCompletion,

  		})
  }

//acccess to response, success call back example from notes.
//foreach
  function onSuccess(responseData){
    $('.gif-gallery').text('');
    console.log(responseData);
    var imageArray = responseData.data;
    imageArray.forEach(function(object) {
    $('.gif-gallery').append('<img src="' + object.images.fixed_height.url + '">')
  });



  };

  function onError(){
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);

  };

  function onCompletion(){

  };
})
