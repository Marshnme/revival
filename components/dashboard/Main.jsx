import styles from '@/components/dashboard/main.module.css';

const Main = () => {
	return (
		<>
			<main>
				<section className={styles.searchBar}>
					<form action="">
						<input type="text" placeholder="City, State" />
						<button type="submit">Search</button>
					</form>
				</section>
				{/*if search results returns events, display events */}
				{/* if no events, display 'hottest events' text */}
			</main>
		</>
	);
};

export default Main;
