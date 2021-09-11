<template>
	<view class="pics">
		<scroll-view scroll-y class="left">
			<view 
			:class="{active:currentIndex == index}" 
			v-for="(item,index) in cates" 
			:key="item.cat_id" 
			@click="itemClick(index,item.cat_id)">{{item.cat_name}}</view>
			
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="cateDetail" v-for="item in cateDetail">
				<image 
				:src="item.goods_big_logo" mode=""
				@click="previewImg(item.goods_big_logo)"></image>
				<text>{{item.goods_name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				currentIndex:0,
				cateDetail:[]
			}
		},
		methods: {
			getPicsCate(){
				this.$myRequest({
					url:'/api/public/v1/categories'
				}).then(res=>{
					console.log(res)
					this.cates = res.data.message,
					//默认渲染第一个分类页面的数据
					this.itemClick(0,this.cates[0].cat_id)
				})
			},
			itemClick(index,id){
				this.currentIndex = index
				this.$myRequest({
					url:'/api/public/v1/goods/search'
				}).then(res=>{
					console.log(res)
					this.cateDetail = res.data.message.goods
				})
			},
			
			//点击图片预览，使用map返回需要预览的图片链接数组
			previewImg(current){
				const urls = this.cateDetail.map(item => {
					return item.goods_big_logo
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
page{
		height: 100%;
	}
.pics{
	height: 100%;
	display: flex;
	.left{
		height: 100%;
		width: 200rpx;
		border-right: 1px solid #eee;
		text-align: center;
		view{
			height: 60px;
			line-height: 60px;
			border-top: 1px solid #eee;
			color: #333;
			font-size: 30rpx;
		}
		.active{
			background-color: $shop-color;
			color: #fff;
		}
	}
	.right{
		height: 100%;
		width: 530rpx;
		margin: 10rpx auto;
		.cateDetail{
		border-top: 1px solid #eee;
		image{
			width: 520rpx;
			height: 520rpx;
			border-radius: 5px;
		}
		text{
			font-size: 15rpx;
			line-height: 60rpx;
			color: #333;
		}
		}
	}
}
</style>
