import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allEvents: [],
	userEvents: [],
	savedEvents: [],
};

const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		getAllEvents(state, action) {
			// fetch all events from database
		},
		getUserEvents(state, action) {
			// fetch logged in users specific events from database
		},

		addEvent(state, action) {
			// add to current users events and to all events
			state.allEvents.push(action.payload);
			state.userEvents.push(action.payload);
		},
		saveEvent(state, action) {
			// add event to saved events
			state.savedEvents.push(action.payload);
		},
		deteteEvent(state, action) {
			// detete from current users events and from all events
		},
	},
});

export const eventActions = eventSlice.actions;

// console log eventSlice to learn more
export default eventSlice.reducer;
