import styles from '@/components/landingPage/header.module.css';
import closedBible from '../../public/Closed_Bible.svg';
import Image from 'next/image';
import Link from 'next/Link';
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();
	const currentRoute = router.pathname;
	const currentPath = router.asPath;

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
					<li
						className={
							currentPath === '/' ? `${styles.linkActive}` : null
						}
					>
						<Link href="/">Home</Link>
					</li>
					<li
						className={
							currentPath === '/about'
								? `${styles.linkActive}`
								: null
						}
					>
						<Link href="/about">About</Link>
					</li>
					<li
						className={
							currentPath === '/#contact'
								? `${styles.linkActive}`
								: null
						}
					>
						<Link href="/#contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
