<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:[],
				id:0
			}
		},
		methods: {
		 getNewsDetail(){
			 this.$myRequest({
				 //拼接url，id是传递并保存下来的
				 url:'/api/public/v1/goods/detail'+this.id
			 }).then(res=>{
				 console.log(res)
				 this.detail = res.data.message
			 })
		 }
		},
		//通过onload函数（参数为options），保存传过来的id
		onLoad(options){
			this.id = options.id
			this.getNewsDetail()
		}
	}
</script>

<style>

</style>
