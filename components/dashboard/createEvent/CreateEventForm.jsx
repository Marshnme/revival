import styles from '@/components/dashboard/createEvent/createEventForm.module.css';
import { useRef } from 'react';
const CreateEventForm = () => {
	const locationRef = useRef();
	const addressRef = useRef();
	const startTimeRef = useRef();
	const endTimeRef = useRef();
	const monRef = useRef();
	const tueRef = useRef();
	const wedRef = useRef();
	const thurRef = useRef();
	const friRef = useRef();
	const satRef = useRef();
	const descRef = useRef();

	function submitHandler(event) {
		event.preventDefault();
		console.log(locationRef.current.value);
		console.log(startTimeRef.current.value);
		console.log(endTimeRef.current.value);
		console.log(monRef.current.checked);
		console.log(descRef.current.value);
	}

	return (
		<form onSubmit={submitHandler} className={styles.createEventForm}>
			<div>
				<label htmlFor="">Location:</label>
				<input
					required
					type="text"
					placeholder="City, State"
					ref={locationRef}
				/>
			</div>
			<div>
				<label htmlFor="">Address:</label>
				<input
					required
					type="text"
					placeholder="Address"
					ref={addressRef}
				/>
			</div>
			<div>
				<label htmlFor="startTime">Start Time:</label>
				<input required id="startTime" type="time" ref={startTimeRef} />
				<label htmlFor="endTime">End Time:</label>
				<input required id="endTime" type="time" ref={endTimeRef} />
			</div>
			<div>
				<p>Days event is active:</p>

				<input type="checkbox" name="monday" id="monday" ref={monRef} />
				<label htmlFor="monday">Monday</label>
				<input
					type="checkbox"
					name="tuesday"
					id="tuesday"
					ref={tueRef}
				/>
				<label htmlFor="tuesday">Tuesday</label>
				<input
					type="checkbox"
					name="wednesday"
					id="wednesday"
					ref={wedRef}
				/>
				<label htmlFor="wednesday">Wednesday</label>
				<input
					type="checkbox"
					name="thursday"
					id="thursday"
					ref={thurRef}
				/>
				<label htmlFor="thursday">Thursday</label>
				<input type="checkbox" name="friday" id="friday" ref={friRef} />
				<label htmlFor="friday">Friday</label>
				<input
					type="checkbox"
					name="saturday"
					id="saturday"
					ref={satRef}
				/>
				<label htmlFor="saturday">Saturday</label>
			</div>
			<div className={styles.eventDescriptionContainer}>
				<label htmlFor="">Event Description:</label>

				<textarea
					required
					className={styles.eventDescription}
					type="text"
					placeholder="Description"
					rows="5"
					cols="30"
					ref={descRef}
				/>
			</div>

			<button className={styles.submitEventButton}>Submit Event</button>
		</form>
	);
};

export default CreateEventForm;
