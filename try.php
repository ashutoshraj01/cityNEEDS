
<!DOCTYPE html>
<html>
<head>
	<title></title>
		<link rel="stylesheet" href="css/style.css">
	<!-- Responsive stylesheet -->
	<link rel="stylesheet" href="css/responsive.css">
</head>
<body>

<div class="testimonial nrb">
    <div class="container">
        <div class="section-title center">
            <h2>What Customers Say?</h2>
			<p>The feedback you give is valuable for us.Take a moment and encourage us.</p>
        </div>

        	<?php

					$con =	mysqli_connect("localhost","ak2019cs","qwerty123");
					mysqli_select_db($con,"city_need");
					$query = "select * from feedback";
					$result = mysqli_query($con,$query);
					while($row = mysqli_fetch_assoc($result))
					{
			?>


                   


                                                        <div class="testimonial-carousel">
                                                            <div class="testimonial-item">
                                                                <div class="content">
                                                                    <span class="fa fa-quote-left"></span>
                                                                    <p><?php echo "".$row['Feedback']; ?></p>

                                                                    <ul class="rating">
                                                                        <li class="fa fa-star"></li>
                                                                        <li class="fa fa-star"></li>
                                                                        <li class="fa fa-star"></li>
                                                                        <li class="fa fa-star"></li>
                                                                        <li class="fa fa-star"></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="author">
                                                                    <ul class="list-inline">
                                                                        <li>
                                                                            <img src="images/team/1.png" alt="">
                                                                        </li>
                                                                        <li>
                                                                            <h5><?php echo "".$row["UserName"]; ?></h5>
                                                                            <p><?php echo "".$row["UsedServices"]; ?></p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
       													 </div>


       							<?php

       										}
       							?>




    </div>
</div>





</body>
</html>


	{
		echo "".$row["UserName"];
	}

?>