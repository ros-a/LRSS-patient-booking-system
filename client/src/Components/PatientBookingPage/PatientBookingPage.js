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
    const [appointmentSelected, setAppointmentSelected] = useState(null)

    useEffect(() => {
       //
    }, [appointmentSelected])

    return (
        <main className="d-flex justify-content-center align-items-center text-center vh-100">
            <Form className="col-8">
                <h1>Book an Appointment</h1>
                <DoctorSelector setDoctorSelected={setDoctorSelected}/>
                <DatePicker setDateSelected={setDateSelected}/>
                <AppointmentSelector
                    doctorSelected={doctorSelected}
                    dateSelected={dateSelected}
                    setAppointmentSelected={setAppointmentSelected}/>
            </Form>
        </main>
    )
}

export default PatientBookingPage