<template>
    <div class="business">
        <!-- 按钮 -->
        {{businesses}}
        <!-- /按钮 -->
        <!-- 表格 -->
        <!-- /表格 -->
        <!-- 分页 -->
        <!-- /分页 -->
        <!-- 模态框 -->
        <!-- /模态框 -->
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    created(){
        this.findAllbusiness()
    },
    computed:{
        ...mapState('business',['businesses'])
    },
    methods:{
        ...mapActions('business',['findAllbusiness'])
    }
}
</script>