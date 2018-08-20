import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<div class={style.logo}>
		ss
		</div>
		<div class={style.hero}>
			<ul class={style.nav}>
				<li>
					<Link>HTMLMediaElement</Link>
				</li>
				<li>
					<Link>MSE</Link>
				</li>
				<li>
					<a>Github</a>
				</li>
			</ul>
			<div class={style.sys}>
				<p>OS: <span>Hello world</span> </p>
				<p>Browser: </p>
				<p>Sys: </p>
			</div>
		</div>
	</header>
);

export default Header;
