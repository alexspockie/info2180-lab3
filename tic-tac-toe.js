function initpage(){
	var children = document.getElementById("board").children;
	var cnt=0;
	for(let c of children){
		cnt++;
		c.classList.add("square");
		c.setAttribute("id",cnt);
		c.addEventListener("click",function(){			
			makeMove(c,cnt);
		});
	}
} 
function makeMove(c){
	if(moves==0){
		c.classList.add("X");
		c.innerHTML="X";
		var m=1;
	}
	else{
		if(moves%2==1){
			c.classList.add("O");
			c.innerHTML="O";
			var m=-1;
		}
		else{
			c.classList.add("X");
			c.innerHTML="X";
			var m=1;
		}
	}
	moves++;
	// adding scores
	cnt=c.getAttribute("id");
	//var rownum=Math.floor(cnt/3);
	if(cnt<=3){
		var rownum=0;
	}
	else if(cnt<=6){
		var rownum=1;
	}
	else{
		var rownum=2;
	}

	rows[rownum]=rows[rownum]+m;
	var colnum=cnt%3-1;
	if(colnum<0){
		colnum=2;
	}
	columns[colnum]=columns[colnum]+m;
	if(rownum==colnum){
		lfdg=lfdg+m;
	}
	//add things to calculate right diagonal
	
}


//const moves=[];
const rows=[0,0,0]; // total value of row 1 row 2 and row 3
const columns=[0,0,0]; // total value of col 1 col2 and col 3
var lfdg=0; //total value of left diagonal
var rtdg=0; //total value of right diagonal
var moves=0;
document.addEventListener("DOMContentLoaded",function(){
	initpage();
});