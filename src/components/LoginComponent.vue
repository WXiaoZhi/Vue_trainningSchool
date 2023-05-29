<template>
	<div class="logincon">
		<div class="titlecon">用户登录</div>
		
		<div class="con2">
			  <div class="con1">
				
				<div> <el-input placeholder="请输入用户名" suffix-icon="el-icon-user" v-model="username"></el-input></div>
			  </div>
			  <div class="con1">
					
					<div><el-input type="password" placeholder="请输入密码" suffix-icon="el-icon-lock" v-model="password" ></el-input></div>
			  </div>
		</div>
		<div class="ffcon">忘记密码?</div>
		<div> <el-button type="primary" @click="toHome">登录</el-button></div>
		<!-- <div> <el-button type="primary" @click="toRegister">注册</el-button></div> -->
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:"",
				password:""
			}
		},
		
		
		methods:{
			toHome(){
				// this.$axios({
				// 	url:"/user/login",
				// 	method:"get",
				// 	params:{
				// 		username:this.username,
				// 		password:this.password
				// 	}
				// }).then(function(res){
				// 	console.log(res)
				// })
				
				if(this.username=="admin" && this.password=="123456"){
					localStorage.setItem("userinfo",
					JSON.stringify({username:this.username,password:this.password}))
					console.log(JSON.parse( localStorage.getItem("userinfo")))
				}
				
				
				// this.$router.push("/schoolhome")
			},
			toRegister(){
				this.$axios({
					url:"/user/register",
					method:"post",
					data:{
						username:this.username,
						password:this.password
					}
				}).then(function(res){
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.logincon{
		height: 300px;
		/* width: 100px; */
		/* border: solid 1px; */
		background-color: #FFFFFF;
	}
	
	.titlecon{
		padding: 25px 20px;
		font-weight: 600;
		margin-top: 3px;
	}
	.con1{
		display: flex;
		align-items: center;
		margin-top: 20px;
	}
	.con2{
		margin: 0px 40px;
	}
	.el-input{
		width: 300px;
	}
	.el-button{
		width: 300px;
		margin: 0px 45px;
	}
	.ffcon{
		text-align: right;
		
		color: #336699;
		margin: 10px 0px;
		margin-right: 40px;
	}
	
</style>
