import request from '@/utils/request'
export default{
    namespaced: true,
    state: {
        businesses:[]
    },
    mutations: {
        resetBusinesses(state,businesses){
            state.businesses=businesses
        }
    },
    actions: {
        async findAllbusiness({commit}){
            let response=await request.get('/Business/selectAll')
            commit('resetBusinesses',response.data)
        }
    }
}