const playersArray = ["Auston Matthews", "Morgan Rielly", "Mitch Marner", "William Nylander", "Nikita Zaitsev"];
const goaliesArray = ["Frederik Andersen", "Curtis McElhinney"];


$(function() {
    $('form').on('submit', function(event) {


        event.preventDefault();


        let horn = new Audio('assets/toronto maple leafs.wav'); 
        horn.play();

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


        if (scoreArray >= 900) {
            $('.results').html(`<h3>Game misconduct for not liking Hockey</h3>`);
        } else if (scoreArray === 65) {
            $('.results').html(`<h3>${playersArray[4]}</h3>`);
        } else if (scoreArray === 56) {
            $('.results').html(`<h3>${playersArray[1]}</h3>`);
        } else if (scoreArray === 44) {
            $('.results').html(`<h3>${playersArray[2]}</h3>`);
        } else if (scoreArray === 55) {
            $('.results').html(`<h3>${playersArray[0]}</h3>`);
        } else if (scoreArray === 38) {
            $('.results').html(`<h3>${playersArray[3]}</h3>`);
        } else {
           $('.results').html(`<h3>Might need to try another team bud</h3>`);
        }


        function randomGoalie(array) {
            const randomArray = Math.floor(Math.random() * array.length);
            return array[randomArray];
        }

        const goalieChoice = randomGoalie(goaliesArray);
     
        if (scoreArray === 57) {
            $('.results').html(`<h3>${goalieChoice}</h3>`);
        }

        $('input[name=reset]').on('click', function () {
            $('.results').html(`<h3></h3>`)
        });
    });
});
