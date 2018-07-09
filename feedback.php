<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
				   <?php     
					     $UserName = $_POST['UserName'];
					     $UsedServices = $_POST['UsedServices'];
					     $Email         =$_POST['Email'];
					     $Number    =$_POST['Number'];
					     $OrganizationName= $_POST['OrganizationName'];
					     $Feedback            =$_POST['Feedback'];

					     $con = mysqli_connect("localhost","ak2019cs","qwerty123");
					     mysqli_select_db($con,"city_need");
					     $query = "insert into feedback values ('$UserName','$UsedServices','$Email','$Number','$OrganizationName','$Feedback')";
					     mysqli_query($con,$query);
					     header('Location:/City_need/redirect.php');
				    ?>
				    
</body>
</html>