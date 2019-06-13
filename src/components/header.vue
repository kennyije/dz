<template>
	
	<div class="header-out">
		<transition  name="customer">
		<customer v-show="showCustomerInfo" @closeCustomerInfo="closeCustomer"></customer>
		</transition>
		<div class="header-left" @click="openCustomer()"><img class="header-left-img" src='../assets/img/md-contact.png'></img></div>
		<div class="header-tab-left"><span class="header-text-left">TAB1</span></div>
		<div class="header-tab-right"><span class="header-text-right">TAB2</span></div>
	</div>
</template>

<script>
	import customer from '@/pages/customer.vue'
	export default{
		data(){
			return{
				showCustomerInfo: false,
			}
		},
		methods:{
			openCustomer(){
				this.showCustomerInfo = true
			},
			closeCustomer(){
				this.showCustomerInfo = false
			}
		},
		components:{
			customer
		}
	}
</script>

<style>
	.customer-enter-active{
		animation: customer-open .1s;
	}
	.customer-leave-active{
		animation: customer-open .1s reverse;
	}
	@keyframes customer-open {
		0% {
			width: 10%;
		}
		20% {
			width: 20%;
		}
		40% {
			width: 40%;
		}
		60% {
			width: 60%;
		}
		80% {
			width: 80%;
		}
		100% {
			width: 100%;
		}
	}
	
	.header-out{
		display: flex;
		height: 45px;;
		background: #1fb922;
	}
	.header-left{
		width: 10%;
		position: relative;
	}
	.header-left-img{
		height: 30px;
		width: 30px;
		top: 0;
		position: absolute;
		bottom: 0;
		margin: auto;
		left: 10px;
		right: 0;
	}
	.header-tab-left{
		width: 40%;
		position: relative;
	}
	.header-tab-right{
		width: 40%;
		position: relative;
	}
	.header-text-left{
		color: white;
		height: 28px;
		top: 0;
		bottom: 0;
		margin: auto;
		position: absolute;
		right: 5px;
	}
	.header-text-right{
		color: white;
		top: 0;
		bottom: 0;
		margin: auto;
		position: absolute;
		left: 5px;
		height: 28px;
	}
</style>
