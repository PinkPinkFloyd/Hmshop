<template>
	<view class="goods">
		<goods-list 
		:hotGoods="hotGoods"
		@goIndexDetail="goIndexDetail"></goods-list>
	</view>
</template>

<script>
	import GoodsList from '../../components/goodslist/GoodsList.vue'
	export default {
		data() {
			return {
				hotGoods:[],
				pagenum:1
			}
		},
		components:{
			GoodsList
		},
		methods: {
			getGoods(){
				this.$myRequest({
					url:'/api/public/v1/goods/search?'+this.pagenum
				}).then(res=>{
					this.hotGoods.push(...res.data.message.goods)
					// this.hotGoods = res.data.message.goods
				})
			},
			goIndexDetail(id){
				uni.navigateTo({
					url:'../indexDetail/indexDetail?goods_id='+id
				})
			}
		},
		onLoad() {
			this.getGoods()
		},
		onReachBottom(){
			this.pagenum++
			this.getGoods()
		},
		onPullDownRefresh() {
			this.hotGoods = []
			this.pagenum = 1
			setTimeout(()=>{
				this.getGoods()
				if(this.pagenum == 1) uni.stopPullDownRefresh()
			},1000)
		}
	}
</script>

<style lang="scss">
.goods{
	background-color: #eee;
}
</style>
