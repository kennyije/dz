<template>
	
	<div>
		<Header/>
		<Footer/>
		<div v-for="item in items" class="part">
			<div class="part-left">
				<div class="part-left-up">新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
				新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</div>
				<div class="part-left-down">
					<div class="part-left-down-left">
						<transition name="thumbs-up">
							<img v-show="item.id == currentClick" class="thumbsClicked" src="../assets/img/md-heart-empty.png" @click="thumbsUp(item)" />
						</transition>
						<img class="thumbsClicked" src="../assets/img/md-heart-empty.png" @click="thumbsUp(item)"  />
						
						<span style="line-height: 35px; color:#8a8a8a;">{{item.thumbs}}</span>
					</div>
					<div class="part-left-down-right">
						独孤求败
					</div>
				</div>
			</div>
			<div class="part-right">
				<img src="../../build/logo.png"></img>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Header from '@/components/header.vue'
	import Footer from '@/components/footer.vue'
	export default {
		data(){
			return {
				currentClick: null,
				items:[
					{
						id: 0,
						thumbs: 0,
					},
					{
						id: 1,
						thumbs: 5,
					},
					{
						id: 2,
						thumbs: 1,
					}
				]
			}
		},
		components:{
			Header,
			Footer
		},
		methods:{
			thumbsUp(item){
				this.currentClick = item.id
				item.thumbs ++
				Vue.set(this.items, item.id, item) 
			}
		}
	}
</script>

<style>
	.part{
		    display: flex;
	}
	.part-left{
		height: 120px;
    width: 70%;
	}
	.part-right{
		    width: 30%;
    height: 120px;
    position: relative;
	}
	.part-right img{
		height: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    width: 80%;
	}
	.part-left-up{
	height: 60%;
    overflow: hidden;
    text-align: justify;
    padding: 15px 15px 0 15px;
	color: #8a8a8a;
	}
	.part-left-down{
		height: 30%;
		display: flex;
	}
	.part-left-down-left{
		height: 100%;
		position: relative;
		width: 50%;
	}
	.part-left-down-right{
		height: 100%;
		    width: 50%;
			line-height: 35px;
			color: #8a8a8a;
	}
	.thumbsClicked{
		    height: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 15px;
	}
	.thumbs-up-enter-active{
		animation: thumbs-up .8s;
	}
	/* .thumbs-up-leave-active{
		animation: thumbs-up .8s;
	} */
	@keyframes thumbs-up {
	0% {
		/* transform: scale(0); */
		top: -10px;
		left: 10px;
	}
	20% {
		/* transform: scale(1.5); */
		top: -20px;
		left: 20px;
	}
	40% {
		/* transform: scale(1); */
		top: -30px;
		left: 10px;
	}
	60% {
		/* transform: scale(1); */
		top: -40px;
		left: 20px;
	}
	80% {
		/* transform: scale(1); */
		top: -50px;
		left: 10px;
	}
	100% {
		/* transform: scale(1); */
		top: -60px;
		left: 20px;
	}
}
</style>
