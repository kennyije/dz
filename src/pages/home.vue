<template>
	<div>
		<div v-for="item in items" class="part">
			<div class="part-left">
				<div class="part-left-up">新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
				新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容</div>
				<div class="part-left-down">
					<div class="part-left-down-left">
						<img src="../assets/img/md-heart-empty.png" @click="thumbsUp(item)" />
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
	.part-left-down-left img{
		    height: 80%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 15px;
	}
</style>
