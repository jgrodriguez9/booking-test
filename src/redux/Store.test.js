import { add, get, remove } from './bookingSlice';
import store from './store'


test('should be initially set bookings to empty array', () => {
    const booking = store.getState().booking
    expect(booking.items).toEqual([])
})

test('add new booking to the state', () => {
    const newBook = {
        id: 1,
        destiny: 1,
        checkin: '11/18/2022',
        checkout: '11/20/2022',
        adults: 2,
        children: 0
    }
    store.dispatch(add(newBook))
    const booking = store.getState().booking
    expect(booking.items).toHaveLength(1)
})

test('delete one booking', () => {
    const newBook = {
        id: 1,
        destiny: 1,
        checkin: '11/18/2022',
        checkout: '11/20/2022',
        adults: 2,
        children: 0
    }
    store.dispatch(add(newBook))
    const newBook2 = {
        id: 2,
        destiny: 1,
        checkin: '12/18/2022',
        checkout: '12/20/2022',
        adults: 2,
        children: 0
    }
    store.dispatch(add(newBook2))
    store.dispatch(remove(1))
    const booking = store.getState().booking
    expect(booking.items).toHaveLength(1)
})

test('get one booking', () => {
    const newBook = {
        id: 1,
        destiny: 1,
        checkin: '11/18/2022',
        checkout: '11/20/2022',
        adults: 2,
        children: 0
    }
    store.dispatch(add(newBook))
    const book = get(store.getState(), 1)
    expect(book).toBeTruthy();
})