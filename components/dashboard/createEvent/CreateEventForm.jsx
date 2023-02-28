import styles from '@/components/dashboard/createEvent/createEventForm.module.css';
const CreateEventForm = () => {
	return (
		<form className={styles.createEventForm}>
			<div>
				<label htmlFor="">Location:</label>
				<input type="text" placeholder="City, State" />
			</div>
			<div>
				<label htmlFor="">Address:</label>
				<input type="text" placeholder="address" />
			</div>
			<div>
				<label htmlFor="startTime">Start Time:</label>
				<input id="startTime" type="time" />
				<label htmlFor="endTime">End Time:</label>
				<input id="endTime" type="time" />
			</div>
			<div>
				<p>Days event is active:</p>

				<input type="checkbox" name="monday" id="monday" />
				<label htmlFor="monday">Monday</label>
				<input type="checkbox" name="tuesday" id="tuesday" />
				<label htmlFor="tuesday">Tuesday</label>
				<input type="checkbox" name="wednesday" id="wednesday" />
				<label htmlFor="wednesday">Wednesday</label>
				<input type="checkbox" name="thursday" id="thursday" />
				<label htmlFor="thursday">Thursday</label>
				<input type="checkbox" name="friday" id="friday" />
				<label htmlFor="friday">Friday</label>
				<input type="checkbox" name="saturday" id="saturday" />
				<label htmlFor="saturday">Saturday</label>
			</div>
			<div className={styles.eventDescriptionContainer}>
				<label htmlFor="">Event Description:</label>

				<textarea
					className={styles.eventDescription}
					type="text"
					placeholder="Description"
					rows="5"
					cols="30"
				/>
			</div>

			<button className={styles.submitEventButton}>Submit Event</button>
		</form>
	);
};

export default CreateEventForm;
