import styles from '@/components/dashboard/createEvent/CreateEventForm.module.css';
const CreateEventForm = () => {
	return (
		<>
			<form>
				<label htmlFor="">Location</label>
				<input type="text" placeholder="City, State" />
				<label htmlFor="">address</label>
				<input type="text" placeholder="address" />
				<label htmlFor="startTime">Start Time</label>
				<input id="startTime" type="time" />
				<label htmlFor="endTime">End Time</label>
				<input id="endTime" type="time" />
				<p>Days event is active:</p>

				<input type="checkbox" name="monday" id="monday" />
				<label htmlFor="monday">monday</label>
				<input type="checkbox" name="tuesday" id="tuesday" />
				<label htmlFor="tuesday">tuesday</label>
				<input type="checkbox" name="wednesday" id="wednesday" />
				<label htmlFor="wednesday">wednesday</label>
				<input type="checkbox" name="thursday" id="thursday" />
				<label htmlFor="thursday">thursday</label>
				<input type="checkbox" name="friday" id="friday" />
				<label htmlFor="friday">friday</label>
				<input type="checkbox" name="saturday" id="saturday" />
				<label htmlFor="saturday">saturday</label>

				<label htmlFor="">event description</label>

				<textarea
					className={styles.eventDescription}
					type="text"
					placeholder="description"
				/>
			</form>
		</>
	);
};

export default CreateEventForm;
