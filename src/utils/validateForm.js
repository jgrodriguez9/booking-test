import moment from 'moment';

export const validateForm = (booking) => {
    if(booking.destiny === ""){
        return "Destiny field is required"
    }else if(!booking.checkin){
        return "Checkin field is required"
    }else if(!booking.checkout){
        return "Checkout field is required"
    }else if(moment(booking.checkin).isSameOrAfter(moment(booking.checkout), 'day')){
        return "Checkin must be greather than Checkout"
    }else if(booking.adults <= 0 ){
        return "Adults field must be greater than 0"
    }else if(booking.children < 0 ){
        return "Children field must be greater than or equal 0"
    }
    else{
        return null;
    }
}