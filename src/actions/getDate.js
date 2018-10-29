import ACTIONS from './types';

const getDate = (date, dateString, server) => ({
    type: ACTIONS.GET_DATE,
    date,
    dateString,
    server
});

export default getDate;