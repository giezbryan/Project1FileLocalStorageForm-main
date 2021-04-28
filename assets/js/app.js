
const tweetList =  document.getElementById('tweet-list');




eventListeners();

function eventListeners() {
    document.querySelector('#form').addEventListener('submit' , newTweet);
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
}




