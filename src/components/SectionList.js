import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { list, remove } from '../redux/bookingSlice'
import { FaEdit, FaTrash } from "react-icons/fa";
import dataDestinyJson from '../data/hotels.json'

export default function SectionList(){
    const items = useSelector(list)
    const dispatch = useDispatch();

    const onHandleDelete = (id) => {
        dispatch(remove(id))
    }

    return(
        <Card className="shadow mt-5">
            <Card.Header>Booking List Sorted</Card.Header>
            <Card.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Destiny</th>
                            <th>Check-in / Check-out</th>
                            <th>Adults</th>
                            <th>Children</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.length === 0 ?
                            <tr>
                                <td colSpan={5}>
                                    No booking available
                                </td>
                            </tr> :
                            items.map((item, index)=>(
                                <tr key={index}>
                                    <td>{dataDestinyJson.find(it => it.id === parseInt(item.destiny)).title}</td>
                                    <td>{item.checkin} - {item.checkout}</td>
                                    <td>{item.adults}</td>
                                    <td>{item.children}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-primary" to={`/edit/${item.id}`}><FaEdit /></Link>{' '}
                                        <Button variant="danger" size="sm" onClick={e=>onHandleDelete(item.id)}><FaTrash /></Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}