<template>
	<view>
		<swiper indicator-dots circular autoplay interval="2000">
			<swiper-item v-for="item in swiper" :key="item.pics_id">
				<image :src="item.pics_big_url" mode="" @click="imgClick(item.pics_big_url)"></image>
			</swiper-item>
		</swiper>
		<view class="price">{{'¥'+price}}</view>
		<view class="navCenter">
			<view class="title">{{title}}</view>
			<view class="mark" @click="markClick" :class="{active:index}">
				<image :src="mark[index]" mode=""></image>
				<text>收藏</text>
			</view>
		</view>
		<view class="secondNav">图文详情</view>
		<view class="intro">
			<rich-text :nodes="intro"></rich-text>
		</view>
		<view class="Goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id: 0,
				swiper: [],
				price: 0,
				intro: [],
				title: '',
				mark: ['../../static/icon/1.png', '../../static/icon/2.png'],
				index: 0,
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		components: {
			uniGoodsNav
		},
		methods: {
			getDetail() {
				this.$myRequest({
					url: '/api/public/v1/goods/detail/',
					data: {
						goods_id: this.id
					}
				}).then(res => {
					console.log(res)
					this.swiper = res.data.message.pics
					this.price = res.data.message.goods_price
					this.title = res.data.message.goods_name
					this.intro = res.data.message.goods_introduce
				})
			},
			imgClick(current) {
				const urls = this.swiper.map(item => {
					return item.pics_big_url
				})
				uni.previewImage({
					current,
					urls
				})
			},
			markClick() {
				if (this.index == 0) {
					this.index = 1
				} else {
					this.index = 0
				}
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options) {
			this.id = options.goods_id
			this.getDetail()
			console.log(options)
		}
	}
</script>

<style lang="scss">
	swiper {
		width: 750rpx;
		height: 500rpx;

		swiper-item {
			image {
				width: 750rpx;
				height: 550rpx;
				align-items: center;
			}
		}
	}

	.price {
		color: $shop-color;
		font-size: 45rpx;
	}

	.navCenter {
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		line-height: 45rpx;
		color: #333;
		border-bottom: 8rpx solid #eee;
		margin-top: 6rpx;

		.title {
			width: 600rpx;
			border-right: 6rpx solid #eee;
			font-size: 32rpx;
		}

		.mark {
			width: 114rpx;
			height: 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-right: 16rpx;
			justify-content: space-between;

			image {
				height: 50rpx;
				width: 50rpx;
			}

		}

		.active {
			color: red;
		}
	}

	.secondNav {
		font-size: 45rpx;
		color: $shop-color;
		margin: 8rpx;
		padding-left: 8rpx;
		border-bottom: 8rpx solid #eee;
	}
	.Goods_nav{
		position: fixed;
		bottom: 0;
		// z-index: 9;
		width: 100%;
	}
</style>
