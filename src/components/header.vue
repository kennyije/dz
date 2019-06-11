<template>
	<div class="header-out">
		<div class="header-left"><img class="header-left-img" src='../assets/img/md-contact.png'></img></div>
		<div class="header-tab-left"><span class="header-text-left">TAB1</span></div>
		<div class="header-tab-right"><span class="header-text-right">TAB2</span></div>
	</div>
</template>

<script>
</script>

<style>
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
		height: 20px;
		width: 20px;
		top: 0;
		position: absolute;
		bottom: 0;
		margin: auto;
		left: 0;
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
