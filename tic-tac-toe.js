function initpage(){
	var children = document.getElementById("board").children;
	for(let c of children){
		c.classList.add("square");
	}
} 

document.addEventListener("DOMContentLoaded",function(){
	initpage();
});