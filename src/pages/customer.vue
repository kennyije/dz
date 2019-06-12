<template>
		<div class="customer-out">
			<div class="customer-info-outer"></div>
			<div class="customer-mask" @click="close()">
			</div>
		</div>
</template>

<script>
	export default{
		methods:{
			close(){
				this.$emit('closeCustomerInfo')
			}
		}
	}
</script>

<style>
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
