	/* BACK LISTENER */
	
	let back = document.getElementsByClassName('back-button');
	for(let x = 0; x < back.length; x++ ){
		back[x].addEventListener('click',function(){		
			let leftSide = document.getElementById('left');
			leftSide.style.marginLeft = '-120%';
		});
	}
	

	
	
	window.addEventListener('resize',function(){
		
		checkLeft();
	});
	
	function checkLeft(){
		let w = window.innerWidth;
		let h = window.innerHeight;
		
		let leftSide = document.getElementById('left');
		
		if(w>960){
			leftSide.style.marginLeft = '0%';
		}else{
			leftSide.style.marginLeft = '-120%';
		}
	}
	
	

	
	window.addEventListener("scroll", function(){
				
		const beranda = document.getElementById("right").offsetTop;
		const fitur = document.getElementById("feature").offsetTop;
		const instalasi = document.getElementById("installation").offsetTop;
		const penggunaan = document.getElementById("usage").offsetTop;
		
		const scroll = window.pageYOffset;
		
		if(scroll < fitur ){
			document.title="Carousnap - Easy Snap Carousel";
		}else if(scroll < instalasi && scroll >= fitur){
			document.title="Feature and Support";
		}else if(scroll < penggunaan && scroll >= instalasi){
			document.title="Installation Guide";
		}else{
			document.title="How to Use";
		}
	});
	
	
	function goto(id){
		
		const element = document.getElementById(id);
		const elTop = element.offsetTop;
		
		if(element=="right"){
			window.scrollTo(0,elTop);
		}else{
			window.scrollTo(0,(elTop+10));
		}
		
	}