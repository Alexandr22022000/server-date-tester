import ACTIONS from './types';

const changeDate = (date) => ({
    type: ACTIONS.CHANGE_DATE,
    date,
});

export default changeDate;