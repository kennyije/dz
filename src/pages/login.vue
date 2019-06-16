<template>
	<div class="login-outer">
		<div class="login-up"></div>
		<div class="login-middle">
			<div class="login-account">
				<input v-model="loginModel.username" type="text" placeholder="请输入用户名/手机号">
			</div>
			<div class="login-password">
				<input v-model="loginModel.password" type="password" placeholder = "请输入密码">
			</div>
			<div class="login-button" @click="login()">
				登录
			</div>
			<div class="register">注册账号</div>
		</div>
		<div class="login-down">
			<div class="login-down-halfup">
				第三方账户登录
			</div>
			<div class="login-down-halfdown">
				<div><img class="weixin" src="../assets/img/login-weixin.png"/></div>
				<div @click="qqLogin()"><img class="qq" src="../assets/img/login-qq.png"/></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		data(){
			return {
				loginModel: {}
			}
		},
		methods:{
			...mapMutations(['SET_ACCOUNT']),
			login() {
				this.axios({
				  url: '/api/authentication/form',
				  method: 'post',
				  data: this.loginModel,
				  transformRequest: [function (data) {
					let ret = ''
					for (let it in data) {
					  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret
				  }],
				  headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				  }
				}).then(x=>{
					if( x.data.code == "0")  {
						this.SET_ACCOUNT(x.data.authentication)
						this.$router.push({path:'/'})
					} else {
						alert(x.data.message)
					}
				})
			},
			qqLogin(){
				this.axios.get('/api/auth/qq')
			}
		},
		mounted(){
		}
	}
</script>

<style>
	.login-outer{
		    position: fixed;
    height: 100%;
    width: 100%;
	}
	.login-up{
		    width: 100%;
    height: 30%;
	}
	.login-middle{
		    width: 100%;
    height: 40%;
	    position: relative;
	}
	.login-middle input{
		width: 100%;
		    height: 100%;
    border: 0;
    border-bottom: solid 0.5px #e6e6e6;
	}
	.login-down{
		    width: 100%;
    height: 30%;
	}
	.login-down-halfdown{
	    display: flex;
    position: relative;
    height: 100%;
	}
	.weixin{
		    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 30%;
	}
	.qq{
		    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 30%;
	}
	.login-button{
    background: #1fb922;
    width: 90%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
        top: 37%;
    height: 15%;
    line-height: 41px;
	    color: white;
}
.login-password{
    height: 15%;
    width: 90%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
        top: 16%;
}
.login-account{
    height: 15%;
    width: 90%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}
.register{
    width: 90%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 55%;
    text-align: right;
    color: #1fb922;
    height: 15%;
    line-height: 40px;
}
</style>
