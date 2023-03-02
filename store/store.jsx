import { configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import eventReducer from '@/store/stateSlices/eventSlice';

const store = configureStore({
	reducer: { event: eventReducer },
});

// export const wrapper = createWrapper(store);
export default store;
