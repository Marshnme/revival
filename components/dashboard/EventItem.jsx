const EventItem = ({ item }) => {
	console.log(item);
	return (
		<section>
			<p>{item.description}</p>
			<p>{item.address}</p>
			<p>Start Time: {item.startTime}</p>
			<p>End Time: {item.endTime}</p>
			<section>
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
			</section>
		</section>
	);
};

export default EventItem;
