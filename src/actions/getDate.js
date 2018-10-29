import ACTIONS from './types';

const getDate = (date, dateString) => ({
    type: ACTIONS.GET_DATE,
    date,
    dateString,
});

export default getDate;