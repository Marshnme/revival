import { configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import eventReducer from '@/store/stateSlices/eventSlice';

const store = configureStore({
	reducer: { events: eventReducer },
});

// export const wrapper = createWrapper(store);
export default store;
