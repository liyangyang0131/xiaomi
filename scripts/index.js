window.onload = function(){


	//自己之前做的
	// var bannerP = document.getElementsByClassName('bannerP'),
	// 	circle1 = document.getElementsByClassName('circle1');
	// var look = document.getElementById('look');

	// var previous = bannerP[0];
	// var previousC = circle1[0];
	// circle1[0].style.background = '#fff';
	// var index = 1;
	// var timerId;

	// var fn = function(){
	// 	previous.style.display = 'none';
	// 	bannerP[index].style.display = 'block';
	// 	previous = bannerP[index];

	// 	previousC.style.background = '#757575';
	// 	circle1[index].style.background = '#fff';
	// 	previousC = circle1[index];

	// 	index++;
	// 	if( index > bannerP.length-1 ){
	// 		index= 0;
	// 	}
		
	// };
	// clearInterval(timerId);
	// timerId = setInterval(fn,2000);

	// look.onmouseover = function(e){
	// 	var el = e.target;
	// 	if( el.getAttribute('class') == 'bannerP' ){
	// 		clearInterval(timerId);
	// 	}
	// }
	// look.onmouseout = function(e){
		
	// 	var el = e.target;
	// 	if( el.getAttribute('class') == 'bannerP' ){
	// 		clearInterval(timerId);
	// 		timerId = setInterval(fn,2000);
	// 	}
		
	// }

	// for(var i = 0;i<circle1.length;i++){
	// 	circle1[i].index = i;
		
	// 	circle1[i].onmouseover = function(){
	// 		this.style.cursor = 'pointer';
	// 		this.style.background = '#fff';
	// 	}
	// 	circle1[i].onmouseout = function(){
	// 		this.style.background = '#757575';
	// 	}


	// 	circle1[i].onclick = function(){
	// 		clearInterval(timerId);

	// 		previousC.style.background = '#757575';
	// 		this.style.background = '#fff';
	// 		previousC = this;
			
	// 		previous.style.display = 'none';
	// 		bannerP[this.index].style.display = 'block';
	// 		previous = bannerP[this.index];

	// 		index = this.index;
	// 	}
		
	// }


	// var jiantouL = document.getElementById('lunbo1-btn-l');
	// var jiantouR = document.getElementById('lunbo1-btn-r'); 

	// jiantouL.onclick = function(){
	// 	clearInterval(timerId);

	// 		index--;
	// 		previousC.style.background = '#757575';
	// 		circle1[index].style.background = '#fff';
	// 		previousC = circle1[index];
			
	// 		previous.style.display = 'none';
	// 		bannerP[index].style.display = 'block';
	// 		previous = bannerP[index];
			
	// 		if( index <= 0){
	// 			index = 5;
	// 		}	
	// }
	// jiantouR.onclick = function(){
	// 	clearInterval(timerId);

	// 	previousC.style.background = '#757575';
	// 	circle1[index].style.background = '#fff';
	// 	previousC = circle1[index];

	// 	previous.style.display = 'none';
	// 	bannerP[index].style.display = 'block';
	// 	previous = bannerP[index];

	// 	index++;
	// 	if( index > bannerP.length-1 ){
	// 		index = 0;
	// 	}
	// }


	//老师讲后做的
	var bannerP = document.getElementsByClassName('bannerP'),
		circle1 = document.getElementsByClassName('circle1'),
		look = document.getElementById('look'),
		prev = document.getElementById('lunbo1-btn-l'),
		next = document.getElementById('lunbo1-btn-r');
	var timerId,
		kaiguan = true,
		currentP = bannerP[0],
		currentC = circle1[0];
	var len = bannerP.length;
	var fn = (function(){
		var i = 1;
		var	len = bannerP.length;
		return function(){
			currentP.setAttribute('class','bannerP');
			bannerP[i].setAttribute('class','bannerP bannerPshow');
			currentP = bannerP[i];

			currentC.setAttribute('class','circle1');
			circle1[i].setAttribute('class','circle1 active');
			currentC = circle1[i];

			i++;
			if(i == len){
				i = 0;
			}
		}
	})();
	// var fn = function(){
	// 	currentP.setAttribute('class','bannerP');
	// 	bannerP[count].setAttribute('class','bannerP bannerPshow');
	// 	currentP = bannerP[count];

	// 	currentC.setAttribute('class','circle1');
	// 	circle1[count].setAttribute('class','circle1 active');
	// 	currentC = circle1[count];

	// 	count++;
	// 	if(count == len){
	// 		count = 0;
	// 	}
	// }

	timerId = setInterval(fn,2000);

	for(var i = 0;i<circle1.length;i++){
		circle1[i].index = i;
		circle1[i].onmouseover = function(){
			if(kaiguan){
				this.setAttribute('class','circle1 active');
			}
		}
		circle1[i].onmouseout = function(){
			if(kaiguan){
				this.setAttribute('class','circle1');
			}
		}
		circle1[i].onclick = function(){
			clearInterval(timerId);
			currentC.setAttribute('class','circle1');
			this.setAttribute('class','circle1 active');
			currentC = this;

			count= this.index;
			kaiguan = false;

			currentP.setAttribute('class','bannerP');
			bannerP[this.index].setAttribute('class','bannerP bannerPshow');
			currentP = bannerP[this.index];
		}
	};
	look.onmouseover = function(e){
		// console.log(e.target);
		// console.log(e.target.getAttribute('class'));
		if(e.target.getAttribute('class') == 'bannerP bannerPshow'){
			clearInterval(timerId);
		}
	}
	look.onmouseout = function(e){
		if(e.target.getAttribute('class') == 'bannerP bannerPshow'){
			clearInterval(timerId);
			timerId = setInterval(fn,2000); 
		}
	}

	prev.onclick = function(){
		clearInterval(timerId);
		console.log(prev);
		currentP.setAttribute('class','bannerP');

		// console.log(currentP.previousElementSibling);

		var prevP = (currentP.previousElementSibling)?currentP.previousElementSibling:bannerP[4];
		prevP.setAttribute('class','bannerP bannerPshow');
		currentP = prevP;

		currentC.setAttribute('class','circle1');
		var prevC = (currentC.previousElementSibling)?currentC.previousElementSibling:circle1[4]
		prevC.setAttribute('class','circle1 active');
		currentC = prevC;
	}
	next.onclick = function(){
		clearInterval(timerId);
		// console.log(next);

		currentP.setAttribute('class','bannerP');
		// console.log(currentP.nextElementSibling);
		var prevP = (currentP.nextElementSibling)?currentP.nextElementSibling:bannerP[0];
		prevP.setAttribute('class','bannerP bannerPshow');
		currentP = prevP;

		currentC.setAttribute('class','circle1');
		var prevC = (currentC.nextElementSibling)?currentC.nextElementSibling:circle1[0]
		prevC.setAttribute('class','circle1 active');
		currentC = prevC;
	}
	prev.onmousedown = function(e){
		e.preventDefault();
	}
	next.onmousedown = function(e){
		e.preventDefault();
	}



	//关于闭包的小练习
	// prev.onclick = (function(){
	// 	var index = 0;
	// 	return function(){
	// 		if(index<3){
	// 			console.log(1);
	// 		}
	// 		index++;
			
	// 	}
	// })();
};