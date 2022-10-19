import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from 'react-datepicker'
import { useSelector } from "react-redux";
import dataHotelTest from '../data/hotels.json'
import { list } from "../redux/bookingSlice";
import { checkSlot } from "../utils/checkSlot";
import { validateForm } from "../utils/validateForm";
import moment from 'moment';

export default function CommonForm({booking, setBooking, handleSubmit, action}){
    const items = useSelector(list)

    const handleOnSumbit = (e) => {
        e.preventDefault();
        const msm = validateForm(booking);
        if(msm){
            alert(msm)
        }else{
            const alreadyExistSlot = checkSlot(items, booking)
            if(alreadyExistSlot){
                alert("Date already booked")
            }else{
                handleSubmit()
            }
            
        }
    }

    return (
        <Form onSubmit={handleOnSumbit}>
            <Row>
                <Col xs="12" md="3">
                    <Form.Group>
                        <Form.Label>Destiny</Form.Label>
                        <Form.Select 
                            data-testid = "input-destiny"
                            value={booking.destiny} 
                            onChange={e=>setBooking(prev => ({
                                ...prev,
                                destiny: e.target.value
                            }))}>
                            <option value="">Select option</option>
                            {
                                dataHotelTest.map((item) => (
                                    <option value={item.id} key={item.id}>{item.title}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs="12" md="2">
                    <Form.Group>
                        <Form.Label>Check-in</Form.Label>
                        <DatePicker
                            className="form-control"
                            selected={booking.checkin}
                            onChange={(date) => {
                                if(date && booking.checkin){
                                    if(moment(date).isSameOrAfter(moment(booking.checkout), 'day')){
                                        setBooking(prev => ({
                                            ...prev,
                                            checkout: moment(date).add(1, 'days').toDate()
                                        }))
                                    }
                                }
                                setBooking(prev => ({
                                ...prev,
                                checkin: date
                                }))
                            }}
                            selectsStart
                            startDate={booking.checkin}
                            endDate={booking.checkout}
                            minDate={new Date()}
                        />
                    </Form.Group>
                </Col>
                <Col xs="12" md="2">
                    <Form.Group>
                        <Form.Label>Check-out</Form.Label>
                        <DatePicker
                            className="form-control"
                            selected={booking.checkout}
                            onChange={(date) => setBooking(prev => ({
                                ...prev,
                                checkout: date
                            }))}
                            selectsEnd
                            startDate={booking.checkin}
                            endDate={booking.checkout}
                            minDate={moment(booking.checkin).add(1, 'days').toDate()}
                        />
                    </Form.Group>
                </Col>
                <Col xs="12" md="2">
                    <Form.Group>
                        <Form.Label>Adults</Form.Label>
                        <Form.Control                         
                            data-testid = "input-adults"
                            type="number" 
                            min={1}
                            value={booking.adults}
                            onChange={e=>setBooking(prev=>({
                                ...prev,
                                adults:e.target.value
                            }))}
                        />
                    </Form.Group>
                </Col>
                <Col xs="12" md="2">
                    <Form.Group>
                        <Form.Label>Children</Form.Label>
                        <Form.Control 
                            data-testid = "input-children"
                            type="number"
                            min={0}
                            value={booking.children}
                            onChange={e=>setBooking(prev=>({
                                ...prev,
                                children:e.target.value
                            }))}
                        />
                    </Form.Group>
                </Col>
                <Col xs="12" md="1" className="d-flex flex-column mt-3 mt-md-0">                           
                    <Button type="submit" variant="primary" className="mt-auto">{action === 'create' ? 'Create' : 'Update'}</Button>
                </Col>
            </Row>
        </Form>
    )
}