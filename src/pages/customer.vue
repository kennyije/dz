<template>
		<div class="customer-out">
			<div class="customer-info-outer">
				<div class="cust-top">
					<div class="cust-top-halfup">
						<div @click="login()">点击登录</div>
					</div>
					<div class="cust-top-halfdown"></div>
				</div>
				<div class="cust-middle"></div>
				<div class="cust-bottom"></div>
			</div>
			<div class="customer-mask" @click="close()">
			</div>
		</div>
</template>

<script>
	export default{
		methods:{
			close(){
				this.$emit('closeCustomerInfo')
			},
			login(){
				this.$router.push({path:'/login'})
			}
		}
	}
</script>

<style>
	.cust-top-halfup{
		    height: 70%;
    width: 100%;
    background: red;
	}
	.cust-top{
		    width: 100%;
    height: 30%;
    background: gray;
	}
	.customer-out{
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
	}
	.customer-info-outer{
		    width: 80%;
    height: 100%;
    background: white;
	}
	.customer-mask{
		    width: 20%;
    height: 100%;
    background: #8a8a8a;
    opacity: 0.2;
	}
</style>
