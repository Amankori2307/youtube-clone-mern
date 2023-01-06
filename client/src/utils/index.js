import axios from "axios";
const BASE_URL = 'http://localhost:5000'
const PAGE_SIZE = 10;

export const fetchVideos = (page = 1) => {
    return axios.get(`${BASE_URL}/videos?pageSize=${PAGE_SIZE}&page=${page}`)
}