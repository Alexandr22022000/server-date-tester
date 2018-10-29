import HTTP from '../HTTP';
import getCleanUrl from '../HTTP/getCleanUrl';
import getDate from '../actions/getDate';

const downloadDate = () => (dispatch) => {
    HTTP.get(getCleanUrl() + "/get-time")
        .then((response) => {
            const dateForClient = new Date(response.data.date + (new Date(response.data.date).getTimezoneOffset() / 60) * 60 * 60 * 1000);

            dispatch(getDate(dateForClient, response.data.dateString, response.data.server));
        })
        .catch((error) => {
            console.log(error);
        });
};

export default downloadDate;