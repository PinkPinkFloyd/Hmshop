<template>
	<view class="goods-list">
		<view class="goods-list-item" v-for="item in hotGoods" 
		:key="item.goods_id" 
		@click="itemClick(item.goods_id)">
			<view class="photo">
				<image :src="item.goods_big_logo" mode=""></image>
			</view>
			<view class="price">
				<text class="new-price">{{"¥"+ item.goods_price}}</text>
				<text class="old-price">¥5000</text>
			</view>
			<view class="name">{{item.goods_name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['hotGoods'],
		methods:{
			itemClick(id){
				this.$emit('goIndexDetail',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods-list{
		display: flex;
		justify-content: space-between;
		padding: 0 15rpx;
		flex-wrap: wrap;
		.goods-list-item{
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			image{
			                width: 80%;
			                height: 150px;
			                display: block;
			                margin: auto;
			            }
		.price{
			color: $shop-color;
			font-size: 36rpx;
			margin: 20rpx 0 5rpx 0;
			.old-price{
				margin-left:17rpx;
				font-size: 28rpx;
				color: #ccc;
				text-decoration: line-through;
			}
		}
		.name{
			font-size: 28rpx;
			line-height: 50rpx;
			 padding-bottom: 15rpx;
			 padding-top: 10rpx;
		}
		}
	}
</style>
