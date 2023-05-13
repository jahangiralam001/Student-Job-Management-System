<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the job ID is set in the AJAX request
if (isset($_POST['jobId'])) {
    $jobId = $_POST['jobId'];

    error_log("Received job ID: " . $_POST['jobId']);

    // TODO: Update the view count for the job in the database
    // Assuming the table name is tbl_jobs
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "job_portal";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

 
 // Increment the view count
$sqlUpdate = "UPDATE tbl_jobs SET view_count = view_count + 1 WHERE job_id = ?";
$stmtUpdate = $conn->prepare($sqlUpdate);
$stmtUpdate->bind_param("s", $jobId);

if ($stmtUpdate->execute()) {
    $sqlSelect = "SELECT view_count FROM tbl_jobs WHERE job_id = ?";
    $stmtSelect = $conn->prepare($sqlSelect);
    $stmtSelect->bind_param("s", $jobId);
    $stmtSelect->execute();
    $stmtSelect->bind_result($updatedViewCount);
    $stmtSelect->fetch();

    echo "View count updated successfully: " . ($updatedViewCount - 1) . " to " . $updatedViewCount;
} else {
    echo "Database error: " . $stmtUpdate->error;
}

$stmtUpdate->close();
$stmtSelect->close();
$conn->close();

} else {
    echo "Job ID not set";
}
?>
