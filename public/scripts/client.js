/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {
  console.log( "ready!" );
/* ----------function that renders with a GET request */
  const loadTweets = function() {
    $.get('/tweets')
    .then(function(data) {
      renderTweets(data, createTweetElement);
    })
  } 
  /* ----------------Submits request/posts to tweeter ----------- */
    const $form = $('form');
    $form.on('submit', function (event) {
      event.preventDefault()
      console.log(event)
      if (event.target['tweet-text'].value === '') {
        return alert('the message is empty');
      }
      if(event.target['tweet-text'].value.length > 140) {
        return alert('Kiwis can only send 140 characters, please be more concise');
      }
      const value = $(event.target['tweet-text']).serialize();
      console.log(value); 
      $.post('/tweets', value)
      .then(function (value) {
        loadTweets();
      });



    });
    
    loadTweets();






});


const createTweetElement = function(tweetObj) {
 return `<article class="old-tweet">
    <header>
      <div class="left">
        <img src="${tweetObj.user.avatars}">
        <h2>${escape(tweetObj.user.name)}</h2>
      </div>
      <h2>${escape(tweetObj.user.handle)}</h2>
    </header>
    <div class="content">
      <p>${escape(tweetObj.content.text)}</p>
    </div>
    <footer>
      <p>${timeago.format(escape(tweetObj.created_at))}</p>
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