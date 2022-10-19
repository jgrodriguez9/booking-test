import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';

export const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        items: []
    },
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload);
        },
        update: (state, action) => {
            const index = state.items.findIndex(item=>item.id===action.payload.id);
            state.items[index] = action.payload;            
        },
        remove: (state, action) => {
            const newBookings = state.items.filter(item=>item.id!==action.payload);
            state.items = newBookings;
        }
    }
})


export const list = (state) => [...state.booking.items].sort((a,b) => moment(a.checkin).diff(b.checkin))

export const get = (state, id) => state.booking.items.find(item => item.id === id)

export const { add, update, remove } = bookingSlice.actions;

export default bookingSlice.reducer