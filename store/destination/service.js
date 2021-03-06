import api from '../../service/api.js';

export default {
    getDreamDestination() {
        return new Promise((resolve, reject) => {
            api.get('/destinations', { params: { offset: 0, limit: 100, skip: 0, where: { isDreamDestination: true } } })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => console.log(error))
        })
    },
}