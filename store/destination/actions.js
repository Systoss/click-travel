import service from './service'

export default {
    fetchDreamDestination(state) {
        service.getDreamDestination()
            .then((data) => {
                state.commit('setDreamDestination', data);
            })
            .catch(() => {
                state.commit('setDreamDestination', []);
            });
    },
}