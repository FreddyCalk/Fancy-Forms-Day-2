
	function validateForm(){
		if(signUpForm.fullName.value.length < 5){
			signUpForm.fullName.focus();
			alert("Your must enter your full name")
			document.getElementById('name-wrapper').className = 'form-group has-error';
			return false;
		}
		if(signUpForm.address.value.length<10){
			signUpForm.address.focus()
			alert("You must enter your full address")
			document.getElementById('name-wrapper').className = 'form-group has-error';
			return false;
		}
		if(signUpForm.emailAddress.indexOf('.') <= -1){
			signUpForm.emailAddress.focus()
			alert("You must enter a valid email address")
			document.getElementById('email').className = 'form-group has-error';
			return false;
		}

		if(signUpForm.password.value.length < 6){
			signUpForm.password.focus()
			alert("Your password must be at least 6 characters")
			document.getElementById('password-wrapper').className = 'inner-wrap form-group has-error'
			return false;
		}
		else if(signUpForm.password.value !== signUpForm.passwordConfirm.value){
			signUpForm.password.focus();
			alert("Your passwords do not match")
			return false;
		}
	}
