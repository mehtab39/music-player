import axios from "axios";
import {
    DATALOADING,
    DATASUCCESS,
    ARTISTSUCCESS,
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
export const artistsuccess = data => {
    return {
        type: ARTISTSUCCESS,
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


export const fetchData = $ => async dispatch => {
    dispatch(dataloading())
    try {
        await base_url.get()
            .then(res => {
                dispatch(datasuccess(res.data));
                dispatch(getArtists(res.data))

            })
    } catch (e) {
        dispatch(dataerror())
    };
}

export const getArtists = songs => async dispatch => {
      let artists = new Set();
      songs.forEach(song=>{
           artists.add(...song.artists.split(","))
      })
      dispatch(artistsuccess(artists))
}

export const filterArtist = artist => async dispatch => {
    dispatch(dataloading())
    let songs;
    try {
        await base_url.get()
            .then(res => {
                songs =  res.data.filter((el)=> el.artists.split(",").includes(artist) )
                dispatch(datasuccess(songs))
            })
    } catch (e) {
        console.log('e:', e)
        dispatch(dataerror())
    };
   
}


