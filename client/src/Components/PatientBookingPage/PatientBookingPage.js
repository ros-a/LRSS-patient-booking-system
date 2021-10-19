import React, {useEffect, useState} from "react";
import {Form, FormGroup} from "react-bootstrap";
import './PatientBookingPage.css'
import 'react-day-picker/lib/style.css';
import DatePicker from "../DatePicker/DatePicker";
import AppointmentSelector from "../AppointmentSelector/AppointmentSelector";
import DoctorSelector from "../DoctorSelector/DoctorSelector";



const PatientBookingPage = (props) => {
    const [doctorSelected, setDoctorSelected] = useState(null)
    const [dateSelected, setDateSelected] = useState(null)
    const [appointmentsTaken, setAppointmentsTaken] = useState([])
    const [appointmentSelected, setAppointmentSelected] = useState(null)

    useEffect(() => {
        setAppointmentsTaken(JSON.parse('[{"time_slot":"1"}, {"time_slot":"6"}]'))
    }, [dateSelected])

    useEffect(() => {
        console.log(doctorSelected)
        console.log(dateSelected)
    }, [doctorSelected, dateSelected])


    return (
        <main className="d-flex justify-content-center align-items-center text-center vh-100">
            <Form className="col-8">
                <h1>Book an Appointment</h1>
                <DoctorSelector setDoctorSelected={setDoctorSelected}/>
                <DatePicker setDateSelected={setDateSelected}/>
                {/*<AppointmentSelector*/}
                {/*    appointmentsTaken={appointmentsTaken}*/}
                {/*    setAppointmentSelected={setAppointmentSelected}/>*/}
            </Form>
        </main>
    )
}

export default PatientBookingPage