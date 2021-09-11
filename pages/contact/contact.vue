<template>
	<view class="contact">
		<image class="photo" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
	<view class="info">
		<view @click="photo">
			联系电话：18862579930（点击拨打,同微信）
		</view>
		<view>
			联系地址：江苏省南京市南京南站
		</view>
	</view>
	<map :latitude="latitude" :longitude="longitude" :scale="scale" :markers="markers"></map>
	</view>
</template>
118.80321,31.977265
<script>
	export default {
		data() {
			return {
			 latitude:31.977265,
			 longitude:118.80321,
			 scale:14,
			 markers:[
				 {
					 latitude:31.977265,
					 longitude:118.80321,
					 iconPath:'../../static/marker.jpeg',
					 width:60,
					 heigth:60
				 }
			 ]
			}
		},
		methods: {
			photo(){
				uni.makePhoneCall({
					phoneNumber:'18862579930'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.photo{
		width: 750rpx;
		height: 360rpx;
	}
	.info{
		padding: 13rpx 8rpx;
		border-bottom: 4rpx solid #eee;
	 view{
		 line-height: 60rpx;
		 
	 }
	}
	map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
