/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {
  console.log( "ready!" );

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

  const $tweet = createTweetElement(tweetData);


  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet);
});


const createTweetElement = function(tweetObj) {
 return `<article class="old-tweet">
    <header>
      <div class="left">
        <img src="${tweetObj.user.avatars}">
        <h2>${tweetObj.user.name}</h2>
      </div>
      <h2>${tweetObj.user.handle}</h2>
    </header>
    <div class="content">
      <p>${tweetObj.content.text}</p>
    </div>
    <footer>
      <p>${tweetObj.created_at}</p>
      <div class="icon">
        <i class="fab fa-canadian-maple-leaf"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
    </div>
    </footer>
  </article>`
}