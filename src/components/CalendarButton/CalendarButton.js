import React, { Component, PropTypes } from 'react';
import Moment from 'moment';
import classnames from 'classnames';
import './CalendarButton.scss';

class CalendarButton extends Component {
    render() {
        const {active, onClick, className, children} = this.props;
        const {header, text} = this.getData();

        return (
            <div {...this.props}
                 onClick={onClick}
                 className={classnames(className, 'hs-calendar-button', {'hs-calendar-button--active': active})}>
                <div className='hs-calendar-button__header'>{header.toUpperCase()}</div>
                <div className='hs-calendar-button__text'>{text}</div>
                {children}
            </div>
        );
    }

    getData() {
        let {header = '', text, date, dateTextFormat, dateHeaderFormat} = this.props;
        let result;

        if (date) {
            date = new Moment(date);
            result = {
                header: date.format(dateHeaderFormat),
                text: date.format(dateTextFormat)
            };
        } else {
            result = {header, text};
        }

        return result;
    }
}

CalendarButton.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    active: PropTypes.bool,
    className: PropTypes.string,
    date: PropTypes.object,
    dateTextFormat: PropTypes.string,
    dateHeaderFormat: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};

CalendarButton.defaultProps = {
    active: false,
    dateTextFormat: 'D',
    dateHeaderFormat: 'MMM'
};

export default CalendarButton;