function showMood() {
	name = document.getElementById('name').value;

	mood1 = document.getElementById('mood1').value;

	if(!name || !mood1) {
		alert("Please fill all fields");
		return false;
	}

	if(mood1 == "happy") {
		face = " :) ";
	} else if(mood1 == "sad") {
		face = " :( ";
	} else {
		face = " :| ";
	}

	moodString = name + " is " + mood1 + " today " + face;

	holder = document.getElementById('holder');	
	holder.innerHTML = moodString;
}

function clearMood() {
	document.getElementById('moodform').reset();

	holder = document.getElementById('holder');	
	holder.innerHTML = "";
}