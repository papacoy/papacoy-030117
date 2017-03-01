function clickMe(){
			document.getElementById('first').innerHTML = "papacoy";	
}

function addMe(){
	var x = document.getElementById('firstNum').value; 
	var y = document.getElementById('secondNum').value;
	var sum = parseInt(x) + parseInt(y);
	document.getElementById('answer').innerHTML = sum;
	
	
}
