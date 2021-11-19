/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {
/* ----------Rendering function ---------------------------- */
  const loadTweets = function() {
    $('#tweets-container').empty();
    $.get('/tweets')
    .then(function(data) {
      renderTweets(data, createTweetElement);
    })
  }
  /* ---------------- POST to database ----------- */
  const $form = $('#newTweet-form');

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
    });} else {
      const value = $(event.target['tweet-text']).serialize();
      console.log(value);
      $.post('/tweets', value)
      .then(function (value) {
        loadTweets();
      });
    }
  });
  loadTweets();
});
