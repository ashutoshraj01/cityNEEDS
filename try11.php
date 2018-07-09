<?php
					
					$a = 'Anuj';
					$con =	mysqli_connect("localhost","ak2019cs","qwerty123");
					mysqli_select_db($con,"city_need");
					$query = "select * from feedback where UserName = '$a'";
					$result = mysqli_query($con,$query);



					  	while($row = mysqli_fetch_array($result))
						{

					  		echo "".$row['Feedback'];
					  	}

					
			?>
