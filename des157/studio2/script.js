(function () {

    'use strict';

    /* function myFunction() {
        let txt;
        let person = prompt("Please enter your name:", "Tester Name");
        if (person == null || person == "" || person == "Tester Name") {
          txt = "Please refresh and enter your name into the prompt to continue user testing.";
        } else {
          txt = `Hello ${person}! Please complete these tasks: 1. Explore the interface; 2. Follow links or active images; 3. Examine elements that present themselves; 4. Find at least two ways to close overlays`;
        }
        document.getElementById("usertest").innerHTML = txt;
      }

    myFunction(); */

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