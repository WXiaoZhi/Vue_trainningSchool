<template>
    <div class="con">
        <div class="con1">
            <div class="con2">
                <div class="con2_1">
                    <div class="con2_2">
                        <div class="con2_3">我的应用</div>
                        <div class="icon-setting" @click="setMyApp"><img src="../assets/setting.png" width="22px"
                                                                         height="21px"></div>
                    </div>

                    <div class="myappcon_2">
                        <div class="myappcon2" v-for="(item,index) in myapps" :key="index">
                            <div><img :src="item.pic_path"></div>
                            <div>{{ item.name }}</div>
                        </div>
                    </div>

                </div>


            </div>
            <div class="con3">
                <HomeRight/>
            </div>


        </div>

        <el-dialog width="1000px" title="管理我的应用" :visible.sync="dialogFormVisible">
            <div class="myappcon">
                <div class="myappcon1" v-for="(item,index) in myapps" :key="index">
                    <div @click="deleteapp(index)">
                        <el-badge value="-" class="item"><img :src="item.pic_path"></el-badge>
                    </div>
                    <div>{{ item.name }}</div>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="myappcon">
                <div class="myappcon1" v-for="(item,index) in allapps" :key="index">
                    <div @click="addapp(index)">
                        <el-badge type="success" value="+" class="item"><img :src="item.pic_path"></el-badge>
                    </div>
                    <div>{{ item.name }}</div>
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
import HomeRight from "./HomeRight.vue";

export default {
    components: {HomeRight},
    data() {
        return {
            dialogFormVisible: false,
            myapps: [],
            allapps: []
        }
    },
    created() {
        this.getMyapps()
        this.getAllapps()
    },
    methods: {
        setMyApp() {
            this.dialogFormVisible = true
        },

        getMyapps() {
            var that = this
            this.$axios({
                url: this.$urls.MY_APPS_URL,
                methods: "get",

            }).then(function (res) {
                that.myapps = res.data
            })
        },
        getAllapps() {
            var that = this
            this.$axios({
                url: this.$urls.ALL_APPS_URL,
                methods: "get",

            }).then(function (res) {
                that.allapps = res.data
            })
        },
        deleteapp(index) {
            this.allapps.push(this.myapps[index])
            this.myapps.splice(index, 1)

        },
        addapp(index) {
            this.myapps.push(this.allapps[index])
            this.allapps.splice(index, 1)
        }
    }
}
</script>

<style scoped="scoped">
.con {
    background-color: #ECECEC;
    padding: 10px;
}

.con1 {
    margin: 0px auto;
    width: 1300px;

    display: flex;
}

.con2 {

    width: 330px;
    height: 600px;
    background-color: #FFFFFF;
}

.con2_2 {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 550;
    border-bottom: solid 0.5px #ECECEC;
}

.con2_3 {
    margin: 10px 0px 10px 15px;
}

.icon-setting {
    margin: 10px 13px 10px 0px;
}

.icon-setting:hover {
    cursor: pointer;
}

.item {
    margin-top: 10px;
    /*margin-right: 40px;*/
}

.myappcon {
    display: flex;
    flex-wrap: wrap;
    /*justify-content: center;*/
    padding-left: 20px;
}

.myappcon1 {
    width: 96px;
    text-align: center;
    margin-top: 5px;
    margin-left: 5px;
}

.myappcon1:hover {
    cursor: pointer;
}

.myappcon_2 {
    display: flex;
    flex-wrap: wrap;
    /*justify-content: center;*/
    padding-left: 5px;
}

.myappcon2 {
    width: 96px;
    text-align: center;
    margin-top: 25px;
    margin-right: 10px;
}

.myappcon2:hover {
    cursor: pointer;
}

.con3 {

    width: 970px;
    height: 600px;
    margin-left: 5px;
    /*background-color: #FFFFFF;*/
}

</style>
