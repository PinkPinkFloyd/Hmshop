<template>
	<view class="home">
		<swiper indicator-dots circular autoplay interval="2000">
			<swiper-item v-for="item in swiper">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navsItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
	    <!-- 推荐商品区域 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<goods-list 
			:hotGoods="hotGoods"
			@goIndexDetail="goIndexDetail"></goods-list>
		</view>
		<view class="isOver">------我是有底线的------</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/goodslist/GoodsList.vue'
	export default {
		data() {
			return {
				swiper:[],
				hotGoods:[],
				navs:[
					{
					 icon:'iconfont icon-ziyuan',
					 title:'热门超市',
					 path:'/pages/goods/goods'
					},
					{
					 icon:'iconfont icon-guanyuwomen',
					 title:'联系我们',
					 path:'/pages/contact/contact'
					},
					{
					 icon:'iconfont icon-tupian',
					 title:'社区图片',
					 path:'/pages/pics/pics'
					},
					{
					 icon:'iconfont icon-shipin',
					 title:'学习视频',
					 path:'/pages/videos/videos'
					}
				],
				pagenum:1
			}
		},
		components:{
			GoodsList
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			//获取轮播图数据
			 getSwipers() {
				// uni.request({
				// 	url: 'http://localhost:8082/api/getlunbo',
				// 	success: res => {
				// 		console.log(res)
				// 		if (res.data.status !== 0) {
				// 			return uni.showToast({
				// 				title: '请求数据失败'
				// 			});
				// 		}
				// 		//使请求过来的轮播图数据保存到页面中，下面这行代码是数据成功请求过来就执行
				// 		//所以写在success函数里面
				// 		this.swiper = res.data.message
				// 	}
				// })  对数据请求要进行封装
				this.$myRequest({
					url:'/api/public/v1/home/swiperdata'
				}).then(res=>{
					// console.log(res)
					this.swiper = res.data.message
				})
				
			},
			//获取商品列表数据
			getHotGoods(){
				this.$myRequest({
					url:'/api/public/v1/goods/search?pagenum'+this.pagenum
				}).then(res=>{
					console.log(res)
					this.hotGoods = res.data.message.goods
				})
			},
			//中部导航栏点击跳转
			navsItemClick(url){
				uni.navigateTo({
					url
				})
			},
			//导航到首页商品详情
			goIndexDetail(id){
				uni.navigateTo({
					url:'../indexDetail/indexDetail?goods_id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
.home{
	swiper{
		width: 750rpx;
		height: 380rpx;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.nav{
		display: flex;
		.nav-item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background-color: #B50e03;
				border-radius: 50%;
				margin: 10rpx auto;
				line-height: 120rpx;
				font-size: 50rpx;
				color: #FFFFFF;
			}
			.icon-tupian{
				font-size: 45rpx;
			}
			text{
				font-size: 30rpx;
				color: #171717;
			}
		}
	}
	.hot-goods{
		background-color: #eee;
		//解决高度塌陷
		overflow: hidden;
		.title{
			height: 50px;
			text-align: center;
			line-height: 50px;
			letter-spacing: 20px;
			background-color: #FFFFFF;
			margin: 6px auto;
			color: $shop-color;
			font-size: 35rpx;
		}
		
	}
	.isOver{
		text-align: center;
		// padding: 20rpx auto;
		margin: 15rpx 0;
		font-size: 30rpx;
	}
}
</style>
