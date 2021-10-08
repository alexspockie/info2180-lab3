function initpage(){
	var children = document.getElementById("board").children;
	var cnt=0;
	var rbutton=document.getElementsByTagName("button")[0];
	rbutton.addEventListener("click",function(){
		newGame();
	});

	for(let c of children){
		cnt++;
		c.classList.add("square");

		c.setAttribute("id",cnt);
		c.addEventListener("click",function(){			
			makeMove(c);
		});
		c.addEventListener("mouseenter",function(){			
			c.classList.add("hover");
		});
		c.addEventListener("mouseleave",function(){			
			c.classList.remove("hover");
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
	if(colnum==1 && rownum==1){
		rtdg=rtdg+m;
	}
		
	var diff=rownum-colnum;
	if (diff==2 || diff==-2){
		rtdg=rtdg+m;
		
	}
	if (rows[rownum]==3 || columns[colnum]==3 || lfdg==3 || rtdg==3){
		//x wins
		var wsec=document.getElementById("status");
		wsec.classList.add("you-won");
		wsec.innerHTML="Congratulations! X is the Winner!";
	}
	else if(rows[rownum]==-3 || columns[colnum]==-3 || lfdg==-3 ||rtdg==-3){
		//o wins
		var wsec=document.getElementById("status");
		wsec.classList.add("you-won");
		wsec.innerHTML="Congratulations! O is the Winner!";
	}
	else{
		//pass;
	}	
}


function newGame(){
	lfdg=0;
	rtdg=0;
	for(let i=0;i<3;i++){
		rows[i]=0;
		columns[i]=0;
	}
	var child = document.getElementById("board").children;
	for(let c of child){
		c.innerHTML="";
		c.classList.remove("X");
		c.classList.remove("O");
	}
	var wsec=document.getElementById("status");
	wsec.classList.remove("you-won");
	wsec.innerHTML="Move your mouse over a square and click to play an X or an O.";
	moves=0;
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


