import axios from "axios";
import { SAVE_URL_LIST } from "../../actionTypes";

const saveURLToStore = (data) => {
    return {
        type: SAVE_URL_LIST,
        values: {
            data
        }
    }
};

export const getAllURLs = () => {
    return dispatch => {
        axios({
            url: "https://617394dc110a740017223071.mockapi.io/urls",
            method: "GET",
        }).then(response => {
            dispatch(saveURLToStore(response.data));
        });
    }
};