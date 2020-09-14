   //EDUCATION
   function education_function() {

       document.getElementById("education").style.display = "block";
       document.getElementById("circle-pix").style.backgroundImage = "url(Education_2.jpg)";
       document.querySelector("header").style.backgroundImage = "url(Education_1.jpg)";
       document.getElementById("circle-pix").style.display = "block";
       document.getElementById("about").style.display = "none";
       document.getElementById("marriage").style.display = "none";
       document.getElementById("interests").style.display = "none";
       document.getElementById("religion").style.display = "none";
       document.getElementById("job").style.display = "none";
       document.getElementById("contact").style.display = "none";
   }

   //MARRIAGE
   function marriage_function() {
       document.getElementById("about").style.display = "none";
       document.getElementById("education").style.display = "none";
       document.getElementById("marriage").style.display = "block";
       document.getElementById("interests").style.display = "none";
       document.getElementById("religion").style.display = "none";
       document.getElementById("job").style.display = "none";
       document.getElementById("contact").style.display = "none";
       document.getElementById("circle-pix").style.display = "none";
       document.querySelector("header").style.backgroundImage = "url(Family_1.jpg)";
   }

   //INTERESTS
   function interests_function() {
       document.getElementById("circle-pix").style.backgroundImage = "url(Interest_2.jpg)";
       document.querySelector("header").style.backgroundImage = "url(Interest_1.jpg)"
       document.getElementById("circle-pix").style.display = "none";;
       document.getElementById("about").style.display = "none";
       document.getElementById("education").style.display = "none";
       document.getElementById("marriage").style.display = "none";
       document.getElementById("interests").style.display = "block";
       document.getElementById("religion").style.display = "none";
       document.getElementById("job").style.display = "none";
       document.getElementById("contact").style.display = "none";
   }

   //RELIGION
   function religion_function() {
       document.querySelector("header").style.backgroundImage = "url(Religion_1.jpg)";
       document.getElementById("about").style.display = "none";
       document.getElementById("education").style.display = "none";
       document.getElementById("marriage").style.display = "none";
       document.getElementById("interests").style.display = "none";
       document.getElementById("religion").style.display = "block";
       document.getElementById("job").style.display = "none";
       document.getElementById("contact").style.display = "none";
       document.getElementById("circle-pix").style.display = "none";
   }

   //WORK HISTORY
   function work_function() {

       document.querySelector("header").style.backgroundImage = "url(job.jpg)";
       document.getElementById("circle-pix").style.display = "none";
       document.getElementById("about").style.display = "none";
       document.getElementById("education").style.display = "none";
       document.getElementById("marriage").style.display = "none";
       document.getElementById("interests").style.display = "none";
       document.getElementById("religion").style.display = "none";
       document.getElementById("job").style.display = "block";
       document.getElementById("contact").style.display = "none";


   }

   //CONTACT
   function contact_function() {
       document.getElementById("about").style.display = "none";
       document.getElementById("education").style.display = "none";
       document.getElementById("marriage").style.display = "none";
       document.getElementById("interests").style.display = "none";
       document.getElementById("religion").style.display = "none";
       document.getElementById("job").style.display = "none";
       document.getElementById("contact").style.display = "block";
       document.getElementById("circle-pix").style.display = "none";
       document.querySelector("header").style.backgroundImage = "url(6.jpeg)";


   }