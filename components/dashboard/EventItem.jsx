import styles from '@/components/dashboard/eventItem.module.css';

const EventItem = ({ item }) => {
	console.log(item);
	return (
		<section className={styles.eventParent}>
			<div className={styles.leftSection}>
				<p>{item.title}</p>
				<p className={styles.eventDesc}>{item.description}</p>
				<p>{item.address}</p>
				<p>Start Time: {item.startTime}</p>
				<p>End Time: {item.endTime}</p>
			</div>
			<div className={styles.rightSection}>
				{item.daysActive.map((newItem) => {
					return (
						<>
							<h2>Days Active</h2>
							<p>
								Monday:
								{newItem.monday ? (
									<span>yes</span>
								) : (
									<span>no</span>
								)}
							</p>
							<p>
								Tuesday:{' '}
								{newItem.tuesday ? (
									<span>yes</span>
								) : (
									<span>no</span>
								)}
							</p>
							<p>
								Wednesday:{' '}
								{newItem.wednesday ? (
									<span>yes</span>
								) : (
									<span>no</span>
								)}
							</p>
							<p>
								Thursday:{' '}
								{newItem.thursday ? (
									<span>yes</span>
								) : (
									<span>no</span>
								)}
							</p>
							<p>
								Friday:{' '}
								{newItem.friday ? (
									<span>yes</span>
								) : (
									<span>no</span>
								)}
							</p>
							<p>
								Saturday:{' '}
								{newItem.saturday ? (
									<span>yes</span>
								) : (
									<span>no</span>
								)}
							</p>
						</>
					);
				})}
			</div>
		</section>
	);
};

export default EventItem;
