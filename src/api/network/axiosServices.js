import axios from "axios";
import baseUrl from './baseUrl'


export function get(params) {

    console.log('get param url ', params[0])
    return axios({
        method: 'get',
        url: `${baseUrl.BASE_URL}${params[0] ? params[0] : ''}`,
        params: params[1] ? params[1] : '',
        headers: params[2] ? params[2] : {'Content-Type': 'application/json'}
    }).then(response => response.data)
}


export async function post(params) {
    try {
        const result = await axios({
            method: 'post',
            url: `${baseUrl.BASE_URL}${params[0]}`,
            data: params[1],
            headers: params[2] ? params[2] : {'Content-Type': 'application/json'}
        })
        return result.data;

    } catch (err) {

        throw err;
    }
}

export async function postFile(params) {
    try {
        const result = await axios({
            method: 'post',
            url: `${baseUrl.BASE_URL}${params[0]}`,
            data: params[1],
            headers: {"Content-Type": "multipart/form-data"}
        })

        return result.data;

    } catch (err) {
        throw err;
    }
}
