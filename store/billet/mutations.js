export default {
    setBillets(state, billets) {
        state.items.splice(0, state.items.length);
        state.items.push(...billets);
    },
}