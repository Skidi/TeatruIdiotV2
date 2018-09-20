<!DOCTYPE html>
<html>
<head>
	<title><?php if(isset($_GET["idiot"])) {
		echo $info[$_GET["idiot"]]["nume"];
	}
	else {
	 echo "Trupa de Teatru IDIOT Iasi"; }; ?></title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv=”Content-type” content=”text/html;charset=UTF-8″ />
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="shortcut icon" href="media/icon.png">
</head>
<body>

<header class="header">
	<div class="header-inner">
		<div class="container">
			<div class="row">
				<a class="logo" href="/">
					<img class="logoVis" src="media/logo.png">
					<img class="logoInv" src="media/logo2.png">
				</a>
				<nav>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a target="_blank" href="https://www.facebook.com/PubQuizbyIDIOT/">PubQuiz</a></li>
						<li><a target="_blank" href="https://www.facebook.com/Trupa.de.Teatru.IDIOT/"><i class="fa fa-facebook-square"></i></a></li>
						<li><a target="_blank" href="https://www.youtube.com/user/trupaIDIOT"><i class="fa fa-youtube-square"></i></a></li>
						<li><a target="_blank" href="https://www.instagram.com/trupa_idiot/"><i class="fa fa-instagram"></i></a></li>
					</ul>
				</nav>
			</div>
		</div>
</div>
</header>