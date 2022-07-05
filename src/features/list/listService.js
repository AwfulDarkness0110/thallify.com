import axios from "axios";

const SPOTIFY_API_URL = "https://api.spotify.com/v1/me/";


const topArtists = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`,
        }
    };
    const response = await axios.get(`${SPOTIFY_API_URL}top/artists?limit=50&offset=0&time_range=${data.timeRange}`, config);

    return response.data;
}

const topTracks = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`,
        }
    };
    const response = await axios.get(`${SPOTIFY_API_URL}top/tracks?limit=50&offset=0&time_range=${data.timeRange}`, config);

    return response.data;
}

const recentlyPlayed = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const response = await axios.get(`${SPOTIFY_API_URL}player/recently-played?limit=50`, config);

    return response.data;
}



const listService = {
    topArtists,
    topTracks,
    recentlyPlayed
}

export default listService;