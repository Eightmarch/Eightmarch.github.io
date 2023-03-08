const cat3 = document.getElementById("cat3");
const cat4 = document.getElementById("cat4");
const card = document.getElementById("card");
const bg = document.getElementById("bg");
const bg1 = document.getElementById("bg1");

setTimeout(function () {
	card.addEventListener("mouseover", () => {
		cat3.classList.remove("hidden");
		cat4.classList.remove("hidden");
	});

	card.addEventListener("mouseout", () => {
		cat3.classList.toggle("hidden");
		cat4.classList.toggle("hidden");
	});

	var centerX = bg.clientWidth / 2;
	var centerY = bg.clientHeight / 2;
	var radius = 2000;
	var angle = 0;
	var speed = 0.05;

	function animate() {
		angle += speed;
		var x = centerX + Math.cos(angle) * radius;
		var y = centerY + Math.sin(angle) * radius;
		cat3.style.left = x - cat3.clientWidth / 2 + "px";
		cat3.style.top = y - cat3.clientHeight / 2 + "px";
		requestAnimationFrame(animate);
	}

	animate();

	// const cat4 = document.getElementById("cat4");
	// const bg1 = document.getElementById("bg1");
	// const card = document.getElementById("card");

	var centerX1 = bg1.clientWidth / 2;
	var centerY1 = bg1.clientHeight / 2;
	var radius1 = 2000;
	var angle1 = 10;
	var speed1 = 0.05;

	function animate1() {
		angle1 += speed1;
		var x = centerX1 + Math.cos(angle1) * radius1;
		var y = centerY1 + Math.sin(angle1) * radius1;
		cat4.style.left = x - cat4.clientWidth / 2 + "px";
		cat4.style.top = y - cat4.clientHeight / 2 + "px";
		requestAnimationFrame(animate1);
	}

	animate1();
}, 5000);

// card.addEventListener("mouseover", () => {
//     cat3.classList.remove("hidden");
//     cat4.classList.remove("hidden");

// });

// card.addEventListener("mouseout", () =>{
//     cat3.classList.toggle("hidden")
//     cat4.classList.toggle("hidden")

// })

// var centerX = bg.clientWidth / 2;
// var centerY = bg.clientHeight / 2;
// var radius = 1900;
// var angle = 0;
// var speed = 0.05;

// function animate() {
//   angle += speed;
//   var x = centerX + Math.cos(angle) * radius;
//   var y = centerY + Math.sin(angle) * radius;
//   cat3.style.left = x - cat3.clientWidth / 2 + "px";
//   cat3.style.top = y - cat3.clientHeight / 2 + "px";
//   requestAnimationFrame(animate);
// }

// animate()

// // const cat4 = document.getElementById("cat4");
// // const bg1 = document.getElementById("bg1");
// // const card = document.getElementById("card");

// var centerX1 = bg1.clientWidth / 2;
// var centerY1 = bg1.clientHeight / 2;
// var radius1 = 2000;
// var angle1 = 10;
// var speed1 = 0.05;

// function animate1() {
// 	angle1 += speed1;
// 	var x = centerX1 + Math.cos(angle1) * radius1;
// 	var y = centerY1 + Math.sin(angle1) * radius1;
// 	cat4.style.left = x - cat4.clientWidth / 2 + "px";
// 	cat4.style.top = y - cat4.clientHeight / 2 + "px";
// 	requestAnimationFrame(animate1);
// }

// animate1();
