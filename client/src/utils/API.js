import axios from "axios";

export default {
    getScores: () => axios.get('/api/scores'),
    postScore: body => axios.post('/api/scores', body)
}