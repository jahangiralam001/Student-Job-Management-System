<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Guider</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="introLoader" class="introLoading"></div>
    <div class="container-wrapper">
    <header id="header">
        <nav class="navbar navbar-default navbar-fixed-top navbar-sticky-function">
            <div class="container">
                <div class="logo-wrapper">
                    <div class="logo">
                        <a href="./"><img src="images/logo.png" alt="Logo"></a>
                    </div>
                </div>
                <div id="navbar" class="navbar-nav-wrapper navbar-arrow">
                   <ul class="nav navbar-nav" id="responsive-menu">                   
                        <li>                       
                            <a href="./">Home</a>                            
                        </li>                        
                        <li>
                            <a href="#">Jobs</a>
                        </li>                        
                        <li>
                            <a href="#">Companies</a>
                        </li>    
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="slicknav-mobile"></div>
        </nav>

        <div id="registerModal" class="modal fade login-box-wrapper" tabindex="-1" style="display: none;" data-backdrop="static" data-keyboard="false" data-replace="true">
			
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<h4 class="modal-title text-center">Create Your Account Today</h4>
				</div>
				
				<div class="modal-body">
				
					<div class="row gap-20">
					
						<div class="col-sm-6 col-md-6">
							<a href="register.php?p=Employer" class="btn btn-facebook btn-block mb-5-xs">Sign Up as Company</a>
						</div>
						<div class="col-sm-6 col-md-6">
							<a href="register.php?p=Employee" class="btn btn-facebook btn-block mb-5-xs">Sign Up as Student</a>
						</div>

					</div>
				
				</div>
				
				<div class="modal-footer text-center">
					<button type="button" data-dismiss="modal" class="btn btn-primary btn-inverse">Close</button>
				</div>
				
			</div>

    </header>
    <div class="main wrapper">
        <div class="hero" style="background-image:url('images/x.jpg');">
            <div class="container">
                <h1>Find your next job, fast.</h1>
                <p>Search by skills. View salaries. One-click apply.</p>

                <div class="main-search-form-wrapper">

                    <form action="">
                        <div class="form-holder">
                            <div class="row gap-0">
                                <div class="col-xss-6 col-xs-6 col-sm-6">
                                    <select class="form-control" name="category" required>
                                        <option value="">-Select category-</option>
                                    </select>

                                </div>

                                <div class="col-xss-6 col-xs-6 col-sm-6">
                                    <select class="form-control" name="country" id="">
                                        <option value="">-Select country-</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="btn-holder">
                            <button name="search" value="✓" type="submit" class="btn"><i class="ion-android-search"></i>Search</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
      
    <div class="post-hero bg-light">
        <div class="container">
            <div class="process-item-wrapper mt-20">
                <div class="row">
                    <div class="col-sm-4">
                        <div style="transition: box-shadow .25s, -webkit-box-shadow .25s;
                        padding: 24px;
                        margin: .5rem 0 1rem 0;
                        border-radius: 2px;
                        background-color: #ffffff;
                        text-align: center;
                        font-size: 14px;
                        line-height: 1.5;
                        font-family: 'Roboto', 'sans-serif';
                        color: rgba(0,0,0,0.87);
                        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);
                        padding-bottom:20px;">

                         <div class="icon">
                         <i style="color: #fdc94f ; font-size: 7rem;" class="material-icons large teal-text">search</i>
                         </div>

                         <h4  style="font-size: 2.28rem;
                         line-height: 110%;
                         margin: 1.14rem 0 .912rem 0;
                         font-family: 'Roboto', 'sans-serif';
                         ">Search for jobs</h4>
                         <p style=" font-weight: normal;padding-bottom:15px;">
                            We can recommend you jobs based on your previous searches, applications, CV and employment history making your search for the perfect role even easier.
                        </p>
                            
                        </div>

                    </div>

                    <div class="col-sm-4">
							
                        <div  style="transition: box-shadow .25s, -webkit-box-shadow .25s;
                                        padding: 24px;
                                        margin: .5rem 0 1rem 0;
                                        border-radius: 2px;
                                        background-color: #ffffff;
                                        text-align: center;
                                        font-size: 14px;
                                        line-height: 1.5;
                                        font-family: 'Roboto', 'sans-serif';
                                        color: rgba(0,0,0,0.87);
                                        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);
                                        padding-bottom:20px;

                                        
                                                        ">

                                            <div class="icon">
                                            <i style="color: #fdc94f ; font-size: 7rem;" class="material-icons large teal-text">access_time</i>
                                                </div>
                        
                        <h4 style="font-size: 2.28rem;
                                    line-height: 110%;
                                    margin: 1.14rem 0 .912rem 0;
                                    font-family: 'Roboto', 'sans-serif';
                                    ">
                        Quick Apply a Job</h4>
                        <p style=" 
                                
                                    font-weight: normal;
                                    padding-bottom:15px;
                                    
                                    ">
                                        Quick Apply shows you recommended jobs based off your most recent search and allows you to apply to 25+ jobs in a matter of seconds! Its easily and simple.</p>
                          </div>

                </div>

                
							<div class="col-sm-4">
								
                                <div  style="transition: box-shadow .25s, -webkit-box-shadow .25s;
                                                padding: 24px;
                                                margin: .5rem 0 1rem 0;
                                                border-radius: 2px;
                                                background-color: #ffffff;
                                                text-align: center;
                                                font-size: 14px;
                                                line-height: 1.5;
                                                font-family: 'Roboto', 'sans-serif';
                                                color: rgba(0,0,0,0.87);
                                                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);
                                                padding-bottom:30px;
    
                                                
                                                                ">
    
                                                    <div class="icon">
                                                    <i style="color: #fdc94f ; font-size: 7rem;" class="material-icons large teal-text">card_travel</i>
                                                        </div>
                                
                                <h4 style="font-size: 2.28rem;
                                            line-height: 110%;
                                            margin: 1.14rem 0 .912rem 0;
                                            font-family: 'Roboto', 'sans-serif';
                                            ">
                                Start Working</h4>
                                <p style="font-weight: normal;
                                        padding-bottom:6px;">
                             Keep track of positions that you're interested in by signing up for job alert emails.When your application will be granted start working.You can apply for multiple jobs</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>

    <div class="pt-0 pb-50">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <div class="section-title">
                        <br><h5 style="text-align: center; color:#5d677a;font-weight: 400; font-family: 'Roboto', 'sans-serif';">THOUSANDS OF JOBS</h5>
								<h2 style="text-align: center; color:black;font-weight: 400; font-family: 'Montserrat', 'sans-serif';"> 
								<span style="color: #009688 !important;">Top Hiring</span>
								Companies</h2>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <div class="bg-light pt-80 pb-80">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <div class="section-title">
							
                        <h5 style="text-align: center; color:#5d677a;font-weight: 400; font-family: 'Roboto', 'sans-serif';">Quick Apply For</h5>
                        <h2 style="text-align: center; color:black;font-weight: 400; font-family: 'Montserrat', 'sans-serif';"> 
                            <span style="color: black">Latest Jobs</span>
                        </h2>
                            
                     </div>   

                </div>

            </div>
        
        </div>

    </div>

    <!-- --------------------------- Footer ------------------------------- -->
		
							
<?php require 'footer.php'; ?> 

				
<!-- ---------------------------Footer Close------------------------------- -->
        </div>
    </div>
    <div id="back-to-top">
    <a href="#"><i class="ion-ios-arrow-up"></i></a>
    </div>

    </body>
</html>