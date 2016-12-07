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
  // $('form').on('submit'), searchReq);
  // function searchReq(event) {
  // 	event.preventDefault(); // might not need w/ button
  // 	$.ajax( {
  // 		method:"GET",
  // 		url: "http://api.giphy.com/v1/gifs/search".
  // 		dataType: "json",
  // 		data: "q"
  //     success: onSuccess
  //     error: onError
  //     complete: completedCallBack,
  //
  // 		})
  // }

//acccess to response, success call back example from notes.
//foreach
  function onSuccess(responseData){
    console.log(responseData);
    $('.gif-gallery').append(responseData);

  };

  function onError(){

  };

  function onCompletion(){

  };
})
