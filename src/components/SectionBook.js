import { useState } from "react";
import { Card} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { add } from '../redux/bookingSlice'
import CommonForm from "./CommonForm";

export default function SectionBook(){
    const dispatch = useDispatch();
    const [booking, setBooking] = useState({
        destiny: '',
        checkin: new Date(),
        checkout: moment(new Date()).add(1, 'days').toDate(),
        adults: 2,
        children: 0
    })

    const createBooking = () => {
        const newBooking = Object.assign({}, booking)
        newBooking.id = uuidv4()
        newBooking.checkin = moment(booking.checkin).format("MM/DD/YYYY")
        newBooking.checkout = moment(booking.checkout).format("MM/DD/YYYY")
        dispatch(add(newBooking))        
    }

    return(
        <Card className="shadow">
            <Card.Body className="my-4">
                <CommonForm 
                    booking={booking}
                    setBooking={setBooking}
                    handleSubmit={createBooking}
                    action="create"
                />
            </Card.Body>
        </Card>
    )
}