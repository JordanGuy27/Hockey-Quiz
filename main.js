const playersArray = ["Auston Matthews", "Morgan Rielly", "Frederik Andersen", "Mitch Marner", "William Nylander"];

const myApp = {};

$(function(){

    $('form').on('submit', function(event) {

        event.preventDefault();

        let question1 = $('input[name=q1]:checked').val();
        let question2 = $('input[name=q2]:checked').val();
        let question3 = $('input[name=q3]:checked').val();
        let question4 = $('input[name=q4]:checked').val();
        let question5 = $('input[name=q5]:checked').val();

        const questionArray = [];
       
        questionArray.push(question1, question2, question3, question4, question5);
        // console.log(questionArray);

        let scoreArray = questionArray.map(function(item){
            return parseInt(item);
        })
        .reduce(function(acc, curr) {
            return acc + curr
        }, 0);
        
        console.log(scoreArray);

        if (scoreArray === 65) {
            $('.results').html(`<h3>${playersArray[1]}</h3>`);
        }
    });
});

