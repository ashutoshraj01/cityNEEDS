<!DOCTYPE html>
<html>
<head>
     <title></title>
</head>
<body>

     <?php     
     $UserName = $_POST['UserName'];
     $OcupationName = $_POST['OcupationName'];
     $Email         =$_POST['Email'];
     $Number    =$_POST['Number'];
     $AdharCard =$_POST['AdharCard'];
     $OrganizationName= $_POST['OrganizationName'];
     $Address            =$_POST['Address'];

     $con = mysqli_connect("localhost","ak2019cs","qwerty123");
     mysqli_select_db($con,"city_need");
     $query = "insert into serviceprovider values ('$UserName','$OcupationName','$Email','$Number','$AdharCard','$OrganizationName','$Address')";
     mysqli_query($con,$query);

     echo "inserted<br>";
     echo "$UserName<br>";
     echo "$OcupationName<br>";
     echo "$Email<br>";
     echo "$Number<br>";
     echo "$AdharCard<br>";
     echo "$OrganizationName<br>";
     echo "$Address";
     header('Location:http://xheel.org/city_needs/redirect.php');
     ?>
    
</body>
</html>




