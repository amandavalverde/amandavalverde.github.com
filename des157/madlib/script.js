(function(){
    'use strict';

    var quotes = ["DEAR FROZEN YOGURT, YOU ARE THE CELERY OF DESSERTS. BE ICE CREAM OR BE NOTHING. ZERO STARS.",
                "THERE’S ONLY ONE THING I HATE MORE THAN LYING: SKIM MILK. WHICH IS WATER THAT IS LYING ABOUT BEING MILK.",
                "JUST GIVE ME ALL THE BACON AND EGGS YOU HAVE. WAIT … I WORRY WHAT YOU HEARD WAS, ‘GIVE ME A LOT OF BACON AND EGGS.’ WHAT I SAID WAS, GIVE ME ALL THE BACON AND EGGS YOU HAVE. DO YOU UNDERSTAND?",
                "I CALL THIS TURF ‘N’ TURF. IT’S A 16-OUNCE T-BONE AND A 24-OUNCE PORTERHOUSE. ALSO, WHISKEY AND A CIGAR. I AM GOING TO CONSUME ALL OF THIS AT THE SAME TIME BECAUSE I AM A FREE AMERICAN.",
                "GIVE A MAN A FISH AND FEED HIM FOR A DAY. DON’T TEACH A MAN TO FISH… AND FEED YOURSELF. HE’S A GROWN MAN. AND FISHING’S NOT THAT HARD.",
                "STRIPPERS DO NOTHING FOR ME… BUT I WILL TAKE A FREE BREAKFAST BUFFET ANYTIME, ANYPLACE.",
                "THE WHOLE POINT OF THIS COUNTRY IS IF YOU WANT TO EAT GARBAGE, BALLOON UP TO 600 POUNDS AND DIE OF A HEART ATTACK AT 43, YOU CAN! YOU ARE FREE TO DO SO. TO ME, THAT’S BEAUTIFUL.",
                "IF THERE WERE MORE FOOD AND FEWER PEOPLE, THIS WOULD BE A PERFECT PARTY.",
                "WHEN I EAT, IT IS THE FOOD THAT IS SCARED."];
    

function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
    newQuote();

    // add the madlib script here

    const myForm = document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        let myText;

        if(noun1 && noun2 && adj && verb){
        myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
        }
        else {
            myText = "MAKE THE WORDS HAPPEN!";
        }

        madlib.innerHTML = myText;

        var formData = document.querySelectorAll("input[type=text");
        for (const eachField of formData){
            eachField.value = "";
        }



    });


})();