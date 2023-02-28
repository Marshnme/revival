import styles from '@/components/dashboard/header.module.css';
import closedBible from '../../public/Closed_Bible.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();
	const currentPath = router.asPath;
	return (
		<>
			<header className={styles.dashHeader}>
				<nav>
					<Image
						src={closedBible}
						alt="closed bible"
						width={50}
						height={40}
					/>
					<ul className={styles.listParent}>
						<li
							className={
								currentPath === '/auth/dashboard'
									? `${styles.linkActive}`
									: null
							}
						>
							<Link href="/auth/dashboard">Search</Link>
						</li>
						<li
							className={
								currentPath === '/auth/savedEvents'
									? `${styles.linkActive}`
									: null
							}
						>
							<Link href="/auth/savedEvents">Saved Events</Link>
						</li>
						<li
							className={
								currentPath === '/auth/createEvent'
									? `${styles.linkActive}`
									: null
							}
						>
							<Link href="/auth/createEvent">Create Event</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
