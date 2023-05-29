<template>
	<div>
		<HomeHeader />
		<Menu />
		<HomeMain />
	</div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue"
import Menu from "../components/Menu.vue"
import HomeMain from "../components/HomeMain.vue"
export default{
	components:{
		HomeHeader,
		Menu,
		HomeMain
	}
}
</script>

<style scoped="scoped">
</style>
