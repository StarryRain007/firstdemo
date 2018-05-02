import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    // 1. state
    state:{
        city:"������"
    },

    // // 2. getters
    getters:{
        // �����б�stateָ����state����
        getCityFn(state){
            return state.city;
        }
    },
    // 3. actions
    // ͨ����api�ӿڴ򽻵�
    actions:{
        // ���ó�����Ϣ
        // �����б�{commit, state}
        // stateָ����state����
        // commit����mutations�ķ��� 
        // name���ǵ��ô˷���ʱҪ���Ĳ���
        setCityName({commit,state}, name){
            // ����̨�򽻵�
            // ����mutaions����ķ���
            commit("setCity", name);
        }
    },
    // 4. mutations
    mutations:{
        // stateָ����state������
        // name���ݹ���������
        setCity(state, name){
            state.city = name;//���������ø�state��city
        }
    }
});

export default store;