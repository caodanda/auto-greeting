
console.log('I am from boss')

var button = document.getElementById("mybutton");
button.addEventListener("click", function() {
	var val = document.getElementById('input').value;
	chrome.extension.sendMessage({txt:val}, 
		function(data){
			console.log(data)
		}
	)
},false)



