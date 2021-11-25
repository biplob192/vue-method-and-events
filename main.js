firstapp = Vue.createApp({
  	data(){
  		return{
			count: 0,
			count2: 0,
  		}
  	},
	methods:{
		increase(){
			this.count = this.count+1;
		},
		increase2(){
			this.count2 = this.count2+2;
		},
		decrease2(){
			this.count2 = this.count2 - 2;
		},
		reset(){
			this.count=0;
		},
		reset2(){
			this.count2=0;
		}
	}
});

firstapp.mount('#app');
