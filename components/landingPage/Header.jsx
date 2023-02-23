import styles from '@/components/landingPage/header.module.css';
import closedBible from '../../public/Closed_Bible.svg';
import Image from 'next/image';

const Header = () => {
	return (
		<header className={styles.landingHeader}>
			<nav>
				<Image
					src={closedBible}
					alt="closed bible"
					width={50}
					height={40}
				/>
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
