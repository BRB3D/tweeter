/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {
  console.log( "ready!" );

  const tweetData =[
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


  /* console.log($tweet); // to see what it looks like */
  renderTweets(tweetData, createTweetElement);
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
    $('#tweets-container').append($tweet);
  }
}