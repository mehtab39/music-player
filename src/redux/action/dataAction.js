import axios from "axios";
import {
    DATALOADING,
    DATASUCCESS,
    DATAERROR
} from "../actionTypes";

const baseURL = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json"
const base_url = axios.create({
    baseURL: baseURL
});

export const datasuccess = data => {
    return {
        type: DATASUCCESS,
        payload: data
    }
}
export const dataerror = $ => {
    return {
        type: DATAERROR,
        
    }
}

export const dataloading = $ => {
    return {
        type: DATALOADING,
    }
}


export const fetchData = payload => async dispatch => {
    dispatch(dataloading())
    try {
        await base_url.get()
            .then(res => {
                console.log('res.data:', res.data)
                dispatch(datasuccess(res.data))
            })
    } catch (e) {
        dispatch(dataerror())
    };
}
