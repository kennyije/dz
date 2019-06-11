<template>
	<div class="footer-out">
		<div v-for="item in items" :key="item.id" class="footer-out-model"
		@click="buttonClick(item.id)">
			<div>
				<img :src="item.src"></img>
			</div>
			<div :class="item.id == currentClick ? 'footerTextNow' : 'footerTextOrign' ">
				{{item.text}}
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default{
		data(){
			return{
				currentClick: null,
				items:[
					{
						id: 0,
						src: require('../assets/img/md-document.png'),
						text: '首页'
					},
					{
						id: 1,
						src: require('../assets/img/md-football.png'),
						text: '比赛'
					},
				],
				origin:[]
			} 
		},
		mounted() {
			this.origin = [...this.items]
		},
		methods:{
			buttonClick(key){
				this.currentClick = key
				if(key === 0) {
					Vue.set(this.items, key, {id: 0, src: require('../assets/img/md-document_clicked.png'), text: '首页'})
					this.reset()
					this.$router.push({path: '/'})
				}
				if(key === 1) {
					Vue.set(this.items, key, {id: 1, src: require('../assets/img/md-football_clicked.png'), text: '比赛'})
					this.reset()
					this.$router.push({path: '/game'})
				}
			},
			reset() {
				for(let item in this.items) {
					if(!this.currentClick == this.items[item].id) {
						Vue.set(this.items, item, this.origin[item])
					}
				}
			}
		} 
	}
</script>

<style>
	.footerTextOrign{
		color: #2c2c2c;
	}
	.footerTextNow{
		color: #1afa29;
	}
	.footer-out{
		display: flex;
		position: fixed;
		bottom: 0;
		justify-content: center;
		width: 100%;
		background: #e6e6e6;
	}
	.footer-out img{
		height: 30px;
	}
	.footer-out-model{
		width: 17%;
	}
</style>
