var pics = ['https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/42bdb140744411.57b5b38cdc7b8.jpg','https://i.pinimg.com/originals/18/01/5e/18015ea93f34117a1d8ceaf85b7395e0.jpg','http://lindsey--stirling.weebly.com/uploads/1/0/6/7/10678755/s447745874495197212_p4_i1_w600.jpeg','https://ovspk2m6vx-flywheel.netdna-ssl.com/wp-content/uploads/2014/03/LindseyStirling_ShatterMe_itunes.jpg'];
var currentpic = -1;
var img0 = new Array();
for(i=0; i < pics.length; i++) {
    img0[i] = new Image()
    img0[i].src = pics[i];
}
function swapImage() {
    currentpic = (++currentpic > pics.length-1)? 0 : currentpic;
    imgcont.src = img0[currentpic].src;
    setTimeout(swapImage,2000);
}

//if add additional quotes need to update add quote *x to match amount of quotes
var quotes = [
    '“Maybe my best isn\'t as good as someone else\'s, but for a lot of people, my best is enough. Most importantly, for me it\'s enough.” ― Lindsey Stirling',
    '“I make art for the sake of art . . . and for my own selfish gratification, because I’m an artistic monster.” ― Lindsey Stirling',
    '“Life is kind, and full of great moments, but I think the greatest moment of my life is always ahead of me. When I reach it, there will be another, greater moment to come.” ― Lindsey Stirling',
    '“Am I the best violinist in the world? No. Do I need to be the best to bring people joy? No.” ― Lindsey Stirling',
    '“If anorexia was really incurable, I\'d still weigh ninety-two pounds--isolated in a world controlled by food and distorted versions of myself. I\'m not that person anymore. I don\'t live in that world anymore. I hate the thought that someone, somewhere might read about their "incurable eating disorder" and believe it to be the truth. That\'s why I\'m telling you, it\'s not.So hang in there, it\'s worth it. You\'re worth it.” ― Lindsey Stirling'
]
function addquote () {
    var randomNumber = Math.floor(Math.random() * 5);
    document.getElementById('quote-display').innerHTML = quotes[randomNumber]
}

