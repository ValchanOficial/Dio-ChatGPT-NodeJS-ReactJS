import axios from 'axios';

const URL_API = 'http://localhost:3333/api/prompt';

export const makeRequest = async (prompt) => {
    try {
        const { data: response } = await axios.post(URL_API, { prompt });
        return response.data.split('\n').map(line => <p>{line}</p>);
    } catch (error) {
        console.error(error);
        return null;
    }
}