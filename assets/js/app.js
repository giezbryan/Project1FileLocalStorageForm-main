
const tweetList =  document.getElementById('tweet-list');




eventListeners();

function eventListeners() {
    document.querySelector('#form').addEventListener('submit' , newTweet);


    tweetList.addEventListener('click', removeTweet);




}






function newTweet(e) {
    e.preventDefault();

    const tweet = document.getElementById('tweet').value;
    
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    li.appendChild(removeBtn);

    tweetList.appendChild(li);    

    addTweeTLocalStorage(tweet);

}

function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    } 

}

function addTweeTLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets' , JSON.stringify(tweets) );
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');

     if (tweetsLS === null) {
         tweets = [];
     } else {
         tweets = JSON.parse(tweetsLS);
     }
     return tweets;
}