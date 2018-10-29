import React from 'react';
import MyCalendar from  './MyCalendar';

class Main extends React.Component {
    render () {
        return (
            <div>
                <MyCalendar value={this.props.localDate} onChange={(v) => this.props.uploadDate(v)}/>
                <button onClick={() => this.props.downloadDate()}>Обновить</button>

                <h3>{"Локальная дата: " + this.props.localDate}</h3>
                <h3>{"Дата сервера: " + this.props.serverDateString}</h3>
                <h3>{"Дата сервера в формате date: " + this.props.serverDate}</h3>
            </div>
        );
    }
}

export default Main;