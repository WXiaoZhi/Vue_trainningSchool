<template>
	<div class="con">
		<div class="con1">
			<div class="con2">
				<div class="con2_1">
					<div class="con2_2">
						<div class="con2_3">我的应用</div>
						<div class="icon-setting" @click="setMyApp"><img src="../assets/setting.png" width="22px" height="21px"></div>
					</div>
					
					
					
					
				</div>
				
				
				
			</div>
			
			<div class="con3">
				
			</div>
			
		</div>
		
		<el-dialog width="1000px" title="管理我的应用" :visible.sync="dialogFormVisible">
			<div class="myappcon">
				<div class="myappcon1" v-for="(item,index) in myapps" :key="myapps">
					<div><img :src="item.pic_path"></div>
					<div>{{item.name}}</div>
				</div>
			</div>


		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
export default{
		 data() {
		      return {
		        dialogFormVisible: false,
						myapps:[]
		      }
		    },
	created() {
			 this.getMyapps()
	},
	methods:{
		setMyApp(){
			this.dialogFormVisible = true
		},

		getMyapps(){
			var that=this
			this.$axios({
				url:this.$urls.MY_APPS_URL,
				methods:"get",

			}).then(function (res){
				that.myapps=res.data
			})
		}
	}
}
</script>

<style scoped="scoped">
	.con{
		background-color: #ECECEC;
		padding: 10px;
	}
	
	
	.con1{
		margin: 0px auto;
		width: 1300px;
		
		display: flex;
	}
	.con2{
		
		width: 330px;
		height: 600px;
		background-color: #FFFFFF;
	}
	.con2_2{
		display: flex;
		justify-content: space-between;
		font-size: 15px;
		font-weight: 550;
		border-bottom: solid 0.5px #ECECEC;
	}
	.con2_3{
		margin: 10px 0px 10px 15px;
	}
	.icon-setting{
		margin: 10px 13px 10px 0px;
	}
	.icon-setting:hover{
		cursor: pointer;
	}
	.myappcon{
		display: flex;
		flex-wrap: wrap;
		/*justify-content: center;*/
		padding-left: 20px;
	}
	.myappcon1{
		width: 90px;
		text-align: center;
		margin-top: 5px;
		margin-left: 5px;
	}
	/*.el-icon-setting{*/
	/*	font-size: 25px;*/
	/*	margin: 10px 15px 10px 0px;*/
	/*}*/
	.con3{
		
		width: 970px;
		height: 600px;
		margin-left: 5px;
		background-color: #FFFFFF;
	}
</style>
