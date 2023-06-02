<template>
    <div class="school_main">
        <vueMiniPlayer ref="vueMiniPlayer" :video="video" :mutex="true" @fullscreen="handleFullscreen"/>
    </div>

</template>

<script>
export default {
    data() {
        return {
            video: {
                url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
                cover: 'https://www.jsei.edu.cn/__local/9/85/A3/4F4D5D208BB1C674C54E5D579A2_7317EB0B_6035E.jpg?e=.jpg',
                muted: false,
                loop: false,
                preload: 'auto',
                poster: '',
                volume: 1,
                autoplay: false
            }
        }
    },
    computed() {
        $video()
        {
            return this.$refs.vueMiniPlayer.$video;
        }
    },
    methods: {
        handleFullscreen() {

        }
    }
}
</script>

<style scoped>
.school_main {
    width: 800px;
    height: 500px;
    display: flex;
    margin: 0 auto;
    text-align: center;
}
</style>