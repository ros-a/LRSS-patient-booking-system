import React, {useEffect, useState} from "react";
import {Form, FormGroup} from "react-bootstrap";
import './PatientBookingPage.css'
import 'react-day-picker/lib/style.css';
import DatePicker from "../DatePicker/DatePicker";



const PatientBookingPage = (props) => {
    const [doctors, setDoctors] = useState([])
    // const [appointments, setAppointments] = useState([])
    // const [today, setToday] = useState(null)

    useEffect(() => {
        // get data from api to populate doctors and appointments
        setDoctors(['{"id":"1", "name":"Dr Test MBalls"}'])
        // setAppointments([['2021-10-23', '7']])
        // setToday(new Date().toISOString().split('T')[0])
    }, [])

    return (
        <main className="d-flex justify-content-center align-items-center text-center vh-100">
            <Form className="col-8">
                <h1>Book an Appointment</h1>
                <FormGroup className="form-floating">
                    <select className="form-control" id="drSelector">
                        <option key="0">Any Doctor</option>
                        {doctors.map(doctor =>
                            <option key={JSON.parse(doctor).id}>{JSON.parse(doctor).name}</option>
                        )}
                    </select>
                    <label htmlFor="drSelector">Select a Doctor</label>
                </FormGroup>
                <FormGroup>
                    <DatePicker

                    />
                </FormGroup>
                <FormGroup className="form-floating">
                    <select className="form-control" id="appointmentSelector">
                        <option>9:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>11:00 - 12:00</option>
                        <option>12:00 - 13:00</option>
                        <option>13:00 - 14:00</option>
                        <option>14:00 - 15:00</option>
                        <option>15:00 - 16:00</option>
                        <option>16:00 - 17:00</option>
                    </select>
                    <label htmlFor="appointmentSelector">Select an Appointment</label>
                </FormGroup>
            </Form>
        </main>
    )
}

export default PatientBookingPage