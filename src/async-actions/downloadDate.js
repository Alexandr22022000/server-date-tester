import HTTP from '../HTTP';
import getCleanUrl from '../HTTP/getCleanUrl';
import getDate from '../actions/getDate';

const downloadDate = () => (dispatch) => {
    HTTP.get(getCleanUrl() + "/get-time")
        .then((response) => {
            console.log(response);
            dispatch(getDate(new Date(response.data.date), response.data.dateString));
        })
        .catch((error) => {
            console.log(error);
        });
};

export default downloadDate;