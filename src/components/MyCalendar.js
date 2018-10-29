import React from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import '../styles/MyCalendar.css';

class MyCalendar extends React.Component {
    render () {
        let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
            .test(navigator.userAgent);

        isMobile = window.document.body.clientWidth < 640 ? true : isMobile;

        return (
            <div className="calendar">
                <div className={"calendar__background " + (this.state.calendarIsOpen ? '' : ' calendar__background_hidden')} onClick={this.onClickCalendar.bind(this)}/>
                <div className={"calendar__hard_container " + (this.props.error ? "calendar_error" : "")} style={isMobile ? {width: "120px"} : {}}>
                    <input
                        className="calendar__input" style={isMobile ? {fontSize: "13px", right: "8px", width: "90px"} : {}}
                        onChange={this.onChangeInput.bind(this)}
                        value={this.state.dateLine}
                    />
                    <div className="calendar__key" onClick={this.onClickCalendar.bind(this)}>
                        <div className="calendar__key_img"/>
                    </div>
                </div>
                <div className={'calendar__soft_container ' + (this.state.calendarIsOpen ? '' : ' calendar__soft_container_hidden')}>
                    <Calendar
                        onChange={this.changCalendar.bind(this)}
                        value={this.props.value}
                    />
                </div>
            </div>
        );
    }

    static normalDate (date) {
        if (date >= 10) return date;
        return '0' + date;
    };

    componentWillUpdate(nextProps, nextState) {
        if (this.props.value !== nextProps.value && this.state.dateLine === nextState.dateLine) {
            let date = nextProps.value;
            date = `${MyCalendar.normalDate(date.getDate())}.${MyCalendar.normalDate(date.getMonth() + 1)}.${MyCalendar.normalDate(date.getFullYear())}`;
            this.setState({
                dateLine: date
            });
        }
    }

    componentWillMount () {
        let date = this.props.value ? this.props.value : new Date();
        this.setState({
            calendarIsOpen: false,
            dateLine: `${MyCalendar.normalDate(date.getDate())}.${MyCalendar.normalDate(date.getMonth() + 1)}.${MyCalendar.normalDate(date.getFullYear())}`
        });
    }

    onClickCalendar () {
        this.setState({
            calendarIsOpen: !this.state.calendarIsOpen
        });
    }

    onChangeInput (event) {
        try {
            let date = moment(event.target.value,'DD.MM.YYYY');
            date = date.toDate();
            if (date == 'Invalid Date') throw new Error();
            this.props.onChange(date);
        }
        catch (e) {}

        this.setState({
            dateLine: event.target.value
        });
    }

    changCalendar (date) {
        this.setState({
            validLine: true
        });
        this.props.onChange(date);
    }
}

export default MyCalendar;