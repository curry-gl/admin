<template>
    <div class="business">
        <!-- 按钮 -->
        <el-button type="primary" size="small">添加商家</el-button>
        <!-- /按钮 -->
        <!-- 表格 -->
        <el-table
            :data="businesses"
            style="width: 100%">
            <el-table-column
            prop="id"
            label="编号"
            width="60">
            </el-table-column>
            <el-table-column
            prop="companyName"
            label="公司名称"
            width="200">
            </el-table-column>
            <el-table-column
            prop="companyScale"
            label="公司规模"
            width="160">
            </el-table-column>
            <el-table-column
            prop="linkMan"
            label="联系人"
            width="120">
            </el-table-column>
            <el-table-column
            prop="linkPhone"
            label="联系电话"
            width="120">
            </el-table-column>
            <el-table-column
            prop="businessTime"
            label="发布时间"
            width="200">
            </el-table-column>
            <el-table-column
            prop="registerCapital"
            label="注册成本"
            width="120">
            </el-table-column>
            <el-table-column
            label="操作"
            width="120">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">修改</el-button>
            </template>
            </el-table-column>
        </el-table>
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