import service from './service'

export default {
    fetchBillets(state, code) {
        service.getBillets(code)
            .then((data) => {
                state.commit('setBillets', data);
            })
            .catch(() => {
                state.commit('setBillets', []);
            });
    },
}