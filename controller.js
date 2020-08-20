$(document).ready(function () {
							 
	var questionBank=new Array;
	var currentQuestionNumber;
	var currentAnswer;
	var numberOfQuestions;
	var gamePosition;
	var score;

		questionBank=[["1. This organism's diet unlike any other,is very low in vitamins and minerals.They have a peculiar dietary trait due to which their food of choice has high proteins but very low vitamins and minerals. Their diet style also threatens them to be exposed to deadly Pathogens but a unique genome called transposon and a special bacteria protects them from pathogens, breaks down proteins and produces the necessary vitamins which are never intaken. This organism also has special facial nerves by sensing heat to locate the source of food. Most amazing thing is that this organism brings a special glycoprotein called X into play, which is present in its saliva, to obtain unhindered food supply and because of this the prey will not even feel its presence due to the numbness caused. What is this organism which we might have come across only in fictional works and movies but very much REAL indeed. Also ID X. (First type in the organism, followed by a comma and a space, then X)","VAMPIRE BAT, DRACULIN"],
		["2. The Neutrino was postulated first by Pauli in 1930 to explain how beta decay could conserve energy, momentum, and angular momentum. Neutrinos are referred to as XY due to their extremely vaporous nature and the ability to pass through any kind of matter without changing and they almost have no mass. Now from this fitting description, ID XY.","GHOST PARTICLE"],
		["3. The company Z, was founded in 1890 as A.G. Thompson Pty Ltd by Alfred Grace Thompson, a migrant harness and saddle maker who had a unique turn of events when his livelihood was threatened by the advent of the motor car. The Z Dimple Elite hockey ball has been used in all Olympic Games from 1984 to 2008. ID Z.","KOOKABURRA"],
		["4. This brand X has its origins in Germany, when a trading ban was placed on that nation by the Allies during World War II. The Coca-Cola Company couldn't import the syrup needed to produce Coca-Cola in Germany. As a result, Max Keith, the man in charge of Coca-Cola's operations in Germany during WW2 decided to use ingredients available in Germany and came up with a nice product. And hence X was developed. ID this well known brand X.","FANTA"],
		["5. When Lala Har Dayal, a student from a government college in Lahore was denied a place at YMCA, he decided to form a youth association and invited his lecturer to deliver the speech but instead the lecturer only managed to write a Poem and not a speech and he sang it in front of all and instantly gained a lot of support. How do we better know this lecturer and this Poem? (First type in the lecturer’s name, followed by a comma and a space, then the Poem name)","MUHAMMAD IQBAL, SAARE JAHAN SE ACCHA"],
		["6. The first historically documented formula of this food product appears in the Charaka Samhita. According to ancient Indian mythology, Ashvini Kumar brothers (twins) who were the royal physicians to the Devas first came up with the formula for this product for Rishi X at his Ashram on Dhosi hill, Rajasthan. Hence the Product is named after the Rishi himself. ID X (the rishi) and hence the product. (First type in X, followed by a comma and a space, then the product)","CHYAVANA RISHI, CHYAVANPRASH"],
		["7. The most popular slope for this Sport is the Cerro Negro near Leon in western Nicaragua. The sport is also practiced on Mt. Yasur in Tanna, Vanuatu and Mt.Bromo, Indonesia. It is an Extreme sport with potential risks of danger and death which include falling off, breathing poisonous gases, contracting histoplasmosis (Caver's disease). National Geographic Channel adventurer and journalist Zoltan Istvan credits himself with inventing this sport on Mt. Yasur on the island of Tanna in Vanuatu in 2002. Which sport are we talking about?","VOLCANO BOARDING"],
		["8. Jayesh Desai is a Surat businessman who is one of the promoters of the Rajhans group that has interests in textiles and multiplexes. Few years back, a transaction of undisclosed approach came into limelight resulting in huge criticism for the other party, even resulting in comments from eminent writers like Shobhaa De making Ironic references to a famous Robin Sharma novel. What transaction are we talking about?","HE PURCHASED FERRARI MODENA 360 WHICH WAS GIFTED TO SACHIN TENDULKAR BY MICHAEL SCHUMACHER"],
		["9. The most scientifically accurate explanation for this phrase is due to the production of ethylene in one, which over ripens the others kept in the same proximity and sometimes due to mold infestation along with ethylene presence, the entire bunch is wasted due to spreading of mold and excess ethylene. What phrase are we referring to?","ONE BAD APPLE SPOILS THE WHOLE"],
		["10. This phrase ‘X as a Y’ was inspired by a character ‘XY’ from the famous work by Charles Lutwidge Dodgson. One of the origin theories for this phrase is that, in 17th century France, poisoning occured among makers who used Mercury for Y(s) infact this was considered as a disease which was marked by shyness,irritability and tremors often making the afffected person look very strange and retarded. ID the Phrase.","MAD AS A HATTER"],
		["11. Antonio was an Italian luthier and a craftsman of string instruments such as violins, cellos and harps. The latinized form of his surname, ‘X’ is often used to refer to his instruments. ‘X’ instruments are regarded as amongst the finest bowed stringed instruments ever created, are highly prized, and are still played by professionals today. After Antonio died, his heirs carried on his legacy. According to their reputation, the quality of their sound has defied attempts to explain or equal it, though this belief is disputed.The fame of X instruments is widespread, appearing in numerous works of fiction. Simply ID X.","STRADIVARIUS"],
		["12. The statue of XY, sculpted by Peter Linde, present at Friends Arena, is three metres high and depicts XY standing with open arms. His eyes are focused and he is bare chested and wearing shorts as he steps over the world globe with determined steps. The bronze statue weighs 500 kilograms, and is placed on an eight tonne frame in red granite. Malmö City municipality stated that the cost of the statue was 500,000 Swedish Kronor and with an annual maintenance cost of 15,000 Kronor, costs that Malmö City will pay. This statue was vandalised a lot of times in the recent past mainly when XY became a part owner of 'HAMMARBY IF'. Simply ID XY.","ZLATAN IBRAHIMOVIC"]];
		numberOfQuestions=questionBank.length;
		gamePosition=1;  
	 	resetGame();
	  	updateQuestion();
 
			
	function resetGame(){
		currentQuestionNumber=0;
		score=0;
		$("#gameArea").empty();
		$("#gameArea").append('<h1>Quiz</h1>');
		$("#gameArea").append('<p>Type the answer in the space and press ENTER:</p>');
		$("#gameArea").append('<p id="wordBox">Sentence 1</p>');
		$("#gameArea").append('<input type="text" id="inputBox">');
		$("#gameArea").append('<div id="feedback"></div>');
		$("#gameArea").append('<p id="message"></p>');
		$("#x").empty();
	};
	
	
	function updateQuestion(){
		$('#wordBox').empty();
		$('#wordBox').append(questionBank[currentQuestionNumber][0]);
    	$('#message').empty();
		$('#feedback').empty();
		$('#inputBox').empty();
		$('#inputBox').prop("disabled",false);
		$('#inputBox').val('');
		$('#inputBox').css("background-color","white");
		$('#inputBox').css("color","black"); 
		$('#inputBox').focus();
		$("#inputBox").click(function(e) {e.stopPropagation();});
		currentAnswer=questionBank[currentQuestionNumber][1];
		currentQuestionNumber++;
		gamePosition=1;
	}



	$(document).on("keyup",function(e){
		if(e.which==13){gameControl();};						  
	});
	
	$(document).on("click tap",function(){
		gameControl();
	});
								
	function gameControl(){		
		switch (gamePosition) { 
			case 1: 
				checkAnswer();
				break;
			case 2: 
				updateQuestion();
				break;
			case 3: 
				scorePage();
				break;		
			case 4: 
				resetGame();
				updateQuestion();
				break;		
		}	
	}
		
	function checkAnswer(){
		myAnswer=$('#inputBox').val();
		if(currentQuestionNumber==6){
			if(myAnswer.indexOf("CHYAVAN")>=0){	
				score++;
				$('#feedback').append('<img src="tick.png">');
				$('#inputBox').css("background-color","green");
				$('#inputBox').css("color","white");
			}
		}
		else if(currentQuestionNumber==8){
			if(myAnswer.indexOf("FERRARI")>=0){	
				score++;
				$('#feedback').append('<img src="tick.png">');
				$('#inputBox').css("background-color","green");
				$('#inputBox').css("color","white");
			}
		}
		else if(currentAnswer==myAnswer){
			score++;
			$('#feedback').append('<img src="tick.png">');
			$('#inputBox').css("background-color","green");
			$('#inputBox').css("color","white");
		}
		else{
			$('#feedback').append('<img src="cross.png">');
			$('#inputBox').css("background-color","red");
			$('#inputBox').css("color","white");
			$('#inputBox').val($('#inputBox').val()+" (ans= "+currentAnswer+")");
		}
		$('#message').append('Press ENTER or tap the screen again to continue');
		$("#inputBox").prop('disabled', true);
		$("#gameArea").focus();
		gamePosition=2;
		if(currentQuestionNumber==numberOfQuestions){gamePosition=3;}
	}
								
	function scorePage(){

		$("#gameArea").empty();
		$("#gameArea").append("<h1>CONGRATS!</h1><br>");
		$("#gameArea").append("<h3>Final score: "+score+ ' | '+numberOfQuestions+'</h3><br><br>');
		$("#gameArea").append("Press ENTER or tap the screen to try again.<br><br><br>");
		var img = document.createElement("img"); 
 		img.src = "kris2.jpg"; 
		var src = document.getElementById("x");
		src.appendChild(img);
		var link = "credits.html";
		var element = document.createElement("a");
		element.setAttribute("href", link);
		element.innerHTML = "SEE CREDITS";
		$("#gameArea").append(document.body.appendChild(element));
		gamePosition=4;
	}
		 

});