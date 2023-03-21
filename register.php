<!DOCTYPE html>
<html>
<!-- Header -->
<?php require 'dry_code/header.php'; ?>
<!-- Header End -->


<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Signup</title>
	<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./css/bootstrap-icons.css">
	<link rel="stylesheet" href="./css/nav.css">
	<link rel="stylesheet" href="./css/main.css">



	
</head>
<body>

	
	<form method="post" onsubmit="myaction.collect_data(event, 'signup')" sty>
	
		<div class="main-wrapper">
		<div class="breadcrumb-wrapper">
			
			<div class="container">
			
				<ol class="breadcrumb-list">
					<li><a href="./">Home</a></li>
					<li><span>Sign Up</span></li>
				</ol>
				
			</div>
			
		</div>

		<h2 style="font-size: bold ; text-align: center; margin-top: 30px;">Register Now!</h2>
			<div class="login-container-wrapper">
			<div class="container">
			<div class="row">
			<div class="col-md-10 col-md-offset-1">
			<div class="row">
			<div class="col-sm-6 col-sm-offset-3">

			<?php
				 
								if (isset($_GET['p'])) {
								$position = $_GET['p'];
                                if ($position == "Employee") {
                                include 'constants/draw-employee.php';
								}else{
                               
								}	

                                if ($position == "Employer") {
                                include 'constants/draw-employer.php';
								}else{

								}								
								}else{
		                        
								}
								
								?>	
			<div class="input-group mt-3">
			  <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-circle"></i></span>
			  <input name="firstname" type="text" class="form-control p-3" placeholder="First name" >
			</div>
			<div><small class="js-error js-error-firstname text-danger"></small></div>

			<div class="input-group mt-3">
			  <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-square"></i></span>
			  <input name="lastname" type="text" class="form-control p-3" placeholder="Last name" >
			</div>
			<div><small class="js-error js-error-lastname text-danger"></small></div>

			<div class="input-group mt-3">
			  <span class="input-group-text" id="basic-addon1"><i class="bi bi-gender-ambiguous"></i></span>
			  <select class="form-select" name="gender">
			  	  <option selected value="">--Select Gender--</option>
				  <option value="Male">Male</option>
				  <option value="Female">Female</option>
			  </select>
			</div>
			<div><small class="js-error js-error-gender text-danger"></small></div>
			
			<div class="input-group mt-3">
			  <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
			  <input name="email" type="text" class="form-control p-3" placeholder="Email" >
			</div>
			<div><small class="js-error js-error-email text-danger"></small></div>
			
			<div class="input-group mt-3">
			  <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>
			  <input name="password" type="password" class="form-control p-3" placeholder="Password" >
			</div>
			<div><small class="js-error js-error-password text-danger"></small></div>

			<div class="input-group mt-3">
			  <span class="input-group-text" id="basic-addon1"><i class="bi bi-key-fill"></i></span>
			  <input name="retype_password" type="password" class="form-control p-3" placeholder="Retype Password" >
			</div>

			<div class="progress mt-3 d-none">
			  <div class="progress-bar" role="progressbar" style="width: 50%;" >Working... 25%</div>
			</div>

			<button class="mt-3 btn btn-primary col-12">Signup</button>
			<div class="m-2">
				Already have an account? <a href="login.php">login here</a>
			</div>
		
		</div>
		</div>
		</div>
		</div>
		</div>
		</div>
		</div>
		
	</form>
	

<script type="text/javascript">
function val(){
if(frm.password.value == "")
{
	alert("Enter the Password.");
	frm.password.focus(); 
	return false;
}
if((frm.password.value).length < 8)
{
	alert("Password should be minimum 8 characters.");
	frm.password.focus();
	return false;
}

if((frm.password.value).length > 20)
{
	alert("Password should be maximum 20 characters.");
	frm.password.focus();
	return false;
}

if(frm.confirmpassword.value == "")
{
	alert("Enter the Confirmation Password.");
	return false;
}
if(frm.confirmpassword.value != frm.password.value)
{
	alert("Password confirmation does not match.");
	return false;
}

return true;
}
</script>

<div id="back-to-top">
   <a href="#"><i class="ion-ios-arrow-up"></i></a>
</div>

<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/bootstrap-modalmanager.js"></script>
<script type="text/javascript" src="js/bootstrap-modal.js"></script>
<script type="text/javascript" src="js/smoothscroll.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/jquery.waypoints.min.js"></script>
<script type="text/javascript" src="js/wow.min.js"></script>
<script type="text/javascript" src="js/jquery.slicknav.min.js"></script>
<script type="text/javascript" src="js/jquery.placeholder.min.js"></script>
<script type="text/javascript" src="js/bootstrap-tokenfield.js"></script>
<script type="text/javascript" src="js/typeahead.bundle.min.js"></script>
<script type="text/javascript" src="js/bootstrap3-wysihtml5.min.js"></script>
<script type="text/javascript" src="js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="js/jquery-filestyle.min.js"></script>
<script type="text/javascript" src="js/bootstrap-select.js"></script>
<script type="text/javascript" src="js/ion.rangeSlider.min.js"></script>
<script type="text/javascript" src="js/handlebars.min.js"></script>
<script type="text/javascript" src="js/jquery.countimator.js"></script>
<script type="text/javascript" src="js/jquery.countimator.wheel.js"></script>
<script type="text/javascript" src="js/slick.min.js"></script>
<script type="text/javascript" src="js/easy-ticker.js"></script>
<script type="text/javascript" src="js/jquery.introLoader.min.js"></script>
<script type="text/javascript" src="js/jquery.responsivegrid.js"></script>
<script type="text/javascript" src="js/customs.js"></script>

</body>
</html>

<script>
	
	var myaction  = 
	{
		collect_data: function(e, data_type)
		{
			e.preventDefault();
			e.stopPropagation();

			var inputs = document.querySelectorAll("form input, form select");
			let myform = new FormData();
			myform.append('data_type',data_type);

			for (var i = 0; i < inputs.length; i++) {

				myform.append(inputs[i].name, inputs[i].value);
			}

			myaction.send_data(myform);
		},

		send_data: function (form)
		{

			var ajax = new XMLHttpRequest();

			document.querySelector(".progress").classList.remove("d-none");

			//reset the prog bar
			document.querySelector(".progress-bar").style.width = "0%";
			document.querySelector(".progress-bar").innerHTML = "Working... 0%";

			ajax.addEventListener('readystatechange', function(){

				if(ajax.readyState == 4)
				{
					if(ajax.status == 200)
					{
						//all good
						myaction.handle_result(ajax.responseText);
					}else{
						console.log(ajax);
						alert("An error occurred");
					}
				}
			});

			ajax.upload.addEventListener('progress', function(e){

				let percent = Math.round((e.loaded / e.total) * 100);
				document.querySelector(".progress-bar").style.width = percent + "%";
				document.querySelector(".progress-bar").innerHTML = "Working..." + percent + "%";
			});

			ajax.open('post','ajax.php', true);
			ajax.send(form);
		},

		handle_result: function (result)
		{
			console.log(result);
			var obj = JSON.parse(result);
			if(obj.success)
			{
				alert("Profile created successfully");
				window.location.href = 'login.php';
			}else{

				//show errors
				let error_inputs = document.querySelectorAll(".js-error");

				//empty all errors
				for (var i = 0; i < error_inputs.length; i++) {
					error_inputs[i].innerHTML = "";
				}

				//display errors
				for(key in obj.errors)
				{
					document.querySelector(".js-error-"+key).innerHTML = obj.errors[key];
				}
			}
		}
	};

</script>
