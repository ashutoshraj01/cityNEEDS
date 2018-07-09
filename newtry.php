 <!DOCTYPE html>
 <html>
 <head>
     <title>
         
     </title>
 </head>
 <body>


  <table>

            <?php
                     $service = $_POST["service"];   
                     $con = mysqli_connect("localhost","root","");
                     mysqli_select_db($con,"city_need");
                     $query = "select * from serviceprovider where OcupationName = '$service'";
                     $result = mysqli_query($con,$query);

                     while($row = mysqli_fetch_array($result))
                     {


            ?>
                <tr>
                    <th>Name</th>
                    <th><?php echo "".$row['UserName']; ?></th>
                </tr>
                <tr>
                    <th>Service</th>
                    <th><?php echo "".$row['OcupationName'];?></th>
                </tr>
                <tr>
                    <th>Email</th>
                    <th><?php echo "".$row['Email'];?></th>
                </tr>
                <tr>
                    <th>Contact</th>
                    <th><?php echo "".$row['Number'];?></th>
                </tr>
                <tr>
                    <th><button style="background-color:#333;color:white;">Request</button></th>
                </tr>
                <?php } ?>
            </table>
          </body>
          </html>