export default {
    setDreamDestination(state, destinations) {
        state.items.splice(0, state.items.length);
        state.items.push(...destinations);
    },
}