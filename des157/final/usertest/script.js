(function () {

    'use strict';

    function myFunction() {
        var txt;
        var person = prompt("Please enter your name:", "Tester Name");
        if (person == null || person == "") {
          txt = "Please refresh and enter your name into the prompt.";
        } else {
          txt = `Hello ${person}! Please consider these three questions: How intuitive is the design of this prototype? Does the overlay styling enhance or inhibit the experience (legibility, palette, dimensions)? Do you feel a sense of narrative or a general theme?`;
        }
        document.getElementById("usertest").innerHTML = txt;
      }

    myFunction();

    const openBtns = document.querySelectorAll('.open');
    const closeBtns = document.querySelectorAll('.close');

    for (const eachBtn of openBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            const thisBtn = event.target.id;
            document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
        });
    }
    
    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });

})();