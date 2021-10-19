import React from "react";
import {FormGroup} from "react-bootstrap";

const AppointmentSelector = (props) => {
    const appointmentsAvailable = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: ''
    }
    props.appointmentsTaken.forEach(takenAppointment => {
        appointmentsAvailable[takenAppointment.time_slot] = 'disabled'
    })

    return (
        <FormGroup className="form-floating">
            <select className="form-control" id="appointmentSelector">
                <option className={appointmentsAvailable[1]}>9:00 - 10:00</option>
                <option className={appointmentsAvailable[1]}>10:00 - 11:00</option>
                <option className={appointmentsAvailable[1]}>11:00 - 12:00</option>
                <option className={appointmentsAvailable[1]}>12:00 - 13:00</option>
                <option className={appointmentsAvailable[1]}>13:00 - 14:00</option>
                <option className={appointmentsAvailable[1]}>14:00 - 15:00</option>
                <option className={appointmentsAvailable[1]}>15:00 - 16:00</option>
                <option className={appointmentsAvailable[1]}>16:00 - 17:00</option>
            </select>
            <label htmlFor="appointmentSelector">Select an Appointment</label>
        </FormGroup>
    )
}

export default AppointmentSelector