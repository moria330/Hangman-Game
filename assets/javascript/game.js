document.onkeyup = function(event){
	var letter =String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letter);
	var lastkey = letter;
	return letter;
}
console.log('lastKey is: ' + letter)
// function inputKey(){
// 	var k = document.getElementById('last-key');
// 	return k;
// }
// inputKey();

function print(){
	var p = document.createElement("p");
	p.appendChild(lastkey);
}	
print();