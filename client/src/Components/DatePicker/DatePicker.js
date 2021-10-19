import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: null,
            today: new Date()
        };
    }

    handleDayClick(day, { selected }) {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    }

    render() {
        return (
            <div>
                <DayPicker
                    fromMonth={this.state.today}
                    fixedWeeks
                    selectedDays={this.state.selectedDay}
                    onDayClick={this.handleDayClick}
                    initialMonth={this.state.today}
                    disabledDays={[{daysOfWeek: [0,6]}, {before: this.state.today }]}
                    todayButton="Go to Today"
                />
            </div>
        );
    }
}

export default DatePicker