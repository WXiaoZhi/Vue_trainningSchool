<template>
	<div class="page">
		<div class="header">查询个人信息</div>
		<div class="student-info">
			学号：{{ studentNumber }} 姓名：{{ studentName }}
		</div>
		<div>
			<vueQr :logoSrc="imgPath" :text="PerId" :size="200"/>
		</div>
		<el-tabs v-model="activeTab" class="tabs">
			<el-tab-pane label="基本信息">
				<div class="info">
					<div class="label">年龄:</div>
					<div class="value">{{ basicInfo.age }}</div>
				</div>
				<div class="info">
					<div class="label">性别:</div>
					<div class="value">{{ basicInfo.gender }}</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="其他信息">
				<div class="other-info">
					这是我的其他信息。
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import vueQr from 'vue-qr'
export default {
	components:{
		vueQr
	},
	data(){
		return{
			PerId:"2021130079",
			imgPath:this.$urls.BASE_URL+"/pics/gj.jpg",
			studentName: '张三',
			studentNumber: '2021130079',
			activeTab: 'basicInfo',
			basicInfo: {
				age: '20',
				gender: '男'
			}
		}
	}
}
</script>

<style scoped>
.page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.header {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
}

.student-info {
	font-size: 18px;
	margin-bottom: 30px;
}

.tabs {
	width: 500px;
}

.tab-pane {
	display: flex;
	flex-direction: column;
}

.info {
	display: flex;
	align-items: center;
	margin-top: 20px;
	font-size: 18px;
}

.label {
	width: 80px;
	font-weight: bold;
}

.value {
	margin-left: 20px;
}
</style>
