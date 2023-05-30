<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div class="con3_1"></div>
            </el-col>
            <el-col :span="12">
                <div class="con3_2">
                    <div class="con4">
                        <div class="con4_1">通知</div>
                        <div class="con4_2">更多</div>
                    </div>
                    <template>
                        <el-table
                                :data="notices"
                                :show-header="false"
                                style="width: 100%">
                            <el-table-column
                                    prop="title"
                                    width="385"
                                   >
                            </el-table-column>

                            <el-table-column
                                    prop="publish-data"
                                    width="100">
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="con3_3"></div>
            </el-col>
            <el-col :span="12">
                <div class="con3_4"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="con3_5"></div>
            </el-col>
            <el-col :span="12">
                <div class="con3_6"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "HomeRight",
    data() {
        return {
            notices: []
        }
    },
    created() {
        this.getNotices()
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
    /*margin-left: 5px;*/
    /*margin-top: 5px;*/
}

.con3_2 {
    height: 200px;
    background-color: #FFFFFF;
    font-size: 14px;
}

.con3_3 {
    height: 200px;
    background-color: #FFFFFF;
}

.con3_4 {
    height: 200px;
    background-color: #FFFFFF;
}

.con3_5 {
    height: 200px;
    background-color: #FFFFFF;
}

.con3_6 {
    height: 200px;
    background-color: #FFFFFF;
}
.con4{
    /*margin-top: 5px;*/
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
.con4_1{
    font-size: 14px;
    font-weight: 600;
}
.con4_2{
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
    color: #336699;
}
.el-table-column{
    width:380px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>