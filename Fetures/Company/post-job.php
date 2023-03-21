<!doctype html>
<html lang="en">

<?php 
require '../constants/settings.php'; 
require 'constants/check-login.php';

if ($user_online == "true") {
if ($myrole == "employer") {
}else{
header("location:../");		
}
}else{
header("location:../");	
}
?>
<!-- Header -->
<?php require 'dry_code/header.php'; ?>

		<div class="main-wrapper">
		
			<div class="breadcrumb-wrapper">
			
				<div class="container">
				
					<ol class="breadcrumb-list booking-step">
						<li><a href="../">Home</a></li>
						<li><a ><?php echo "$compname"; ?></a></li>
						<li><span><b>Post a Job</b></span></li>
					</ol>
					
				</div>
				
			</div>

			
			<div class="section sm">
			
				<div class="container">
				
					<div class="row">
						
							<div class="col-sm-5 col-md-4">
 
<!-- ---------------------------Side-Bar part------------------------------- -->
							<div class="GridLex-col-3_sm-4_xs-12"> 
							
								<!-- <?php require 'dry_code/sidebar.php'; ?>  -->

					  		 </div>
<!-- ---------------------------Side-Bar Close------------------------------- -->
					
					

<!-- --------------------------- Footer ------------------------------- -->
		
							
<?php require 'dry_code/footer.php'; ?> 

				
<!-- ---------------------------Footer Close------------------------------- -->
			


</body>



</html>