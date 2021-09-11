<template>
	<view>
		<view class="goods-item" v-for="item in news" :key="item.goods_id" @click="itemClick(item.goods_id)">
			<image :src="item.goods_big_logo" mode=""></image>
			<view class="info">
				<view class="title">{{item.goods_name}}</view>
				<view class="price">
					<text class="new-price">{{'¥'+item.goods_price}}</text>
					<text class="old-price">¥7000</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"NewsList",
		data() {
			return {
				
			};
		},
		props:{
			news:{
				type:Array,
				default:[]
			}
		},
		methods:{
			itemClick(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
.goods-item{
	display: flex;
	width: 750rpx;
	height: 270rpx;
	margin: 2rpx auto;
	border-bottom: 1px solid $shop-color;
	image{
		height: 265rpx;	
		width: 150px;
	}
	.info{
		height:270rpx ;
		width: 450rpx;
		padding: 10rpx;
		.title{
			color: #333;
			height: 130rpx;
			font-size: 30rpx;
		}
		.price{
			margin-top: 60rpx;
		.new-price{
			color: $shop-color;
			font-size: 45rpx;
		}
		.old-price{
			margin-left: 10rpx;
			text-decoration: line-through;
			color: #333;
			font-size: 20rpx;
		}
		}
	}
}
</style>
