<template>
	<div class="down_con">
		<div class="down_header">
			<div class="down_header_text">通知详情</div>
		</div>
		<div class="down_main">
			<div class="down_title">{{file.title}}</div>
			<div class="down-date">{{file.date}}</div>
			<div class="down_url"><a :href="$urls.BASE_URL+file.file_path">{{file.file_path}}</a></div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				file:null
			}
		},
		created(){
			this.file=this.$route.query
		}
	}
</script>

<style scoped="scoped">
.down_con{
	background-color: #ECECEC;
}
.down_header{
	background-color: #336699;
	height: 63px;
	display: flex;
	/* border: solid 1px; */
	/*width: 1300px;*/
	/*margin: 0px auto;*/
	align-items: center;
	color:#FFFFFF;
	justify-content: space-between;
	font-size: 20px;
	font-weight: 500;
}
.down_header_text{
	margin-left: 43px;
}
.down_main{
	margin-top: 15px;
	width: 1538px;
	height: 750px;
	border: solid 1px;
	background-color: #FFFFFF;
	align-items: center;

}
.down_title{
	text-align: center;
	font-size: 20px;
	font-weight: 500;
}
</style>
