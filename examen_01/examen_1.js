//GSDevTools.create();


// Animation fruits
gsap.timeline({
    defaults: {    
    },
    repeat: -1,
    yoyo : true,
    stagger: 0.25,
    duration: 0.50,
  })
    .to('.pomme', 
        { scale: '1.25' })

        .to('.pizza', 
        { scale: '1.25' })

        .to('.celeri', 
        { scale: '1.25' })

        .to('.fraise', 
        { scale: '1.25' })

        .to('.burger', 
        { scale: '1.25' })

        .to('.melon', 
        { scale: '1.25' })

        .to('.poulet', 
        { scale: '1.25' })

        .to('.raisin', 
        { scale: '1.25' })

        .to('.pommeVerte', 
        { scale: '1.25' })  
;


// Animation formulaire
gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapperFormulaire',
    start: '25% 100%',
    end: 'bottom 50%',
    duration: 1,
    toggleActions: "play none none reverse",
        },
    })

  
  .from('.formulaire', { opacity : '0',})




    // Animation crayon
    gsap.to('.imgCrayon', { 
        ease: 'linear',
        x: '1800%',
        rotation: -35,
        scrollTrigger: {
        scrub: 1,
        start: 'top 100%',
        end: 'bottom 0%',
        trigger: '.wrapperFormulaire',
        }
    })
    
    // Animation background
    gsap.to('.wrapperFormulaire', { 
        backgroundColor: 'rgb(255, 255, 255)',
        scrollTrigger: {
            scrub: 1,
            start: 'top 100%',
            end: 'bottom 0%',
            trigger: '.wrapperFormulaire',
            }
        })

//Ajout liste
    
/* var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "btn";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var btn = document.getElementsByClassName("btn");
var i;
for (i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementsByClassName("objetListe").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementsByClassName("itemsAjouter").appendChild(li);
  }
  document.getElementsByClassName("itemsAjouter").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "btn";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

*/

// ?????????? Help