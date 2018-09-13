document.addEventListener("DOMContentLoaded", function(event) {
  var tweetForm = document.getElementById('new_tweet');
  tweetForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var showTweets = document.querySelector('.tweets');

    $.ajax( {
      url: this.getAttribute('action'),
      method: this.getAttribute('method'),
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function (responseData) {
      console.log('Request finished');
      newTweet = document.createElement('li');
      newTweet.classList = 'tweet';
      var tweetP = document.createElement('p');
      tweetP.innerText = responseData.message;
      var tweetTime = document.createElement('time');
      // setting up proper formatting of time
      var currentTime = new Date();
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var hr = currentTime.getHours();
      var min = currentTime.getMinutes();
      var month = months[currentTime.getMonth()];
      var date = currentTime.getDate();


      if (min < 10) {
        min = "0" + min;
      }
      var ampm = "AM";
      if (hr > 12) {
        hr -= 12;
        ampm = "PM";
      }

      var timeFormatted = month + " " + date + ", " + hr + ":" + min + " " + ampm;
      tweetTime.innerText = timeFormatted;

      // building tweet with content and timestamp
      newTweet.append(tweetP);
      newTweet.append(tweetTime);
      showTweets.prepend(newTweet);

      //reset the form
      tweetForm.reset();


    });

  });

});
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
