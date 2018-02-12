const playersArray = ["Auston Matthews", "Mitch Marner", "William Nylander", "Nikita Zaitsev", "Patrick Marleau", "Kasperi Kapanen", "James van Riemsdyk"];
const goaliesArray = ["Frederik Andersen", "Curtis McElhinney"];
const defenceArrayRandom = ["Morgan Rielly", "Jake Gardiner"]; 

const myApp = {};

const nhl94 = new Audio ('assets/NHL 94 (Genesis) Intro Theme.mp3');


$(function() {
    nhl94.play();

    $('button.take').on('click', function(){
        $('html').animate({
            scrollTop: $('.question1').offset().top}, 'slow'
        );
    });

    $('input[name=q4]').on('click', function(){
        $('html').animate({
            scrollTop: $('.question5').offset().top}, 'slow'
        );
    });

    $('input[name=q5]').on('click', function () {
        $('html').animate({
            scrollTop: $('.submit').offset().top}, 'slow'
        );
    });

    $('form').on('submit', function(event) {

        event.preventDefault();


        const horn = new Audio('assets/toronto maple leafs.wav'); 
        horn.play();
        nhl94.pause();
        
        $('html').animate({
            scrollTop: $('.results').offset().top}, 'slow'
        );


        let question1 = $('input[name=q1]:checked').val();
        let question2 = $('input[name=q2]:checked').val();
        let question3 = $('input[name=q3]:checked').val();
        let question4 = $('input[name=q4]:checked').val();
        let question5 = $('input[name=q5]:checked').val();

        const questionArray = [];
       
        questionArray.push(question1, question2, question3, question4, question5);
        

        let scoreArray = questionArray.map(function(item){
            return parseInt(item);
        })
        .reduce(function(acc, curr) {
            return acc + curr
        }, 0);
        
        console.log(scoreArray);

        const defenceChoice = randomPlayer(defenceArrayRandom);

        if (scoreArray >= 900) {
            $('.results').html(`<h3>Game misconduct for not liking Hockey</h3>`);
        } else if (scoreArray === 65) {
            $('.results').html(`<h3>${playersArray[3]}</h3>`);        
        } else if (scoreArray === 61) {
            $('.results').html(`<h3>${playersArray[4]}</h3>`);
        } else if (scoreArray === 58) {
            $('.results').html(`<h3>${playersArray[5]}</h3>`);
        } else if (scoreArray === 56) {
            $('.results').html(`<h3>${defenceChoice}</h3>`);
        } else if (scoreArray === 44) {
            $('.results').html(`<h3>${playersArray[1]}</h3>`);
        } else if (scoreArray === 41) {
            $('.results').html(`<h3>${playersArray[6]}</h3>`);
        } else if (scoreArray === 55) {
            $('.results').html(`<h3>${playersArray[0]}</h3>`);
        } else if (scoreArray === 38) {
            $('.results').html(`<h3>${playersArray[2]}</h3>`);
        } else {
           $('.results').html(`<h3>Might need to try another team bud!</h3>`);
        }


        function randomPlayer(array) {
            const randomArray = Math.floor(Math.random() * array.length);
            return array[randomArray];
        }

        const goalieChoice = randomPlayer(goaliesArray);
     
        if (scoreArray === 57) {
            $('.results').html(`<h3>${goalieChoice}</h3>`);
        } 

        $('input[name=reset]').on('click', function () {
            $('.results').html(`<h3></h3>`)
        });
    });
});
