import HTTP from '../HTTP';
import getCleanUrl from '../HTTP/getCleanUrl';
import changeDate from '../actions/changeDate';

const uploadDate = (date) => (dispatch) => {
    HTTP.post(getCleanUrl() + "/set-time", {date: date.getTime()})
        .then((response) => {
            dispatch(changeDate(date));
        })
        .catch((error) => {
            console.log(error);
        });
};

export default uploadDate;