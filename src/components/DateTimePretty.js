import moment from 'moment';

function DateTimePretty(Component, date) {
    return function () {
        const dateFromNow = moment(date).fromNow();
        return <Component date={dateFromNow} />;
    };
}

export default DateTimePretty;