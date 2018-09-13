document.addEventListener("DOMContentLoaded", function(event) {
  var tweetForm = document.getElementById('new_tweet');
  tweetForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var showTweets = document.querySelector('.tweets');

    $.ajax( {
      url: this.getAttribute('action'),
      method: this.getAttribute('method'),
      data: $(this).serialize(),
      dataType: 'html'
    }).done(function (responseData) {
      console.log('Request finished');
      $('.tweets').prepend(responseData);

      //reset the form
      tweetForm.reset();


    });

  });

});
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
