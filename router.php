<?php



class Router {
	protected $routes = [];
	public static function load($list){
		$router = new static;
		require $list;
		return $router;
	}

	public function define($links) {
		$this->routes = $links;
	}

	public function direct($uri) {
		return $this->routes[$uri];
	}
}