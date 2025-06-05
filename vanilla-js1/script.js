// Multiple events attached to an element
const button = document.getElementById("myButton");
        const message = document.getElementById("message");

				// Click the button
				button.addEventListener("click", function(){
					button.style.backgroundColor = "lightblue"
					message.innerHTML = "Button is clicked"
				})


				// Mouse enters the button
				button.addEventListener("mouseenter", function(){
					message.innerHTML = "Mouse is over the button"
				})
				

				// Mouse leaves the button
button.addEventListener("mouseleave", function(){
					message.innerHTML = "Mouse has left the button"
				})


				// The keydown event in JavaScript (and React) is triggered when a key is pressed down on the keyboard.
					document. addEventListener("keydown", function(){
						if(event.key === "Shift")
						{
							message.style.color = "green"
							message.innerHTML = "Shift key pressed"
						}
						
					})
       
