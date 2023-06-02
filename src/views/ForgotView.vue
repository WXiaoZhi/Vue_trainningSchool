<template>
    <div class="reset-password">
        <div class="reset-password-bk">
        <div class="title">忘记密码</div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="form">
            <el-form-item label="旧密码"  prop="oldPassword">
                <el-input type="password" v-model="form.oldPassword" placeholder="请输入旧密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input type="password" v-model="form.newPassword" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input type="password" v-model="form.confirmPassword" placeholder="请再次输入新密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">确认更改</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const validateOldPassword = (rule, value, callback) => {
            if (value !== '123456') {
                callback(new Error('请输入正确的旧密码'))
            } else {
                callback()
            }
        }
        return {
            form: {
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            },
            rules: {
                oldPassword: [
                    {required: true, message: '请输入旧密码', trigger: 'blur'},
                    {validator: validateOldPassword, trigger: 'blur'}
                ],
                newPassword: [
                    {required: true, message: '请输入新密码', trigger: 'blur'},
                    {min: 6, max: 15, message: '密码长度需要在 6 到 15 个字符之间', trigger: 'blur'},
                    {
                        validator: (rule, value, callback) => {
                            if (value === this.form.oldPassword) {
                                callback(new Error('新密码不能与旧密码相同'))
                            } else {
                                callback()
                            }
                        }
                    }
                ],
                confirmPassword: [
                    {required: true, message: '请再次输入新密码', trigger: 'blur'},
                    {
                        validator: (rule, value, callback) => {
                            if (value !== this.form.newPassword) {
                                callback(new Error('两次输入密码不一致'))
                            } else {
                                callback()
                            }
                        }
                    }
                ]
            },
            errorMessage: ''
        }
    },
    methods: {
        submitForm() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    // 在这里添加修改密码的逻辑
                    console.log('密码修改成功')
                    this.$router.push('/login')
                } else {
                    console.log('表单验证失败')
                    this.errorMessage = '请填写正确的信息'
                }
            })
        },
        resetForm() {
            this.$refs.form.resetFields()
        }
    }
}
</script>

<style>
.reset-password {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

}
.reset-password ::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    background: url("../assets/backg2.jpg") no-repeat;
    background-size: 100% auto;
}
.reset-password-bk{
    background-color: rgba(255, 255, 255);
    width: 470px;
    border-radius: 10px;
}
.title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    color: #336699;
}

/*.bk img {*/
/*    width: 300px;*/
/*    display: flex;*/
/*    justify-content: center;*/
/*}*/

.form {
    width: 400px;
}

.error-message {
    color: red;
    margin-top: 20px;
    font-size: 14px;
}
</style>