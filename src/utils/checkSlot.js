import moment from 'moment';

export const checkSlot = (items, booking) =>{

    const startDate = moment(booking.checkin)
    const endDate = moment(booking.checkout)

    const result = items.filter(item => 
                    (item.id !== booking.id &&
                    (startDate.isSame(moment(item.checkin), 'day') || 
                    startDate.isBetween(moment(item.checkin), moment(item.checkout), 'day') ||
                    endDate.isSame(moment(item.checkout), 'day') ||
                    endDate.isBetween(moment(item.checkin), moment(item.checkout), 'day'))) ||
                    (startDate.isBefore(moment(item.checkin), 'day') && endDate.isAfter(moment(item.checkout), 'day'))
                )

    return result.length > 0
}