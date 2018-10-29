import HTTP from '../HTTP';
import getCleanUrl from '../HTTP/getCleanUrl';
import changeDate from '../actions/changeDate';

const uploadDate = (date) => (dispatch) => {
    const dateForServer = new Date(date.getTime() - (date.getTimezoneOffset() / 60) * 60 * 60 * 1000);

    HTTP.post(getCleanUrl() + "/set-time", {date: dateForServer.getTime()})
        .then((response) => {
            dispatch(changeDate(date));
        })
        .catch((error) => {
            console.log(error);
        });
};

export default uploadDate;