import Header from '@/components/dashboard/Header';
import CreateEventForm from '@/components/dashboard/createEvent/CreateEventForm';
import styles from '@/styles/createEvent.module.css';

const createEvent = () => {
	return (
		<>
			<Header />
			<section className={styles.createEventForm}>
				<CreateEventForm />
			</section>
		</>
	);
};

export default createEvent;
