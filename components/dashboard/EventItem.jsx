const EventItem = ({ item }) => {
	console.log(item);
	return (
		<>
			<p>{item.description}</p>
		</>
	);
};

export default EventItem;
