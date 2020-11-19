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
    setBillet(state, from) {
        state.commit('setBillet', state.state.items.find((item) => item.from === from));
    },
}