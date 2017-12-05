<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" id="viewport">
	<title>HELLO</title>
	<link rel="preload" href="./assets/js/scripts.js" as="script">
	<link href="./assets/css/style.css" rel="stylesheet">
</head>
<body>
	<?php // include_once "./assets/images/svg/symbol.svg"; ?>
	<div id="wrap">
		<header id="header">
			<h1 id="logo">Your title</h1>
			<nav>
				<ul>
					<li id="gnav1" class="mh-byrow"><a href="#">01</a></li>
					<li id="gnav2" class="mh-byrow"><a href="#">02</a></li>
					<li id="gnav3" class="mh-byrow"><a href="#">03</a></li>
					<li id="gnav4" class="mh-byrow"><a href="#">04</a></li>
					<li id="gnav5" class="mh-byrow"><a href="#">05</a></li>
				</ul>
			</nav>
		</header>
		<main>
			<aside>
				<h3>Something aside</h3>
			</aside>
			<article>
				<header>
					<h2>Your article heading</h2>
					<ul class="flex">
						<li>01</li>
						<li>02<br>02<br>02</li>
						<li>03</li>
						<li>04<br>04</li>
						<li>05</li>
						<li>06</li>
					</ul>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper consequat est, eu porta velit mollis nec. Curabitur posuere enim eget turpis feugiat tempor. Etiam ullamcorper lorem dapibus velit suscipit ultrices. Proin in est sed erat facilisis pharetra. Pellentesque auctor neque quis nisl lacinia id rutrum lacus venenatis.</p>
				</header>
				<section>
					<h3>A smaller heading</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper consequat est, eu porta velit mollis nec. Curabitur posuere enim eget turpis feugiat tempor. Etiam ullamcorper lorem dapibus velit suscipit ultrices. Proin in est sed erat facilisis pharetra. Pellentesque auctor neque quis nisl lacinia id rutrum lacus venenatis.</p>
				</section>
				<section>
					<h3>A smaller heading</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper consequat est, eu porta velit mollis nec. Curabitur posuere enim eget turpis feugiat tempor. Etiam ullamcorper lorem dapibus velit suscipit ultrices. Proin in est sed erat facilisis pharetra. Pellentesque auctor neque quis nisl lacinia id rutrum lacus venenatis.</p>
				</section>
				<footer>
					<h3>About the author</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper consequat est, eu porta velit mollis nec. Curabitur posuere enim eget turpis feugiat tempor.</p>
				</footer>
			</article>
		</main>
		<footer id="footer">
			<h3>footer</h3>

			<svg class="icon">
				<use xlink:href="#icon-facebook"/>
			</svg>
			<svg class="icon">
				<use xlink:href="#icon-twitter"/>
			</svg>
			<svg class="icon">
				<use xlink:href="#icon-youtube"/>
			</svg>
			<svg class="icon">
				<use xlink:href="#icon-instagram"/>
			</svg>
			<svg class="icon">
				<use xlink:href="#icon-line"/>
			</svg>
			<svg class="icon">
				<use xlink:href="#icon-arrow-top"/>
			</svg>
			<svg class="icon">
				<use xlink:href="#icon-search"/>
			</svg>

			<ul class="sprites">
				<li>
					<i class="icon-author"></i>
				</li>
				<li>
					<i class="icon-book"></i>
				</li>
				<li>
					<i class="icon-contact"></i>
				</li>
				<li>
					<i class="icon-download"></i>
				</li>
				<li>
					<i class="icon-sample"></i>
				</li>
				<li>
					<i class="icon-top"></i>
				</li>
			</ul>
		</footer>
	</div>
	<script src="./assets/js/scripts.js"></script>
	<script>
		console.log(bowser.version);
		$('body').addClass('sekt-dev');
	</script>
	<script async src="./assets/js/page-frontpage.js"></script>
</body>
</html>
