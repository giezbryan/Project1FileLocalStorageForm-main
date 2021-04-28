





eventListeners();

function eventListeners() {
    document.querySelector('#form').addEventListener('submit' , newTweet);
}






function newTweet(e) {
    e.preventDefault();

    console.log('Form Submitted');
}




