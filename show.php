<?php 
   $to = $_POST['to'];
   $callme = $_POST['callme'];
   echo "$to";
   echo "$callme";
   $msg = "this is the service request from city needs ,We hope you will serve the best .Contact your customer imediatly : $callme";
   echo "$msg";
  mail($to,"Service Request(City Needs)",$msg);
  header('Location:http://xheel.org/city_needs/redirect.html');
?>