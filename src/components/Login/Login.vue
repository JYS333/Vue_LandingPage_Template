<template>
    <div>
        <el-dialog
        title="Welcome back!"
        :visible="showLoginDialog"
        :show-close="false"
        width="40%">
        <el-form :model="LoginForm" status-icon :rules="rules" ref="LoginForm" label-width="130px" class="demo-LoginForm">
        <el-form-item label="Username" prop="username">
            <el-input type="password" v-model="LoginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="LoginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="Confirm Password" prop="checkPass">
            <el-input type="password" v-model="LoginForm.checkPass" autocomplete="off"></el-input>
        </el-form-item> -->
        </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">Cancel</el-button>
                <el-button type="primary" @click="confirm('LoginForm')">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props:{
        showLoginDialog: {
            default: false,
            type: Boolean
        },
    },
    watch:{
        showLoginDialog(visible){ // clear form data
            if(!visible){
                this.LoginForm = {
                    username: '',
                    pass: '',
                }
            }
        }
    }, 
    data(){
        // var validatePass2 = (rule, value, callback) => {
        //     if (value === '') {
        //         callback(new Error('input your password again'));
        //     } else if (value !== this.LoginForm.pass) {
        //         callback(new Error('两次输入密码不一致!'));
        //     } else {
        //         callback();
        //     }
        // }
        return {
            LoginForm: {
                username: '',
                pass: '',
                // checkPass: '',
            },
            rules: {
                pass: [
                    { required: true, message: 'Input your password', trigger: 'blur' }
                ],
                // checkPass: [
                //     { validator: validatePass2, trigger: 'blur' }
                // ],
            }
        }
    },
    methods:{
        confirm(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
                this.$emit('confirm', this.LoginForm);
            } else {
                // console.log('error submit!!');
                return false;
            }
            });
            
        },
        cancel(){
            this.$emit('cancel');
        }
    }
}
</script>

<style lang="less" scoped>

</style>