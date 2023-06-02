<template>
	<div class="con1">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-submenu index="1">
		    <template slot="title">报名申请</template>
		    <el-menu-item index="1-1">学籍异动申请</el-menu-item>
		    <el-menu-item index="1-2">重修报名</el-menu-item>
		    <el-menu-item index="1-3">考级项目报名</el-menu-item>
				<el-menu-item index="1-4">教学项目报名</el-menu-item>
				<el-menu-item index="1-5">毕业补考报名</el-menu-item>
				<el-menu-item index="1-6">结业换证报名</el-menu-item>
				<el-menu-item index="1-7">学生资格证书申请</el-menu-item>
				<el-menu-item index="1-8">校外成绩认定为校内学分</el-menu-item>
				<el-menu-item index="1-9">学分兑换</el-menu-item>
			</el-submenu>

		  <el-submenu index="2" default-active="1" mode="horizontal" @select="handleSelect">
		    <template slot="title">我的学校</template>
		    <el-menu-item index="2-1">学校宣传</el-menu-item>
		    <el-menu-item index="2-2">学校主页</el-menu-item>
		    </el-submenu>

		 <el-submenu index="3">
		   <template slot="title">选课</template>
		   <el-menu-item index="3-1">自主选课</el-menu-item>
		   <el-menu-item index="3-2">筛选结果查询</el-menu-item>
		   </el-submenu>

		 <el-submenu index="4" default-active="1" mode="horizontal" @select="handleSelect">
		   <template slot="title">信息查询</template>
		   <el-menu-item index="4-1">查询个人信息</el-menu-item>
		   <el-menu-item index="4-2">学籍预警查询</el-menu-item>
		   <el-menu-item index="4-3">毕业审核结果核查</el-menu-item>
		   <el-menu-item index="4-4">班级课表查询打印</el-menu-item>
		   <el-menu-item index="4-5">学生课表查询</el-menu-item>
		   <el-menu-item index="4-6">学生选课情况确认</el-menu-item>
		   <el-menu-item index="4-7">教学点名情况查询</el-menu-item>
		   <el-menu-item index="4-8">选课名单查询</el-menu-item>
		   <el-menu-item index="4-9">学生成绩查询</el-menu-item>
		   <el-menu-item index="4-10">考试信息查询</el-menu-item>
		   <el-menu-item index="4-11">结业换证考试查询</el-menu-item>
		   <el-menu-item index="4-12">教材明细查询</el-menu-item>
		   <el-menu-item index="4-13">学生学业情况查询</el-menu-item>
		   <el-menu-item index="4-14">学生成绩总表打印</el-menu-item>
		   <el-menu-item index="4-15">学生课表查询（按周次）</el-menu-item>
		   </el-submenu>
		   <el-submenu index="5">
		     <template slot="title">教学评价</template>
		     <el-menu-item index="5-1">学生评价</el-menu-item>
		     <el-menu-item index="5-2">问卷调查</el-menu-item>
		     <el-menu-item index="5-3">教学信息反馈</el-menu-item>
		     </el-submenu>
			 <el-submenu index="6">
			   <template slot="title">毕业设计（论文）</template>
			   <el-menu-item index="6-1">学生选题</el-menu-item>
			   <el-menu-item index="6-2">题目修改申请</el-menu-item>
			   <el-menu-item index="6-3">学生过程资料</el-menu-item>
			   <el-menu-item index="6-4">答辩信息查看</el-menu-item>
			   <el-menu-item index="6-5">成绩查看</el-menu-item>
			   <el-menu-item index="6-6">毕业设计文件资料</el-menu-item>
			   </el-submenu>
		</el-menu>

	</div>
</template>

<script>
  export default {
		data() {
			return {
				activeIndex: '1',
			};
		},
		methods: {
			// handleSelect(key, keyPath) {
			//   console.log(key, keyPath);
			// },
			handleSelect(index) {
				if (index === '4-1') {
					this.$router.push({
						path: '/perinfo',
						query: {
							index: index
						}
					})
				}
				if (index === '2-1') {
					this.$router.push({
						path: '/schoolInfo',
						query: {
							index: index
						}
					})
				}
				// if (index === '2-2') {
				// 	this.$router.push({
				// 		path: 'https://www.jsei.edu.cn/',
				// 		query: {
				// 			index: index
				// 		}
				// 	})
				// }
			}
		}
	}
</script>

<style scoped="scoped">
	.con1{
		width: 1300px;
		margin: 0 auto;
		
	}
	
	.el-dropdown{
		/* margin-left: 20px; */
		padding: 15px 30px;
		/* margin-top: 0px; */
	}
	.el-dropdown:hover{
		background-color: #DCDCDC;
	}
	
	 .el-dropdown-link {
	    cursor: pointer;
		font-size: 14px;
	    /* color: #409EFF; */
	  }
	  .el-icon-arrow-down {
	    font-size: 12px;
	  }
</style>
