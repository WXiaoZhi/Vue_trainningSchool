<template>
	<div>
		<vueQr :logoSrc="imgPath" :text="PerId" :size="200"/>
	</div>
</template>

<script>
	import vueQr from 'vue-qr'
	export default{
		components:{
			vueQr
		},
		data(){
			return{
				PerId:"2021130079",
				imgPath:this.$urls.BASE_URL+"/pics/gj.jpg"
			}
		}
	}
</script>

<style>
</style>
