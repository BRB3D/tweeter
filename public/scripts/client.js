/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {
  console.log( "ready!" );
/* ----------function that renders with a GET request */
  const loadTweets = function() {
    $('#tweets-container').empty();
    $.get('/tweets')
    .then(function(data) {
      renderTweets(data, createTweetElement);
    })
  } 
  /* ----------------Submits request/posts to tweeter ----------- */
    const $form = $('form');
    $form.on('submit', function (event) {
      event.preventDefault()
     if  (validation(event)) {
     $('.error').slideDown('slow');
     $('.error').html('Error: ' + validation(event));
     $('.new-tweet').one('click',function(){
       $('.counter').text(140);
       $('.counter').css('color', 'rgb(7, 62, 52)');
       $('#tweet-text').val('');
      $( ".error" ).hide('slow');
      return null;
    });
     return;   
     }
      const value = $(event.target['tweet-text']).serialize();
      console.log(value);
      $.post('/tweets', value)
      .then(function (value) {
        loadTweets();
      });



    });
    
    loadTweets();

/* -------------------Checks if there are any errors------------------- */


});


const createTweetElement = function(tweetObj) {
 return `<article class="old-tweet">
    <header>
      <div class="left">
        <img src='${tweetObj.user.avatars}''>
        <h2>${tweetObj.user.name}</h2>
      </div>
      <h2>${tweetObj.user.handle}</h2>
    </header>
    <div class="content">
      <textarea>${escape(tweetObj.content.text)}</textarea>
    </div>
    <footer>
      <p>${timeago.format(tweetObj.created_at)}</p>
      <div class="icon">
        <i class="fab fa-canadian-maple-leaf"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
    </div>
    </footer>
  </article>`
}

const renderTweets = function(data, callback) {
  for (let tweets of data) {
    const $tweet = callback(tweets);
    $('#tweets-container').prepend($tweet);
  }
}

const validation = function(evt) {
  if (evt.target['tweet-text'].value === '') {
    return 'the message is empty';
  }
  if(evt.target['tweet-text'].value.length > 140) {
    return 'KiWis can only send 140 characters, please be more concise';
  }
  return null;
}

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
