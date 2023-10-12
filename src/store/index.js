import { createStore } from 'vuex';
import demo from './modules/demo';
import radio from './modules/radio';
export const store = createStore({
modules: {
    demo,
    radio
}
});