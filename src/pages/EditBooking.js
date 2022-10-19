import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import CommonForm from "../components/CommonForm";
import { get, update } from "../redux/bookingSlice";
import moment from 'moment'

export default function EditBooking(){
    const { id } = useParams();
    const navigate = useNavigate();
    const book = useSelector((state) => get(state, id))
    const dispatch = useDispatch();
    const [booking, setBooking] = useState(null)


    useEffect(() => {
        const bookObj = Object.assign({}, book);
        bookObj.checkin = moment(book.checkin, "MM/DD/YYYY").toDate()
        bookObj.checkout = moment(book.checkout, "MM/DD/YYYY").toDate()
        setBooking(bookObj)
    }, [book])

    const updateBooking = () => {
        const updateBooking = Object.assign({}, booking)
        updateBooking.checkin = moment(booking.checkin).format("MM/DD/YYYY")
        updateBooking.checkout = moment(booking.checkout).format("MM/DD/YYYY")
        dispatch(update(updateBooking));
        navigate("/");
    }

    return (
        <Card className="shadow-sm">
            <Card.Header>
                <div className="d-flex justify-content-between">
                    <div>Booking ID: {id}</div>
                    <div>
                        <Button variant="link" size="sm" onClick={() => navigate(-1)}>go Back</Button>
                    </div>
                </div>
                
            </Card.Header>
            <Card.Body>
                {
                    !booking ? 'Booking not found' :
                    <CommonForm 
                        booking={booking}
                        setBooking={setBooking}
                        handleSubmit={updateBooking}
                        action="update"
                    />
                }
            </Card.Body>
        </Card>
    )
}