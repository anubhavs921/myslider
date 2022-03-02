let flag = 3;

function controller(x) {
    //3 images condition follow
    flag = flag + x;
    //left condition follow
    slideShow(flag);
    
}

slideShow(flag);

function slideShow(num) {
    let slides = document.getElementsByClassName('slider');
   	//array logic apply
   	if(num == slides.length){
   	flag = 0;
   	num = 0;
   	}
	if(num<0){
	flag = slides.length-1;
	num = slides.length-1;
	}
	//hide
	for(let item of slides) {
		item.style.display = "none";
	} 
    slides[num].style.display = "block";
}
