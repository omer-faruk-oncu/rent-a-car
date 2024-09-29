import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddModal({ show, setShow, car }) {

  const [customerName, setCustomerName] = useState('')
  const [date, setDate] = useState('')
  //const [show, setShow] = useState(false);

  // const addCar = (new) => {


  // }

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  console.log(date)

  const handleSubmit = (e) => {

    e.preventDefault()


  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for {car} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Customer Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                id="name"
                value={customerName}
                onChange={(e)=>setCustomerName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reservation Date:</Form.Label>
              <Form.Control 
              type="datetime-local" 
              id="date"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              />
            </Form.Group>

            <div className="text-center">
              <Button className="me-2" variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
