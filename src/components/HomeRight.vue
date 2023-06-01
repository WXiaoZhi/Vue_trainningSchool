<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div class="con3_1">
					<div class="con7_1"><img src="../assets/gj.jpg"></div>
					<div class="con7_2">
					<el-descriptions direction="vertical" :column="4" border>
					  <el-descriptions-item label="用户名">张佳翼</el-descriptions-item>
					  <el-descriptions-item label="手机号">18762030000</el-descriptions-item>
					  <el-descriptions-item label="居住地" :span="2">淮安市</el-descriptions-item>
					  <el-descriptions-item label="备注">
					    <el-tag size="small">学校</el-tag>
					  </el-descriptions-item>
					  <el-descriptions-item label="联系地址">江苏省淮安市高教园区枚乘东路３号</el-descriptions-item>
					</el-descriptions>	
					</div>
				</div>
            </el-col>
            <el-col :span="12">
                <div class="con3_2">
                    <div class="con4">
                        <div class="con4_1">通知</div>
                        <div class="con4_2">更多</div>
                    </div>
                    <template>
                        <el-table :data="notices" :show-header="false" style="width: 100%"
                                  :cell-style="{padding:'3px 0px'}">
                            <el-table-column prop="title" :show-overflow-tooltip="true">
                            </el-table-column>
                            <el-table-column prop="publish-data" width="100">
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
            </el-col>
        </el-row>
        <el-row>
<!--课表-->
            <el-col :span="12">
                <div class="con3_3">
                    <div class="con3_4">
                        <div class="con4">
                            <div class="con4_1">课表</div>
                            <div class="con4_2">更多</div>
                        </div>
                        <div>
                            <div class="con5" v-for="(item,index) in schedule" :key="index" @click="gotoDownloadPage(index)">
                                <div class="con5_1">{{item.course }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
<!--文件-->
            <el-col :span="12">
                <div class="con3_4">
                    <div class="con4">
                        <div class="con4_1">文件</div>
                        <div class="con4_2">更多</div>
                    </div>
                    <div>
                        <div class="con5" v-for="(item,index) in files" :key="index" @click="gotoDownloadPage(index)">
                            <div class="con5_1"><span class="span1" v-if="item.istop">【置顶】</span>{{ item.title }}
                            </div>
                            <div class="con5_2">{{ item.date }}</div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
<!--消息-->
            <el-col :span="12">
                <div class="con3_5">
                    <el-tabs type="border-card">
                        <el-tab-pane label="消息">
                            <div>
                                <div class="con5" v-for="(item,index) in files" :key="index">
                                    <div class="con5_1"><span class="span1" v-if="item.istop">【置顶】</span>{{item.title}}</div>
                                    <div class="con5_2">{{ item.date }}</div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="其他角色信息">其他角色信息</el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
<!--成绩-->
            <el-col :span="12">
                <div class="con3_6">
                    <el-tabs type="border-card">
                        <el-tab-pane label="成绩">
                            <div>
                                <div class="con5" v-for="(item,index) in grades" :key="index">
                                    <div class="con5_1"><span class="span1" v-if="item.istop">【置顶】</span>{{item.course}}</div>
                                    <div class="con5_2">{{ item.score }}</div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="考试">考试</el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "HomeRight",
    data() {
        return {
            notices: [],
            files: [],
            grades:[],
            schedule:[]
        }
    },
    created() {
        this.getNotices()
        this.getFiles()
        this.getGrades()
        this.getSchedule()
    },
    methods: {
        getNotices() {
            var that = this
            this.$axios({
                method: "get",
                url: this.$urls.NOTICE_URL
            }).then(function (res) {
                that.notices = res.data
            })
        },
        getFiles() {
            var that = this
            this.$axios({
                method: "get",
                url: this.$urls.FILE_URL
            }).then(function (res) {
                that.files = res.data
            })
        },
        getSchedule() {
            var that = this
            this.$axios({
                method: "get",
                url: this.$urls.SCHEDULE_URL
            }).then(function (res) {
                that.schedule = res.data
            })
        },
        getGrades() {
            var that = this
            this.$axios({
                method: "get",
                url: this.$urls.GRADES_URL
            }).then(function (res) {
                that.grades = res.data
            })
        },
        gotoDownloadPage(index) {
            this.$router.push({path: "/download", query: this.files[index]})
        }
    }

}
</script>

<style scoped="scoped">
.el-row {
    margin-bottom: 5px;
}

.el-col {
    /*margin-left: 5px;*/
    /*background-color: #FFFFFF;*/
    padding-left: 5px;
}

.con3_1 {
    height: 200px;
    background-color: #FFFFFF;
	display: flex;
    /*margin-left: 5px;*/
    /*margin-top: 5px;*/
}

.con3_2 {
    height: 200px;
    background-color: #FFFFFF;
    font-size: 14px;
    overflow: auto;
}

.con3_3 {
    height: 200px;
    background-color: #FFFFFF;
}

.con3_4 {
    height: 200px;
    background-color: #FFFFFF;
    overflow: auto;
}

.con3_5 {
    height: 200px;
    background-color: #FFFFFF;
    overflow: auto;
}

.con3_6 {
    height: 200px;
    background-color: #FFFFFF;
    overflow: auto;
}

.con4 {
    padding: 5px;
    display: flex;
    justify-content: space-between;
}

.con4_1 {
    font-size: 14px;
    font-weight: 600;

}

.con4_2 {
    font-size: 14px;
    text-decoration: underline;
    color: #336699;
}

.con5 {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 0.5px #ECECEC;
    padding: 3px 10px;
    font-size: 14px;

}

.con5:hover {
    cursor: pointer;
    background-color: #ECECEC;
}

.con5_1 {
    width: 370px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #606266;
}

.con5_2 {
    width: 110px;
    text-align: right;
    color: #606266;
}

.span1 {
    color: red;
}
.con7_1 img{
	width: 80px;
	height: 80px;
	border-radius: 50%;
	margin-top: 10px;
	margin-left: 5px;
}
.con7_2{
	margin-top: 5px;
	margin-left: 15px;
}
</style>
