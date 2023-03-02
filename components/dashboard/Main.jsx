import styles from '@/components/dashboard/main.module.css';
import { useSelector } from 'react-redux';
import EventItem from './EventItem';

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
						// Change key to id
						return <EventItem key={item.description} item={item} />;
					})
				)}
			</main>
		</>
	);
};

export default Main;
