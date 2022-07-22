import axios from 'axios';

const TYPES = Object.freeze({
    POST: {name: 'POST',},
    COMMENT: {name: 'COMMENT',},
    ALBUM: {name: 'ALBUM',},
    PHOTO: {name: 'PHOTO',},
    TODO: {name: 'TODO',},
    USER: {name: 'USER',},
});

export default {
    namespaced: true,
    state: {
        navs: [
            TYPES.POST.name,
            TYPES.COMMENT.name,
            TYPES.ALBUM.name,
            TYPES.PHOTO.name,
            TYPES.TODO.name,
            TYPES.USER.name,
        ],
        totalCount: 0,
        items: [],
        type: '',
        isLoading: false,
        columns: [],
        page: 1,
        EACH_PER_PAGE: 5,
    },
    getters: {
        resultCount: state => {
            return state.items.length;
        }
    },
    mutations: {
        updateItems(state, items) {
            state.items = items;
        },
        updateEachPerPage(state, value) {
            state.EACH_PER_PAGE = value;
        },
        updateType(state, type) {
            state.type = type;
        },
        updateColumns(state, columns) {
            state.columns = columns;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        updateTotalCount(state, totalCount) {
            state.totalCount = totalCount;
        },
        sortItemsByColumnAsc(state, col) {
            state.items =
                state.items.sort((a, b) =>
                    a[col] > b[col] ? 1 : a[col] < b[col] ? -1 : 0);
        },
        sortItemsByColumnDesc(state, col) {
            state.items =
                state.items.sort((a, b) =>
                    a[col] < b[col] ? 1 : a[col] > b[col] ? -1 : 0);
        },
        updatePage(state, page) {
            state.page = page;
        },
    },
    actions: {
        fetchList({commit}, {type}) {
            commit('setLoading', true);
            commit('updateType', type);
            commit('updatePage', 1);
            axios.get('https://jsonplaceholder.typicode.com/' + type.toLowerCase() + 's')
                .then(res => {
                    commit('updateTotalCount', res.data.length);
                    commit('updateColumns', Object.keys(res.data[0]));
                    const items = res.data;
                    commit('updateItems', items);
                    commit('setLoading', false);
                });
        }
    },
}