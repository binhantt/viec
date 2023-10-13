import { createStore } from 'vuex';
import demo from './modules/demo';
export const store = createStore({
modules: {
    demo,
}
});