<template>
    <div>
        <el-form
            :label-position="labelPosition"
            label-width="auto"
            :model="formLabelAlign"
            style="max-width: 600px"
        >
            <el-form-item label="Name">
                <el-input v-model="user.account" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-input v-model="user.password" />
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import {reactive,ref} from 'vue'
const formLabelAlign = ref('right')
const user = reactive({data:{
    account:'',
    password:''
}})

</script>
<style scoped></style>