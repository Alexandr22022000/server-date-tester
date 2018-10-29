import axios from 'axios';

import getCleanUrl from './getCleanUrl';

const HTTP = axios.create({
    baseURL: getCleanUrl()
});

export default HTTP;