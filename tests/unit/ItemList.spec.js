import { createLocalVue, mount} from '@vue/test-utils';
import ItemList from "@/components/ItemList";
import Vuex from "vuex";
import store from "@/store";

describe('ItemList.vue', () => {
   const localVue = createLocalVue();
   localVue.use(Vuex);

   it('renders something', () => {
       const wrapper = mount(ItemList, {
           store,
           localVue
       });

       const target = wrapper.get('h2');

       expect(target.text()).toContain('버튼을 눌러 결과를 불러오세요');
   }) ;
});