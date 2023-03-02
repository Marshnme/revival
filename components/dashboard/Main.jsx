import styles from '@/components/dashboard/main.module.css';
import { useSelector } from 'react-redux';

const Main = () => {
	const allEvents = useSelector((state) => {
		return state.events.allEvents;
	});

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
				{allEvents.length === 0 ? (
					<h1>NO EVENTS</h1>
				) : (
					allEvents.map((item) => {
						return <p key={item.desc}>{item.location}</p>;
					})
				)}
			</main>
		</>
	);
};

export default Main;
