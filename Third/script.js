const navBar = document.getElementById('media-navbar');
const barEl = document.getElementById('bars');
const barThree = document.getElementById('barthree');
const barTwo = document.getElementById('bartwo');
const barOne = document.getElementById('barone');
const mobileBar = document.getElementById('mobile-nav1');
const mobileBarth = document.getElementById('mobile-nav2');
const mobileBarf = document.getElementById('mobile-nav3');
	barEl.onclick = () =>{
		navBar.classList.toggle('active');
		barOne.classList.toggle('active');
		barTwo.classList.toggle('active');
		barThree.classList.toggle('active');
	}
	function close(){
		navBar.classList.toggle('active');
		barOne.classList.toggle('active');
		barTwo.classList.toggle('active');
		barThree.classList.toggle('active');
	}
	mobileBar.onclick = () => {
		close()
	}
	mobileBarth.onclick = () => {
		close()
	}
	mobileBarf.onclick = () => {
		close()
	}
    
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	
  let currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");
//   const links = document.querySelectorAll('#alink'); 


  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("navbar-hidden");
  } else {
    navbar.classList.add("navbar-hidden");
  }

//   links.forEach(link => {
//     if (window.scrollY > 1300) {
//       link.style.color = '#fff';
// 	  navbar.classList.add('back')
//     } else {
//       link.style.color = '#000';
// 	  navbar.classList.remove('back')

//     }
//   });
if(window.scrollY < 600){
	document.getElementById('homel').style.color='#b11d09'
	document.getElementById('aboutl').style.color='#000'
	document.getElementById('contactl').style.color='#000'
}else if (window.scrollY > 600 && window.scrollY < 1500) {
	document.getElementById('homel').style.color='#000'
	document.getElementById('contactl').style.color='#000'
	document.getElementById('aboutl').style.color='#b11d09'

} else if (window.scrollY >1500 && window.scrollY < 2200) {
	document.getElementById('contactl').style.color='#b11d09'
	document.getElementById('aboutl').style.color='#000'
	document.getElementById('homel').style.color='#000'
}

  prevScrollpos = currentScrollPos;
};