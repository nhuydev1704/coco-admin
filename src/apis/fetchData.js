import axios from 'axios';
// const URL = 'http://localhost:5000';
const URL = 'https://cocoapp-server.herokuapp.com';
axios.defaults.withCredentials = true;

export const getDataAPI = async (url, token) => {
    const res = await axios.get(URL + '/api/' + url, {
        headers: {
            Authorization: token,
        },
    });
    return res;
};

export const postDataAPI = async (url, data, token) => {
    const res = await axios.post(URL + '/api/' + url, data, {
        headers: {
            Authorization: token,
        },
    });
    return res;
};

export const putDataAPI = async (url, data, token) => {
    const res = await axios.put(URL + '/api/' + url, data, {
        headers: {
            Authorization: token,
        },
    });
    return res;
};

export const patchDataAPI = async (url, data, token) => {
    const res = await axios.patch(URL + '/api/' + url, data, {
        headers: {
            Authorization: token,
        },
    });
    return res;
};

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(URL + '/api/' + url, {
        headers: {
            Authorization: token,
        },
    });
    return res;
};
