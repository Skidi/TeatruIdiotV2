<?php

require("router.php");
$info = require("info.php");
$router = router::load("routes.php");

$url = strtok($_SERVER["REQUEST_URI"], "?");

require $router->direct(trim($url, "/"));
