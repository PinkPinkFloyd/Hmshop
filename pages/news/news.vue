<template>
	<view class="news">
		<news-list :news="news" @itemClick="goDetail"></news-list>
	</view>
</template>

<script>
	import NewsList from '../../components/newslist/NewsList.vue'
	export default {
		data() {
			return {
				news:[]
			}
		},
		components:{
			NewsList
		},
		methods: {
			getNews(){
				this.$myRequest({
					url:'/api/public/v1/goods/search'
				}).then(res=>{
					this.news = res.data.message.goods
				})
			},
			goDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'../goodsdetail/goodsdetail?goods_id='+id
				})
			}
		},
		onLoad(){
			this.getNews()
		}
	}
</script>

<style lang="scss">

</style>
