<?php require("common/header.php"); ?>
	<div class="fullPage" style="background-image:url(<?= $info[$_GET["idiot"]]["imagine"]  ?>)">
		<div class="cover"></div>
		<div class="container" style="height:100%;display:flex;align-items:center">
			<div class="row">
				<div class="col-md-6" style="display:flex;flex-direction: column; justify-content: center;">
					<h1><?= $info[$_GET["idiot"]]["nume"] ?></h1>
					<div class="divider"> <i class="fa fa-circle-o"></i> </div>
					<p><?= $info[$_GET["idiot"]]["descriere"] ?></p>
				</div>
				<div class="col-md-6">
					<div id="portofolioCarousel" class="carousel slide" data-ride="carousel">
					  <div class="carousel-inner">
						  	<?php 
						  		foreach($info[$_GET["idiot"]]["imagini"] as $img): 
						  	 	if ($img=== reset($info[$_GET["idiot"]]["imagini"])) { 
						  	?>
							    <div class="carousel-item active">
							      <img class="d-block w-100" src="<?= $img ?>">
							    </div>
						    <?php
						    	 } else { 
						    ?>
						    <div class="carousel-item">
						      <img class="d-block w-100" src="<?= $img ?>">
						    </div>
						    <?php 
								} endforeach; 
						    ?>
						  </div>
					</div>
				</div>								
			</div>
		</div>
	</div>
<?php require("common/footer.php"); ?>