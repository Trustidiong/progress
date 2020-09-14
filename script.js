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
       //document.querySelector("header").innerHTML = "<p>JJ</p>";

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

       // let x = document.getElementById("map");

       document.getElementById("header").appendChild(document.getElementById("map"));
       document.getElementById("map").style.display = "block";
       // document.querySelector("header").style.display = "block";
       //document.querySelector("header").style.backgroundImage = "none";
       //document.querySelector("header").innerHTML = "<iframe scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?hl=en&amp;q=urua%20ekpa%20road,%20uyo,%20nigeria+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\" width=\"100%\" height=\"450\" frameborder=\"0\"></iframe>";
       document.getElementById("circle-pix").style.display = "none";


   }