const BASE_URL  = 'https://api-hmugo-web.itheima.net'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + options.url,
			data:options.data || {},
			method:options.method || 'GET',
			success:(res)=>{
				// if(res.data.meta.status !== 200){
				// 	return uni.showToast({
				// 		title:'数据请求失败'
				// 	})
				// }
				resolve(res)
			},
			fail:(err)=>{
				 uni.showToast({
					title:'接口请求失败'
				})
				reject(err)
			}
			
		})
	})
}


