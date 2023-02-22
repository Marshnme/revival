import styles from '@/components/landingPage/header.module.css';

const Header = () => {
	return (
		<header className={styles.landingHeader}>
			<nav>
				<p>LOGO</p>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contacts</li>
					<li>Revivals</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
