/* This functions help the client.js render the tweets  by either creating elements, checking or scaping to prvent cross-site scripting */


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
 
 const renderTweets = function(data) {
   for (let tweets of data) {
     const $tweet = createTweetElement(tweets);
     $('#tweets-container').prepend($tweet);
   }
 };
 
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

 
