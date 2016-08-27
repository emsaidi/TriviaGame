var questions = [{
	question: "What was the name of Catelyn Stark's father?",
	answers: ["Lord Aryn", " Lord Hoster", "Lord Tywin", "Lord Edmure"],
	correctAnswer: 1
}, {
	question: "What was the name of Arya's direwolf?",
	answers: ["Lady", "Grey Wind", "Summer", "Nymeria", "Snow"],
	correctAnswer: 3
}, {
	question: "Who was the first to stab Jon Snow in the Season 5 finale?",
	answers: ["Bowen Marsh", "Denys Mallister", "Oly", "Alliser Thorne", "Othell Yarwyck"],
	correctAnswer: 3
}, {
	question: "Why did Danaerys drop her ring in the season finale when the other khalasar found her?",
	answers: ["Because she didn’t want to show them that she had re-married", "Because her fingers were hurting", "To indicate where she’s being taken", "To show surrender"],
	correctAnswer: 2
}, {
	question: "What were the names of Aegon Targaryen's three dragons that Dany named her ships after?",
	answers: ["Balerion, Drogon, and Viserion", "Meraxes, Rhaegal, and Vhagar", "Rhaegal, Drogon, and Viserion", "Meraxes, Vhagar, and Balerion"],
	correctAnswer: 3
}, {
	question: "Who said, 'A very small man can cast a very large shadow'?",
	answers: ["Tyrion Lannister", "Pycelle", "Petyr Baelish", "Lord Varys"],
	correctAnswer: 3
}];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;
var number = 10;

$(document).ready(function() {

	$('#btnStart').on('click', function(){
	$('#btnStart').hide();
	run();
	decrement();
	displayCurrentQuesiton();


	$('#quizMessage').hide();


	

});

});


function displayCurrentQuesiton() {
	var question = questions[currentQuestion].question;
	console.log(question);
	var amountAnswers = questions[currentQuestion].answers;
	console.log(amountAnswers);
	var numAnswers= amountAnswers.length;
	console.log(numAnswers);



	$('#question').text(question);
	$('#answersList').empty;

	var answer;
	for (i=0; i<numAnswers; i++){
		answer = questions[currentQuestion].answers[i];
		$('<li><input type="radio" value=' + i + ' name="dynradio" class="btn-answer"> ' + answer + '</li>').appendTo('#answersList');
		}
	
	$('.btn-answer').on('click', function(){
		console.log("it works");
		currentQuestion = currentQuestion + 1;
		console.log(currentQuestion);
		stop();
	});

}



function run(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	number--;
	$('#timer').html("Time Remaining: " + number + " Seconds");

	if (number === 0){
		stop();
		$('#quizMessage').html("Out of time!");
		$('#correctAnswer').html("Correct Answer: " + questions[i].correctAnswer);
	}

}

function stop(){
	clearInterval(counter);
}