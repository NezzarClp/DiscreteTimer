export default {
    removeOption(id) {
        return {
            type: 'REMOVE_OPTION',
            payload: {
                id,
            },
        };
    }
}
