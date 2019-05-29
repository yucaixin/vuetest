<template>
    <div class="city_body">
		<!-- <div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li>上海</li>
					<li>北京</li>
					<li>上海</li>
					<li>北京</li>
					<li>上海</li>
					<li>北京</li>
					<li>上海</li>
					<li>北京</li>
				</ul>
			</div>
			<div class="city_sort">
				<div>
					<h2>A</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>B</h2>
					<ul>
						<li>北京</li>
						<li>保定</li>
						<li>蚌埠</li>
						<li>包头</li>
					</ul>
				</div>
				<div>
					<h2>A</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>B</h2>
					<ul>
						<li>北京</li>
						<li>保定</li>
						<li>蚌埠</li>
						<li>包头</li>
					</ul>
				</div>
				<div>
					<h2>A</h2>
					<ul>
						<li>阿拉善盟</li>
						<li>鞍山</li>
						<li>安庆</li>
						<li>安阳</li>
					</ul>
				</div>
				<div>
					<h2>B</h2>
					<ul>
						<li>北京</li>
						<li>保定</li>
						<li>蚌埠</li>
						<li>包头</li>
					</ul>
				</div>	
			</div>
		</div>
		<div class="city_index">
			<ul>
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
			</ul>
		</div> -->
		<div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
				</ul>
			</div>
			<div class="city_sort" ref="citySort">
				<div v-for="item in cityList" :key="item.id">
					<h2>{{item.index}}</h2>
					<ul>
						<li v-for="count in item.list" :key="count.id">{{count.nm}}</li>
					</ul>
				</div>	
			</div>
		</div>
		<div class="city_index">
			<ul>
				<li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">
					{{item.index}}
				</li>
			</ul>
		</div>
		</div>
		
</template>

<script>
export default {
data () {
	return {
		cityList : [],
		hotList : []
	}
},
 name:'city',
 mounted() {
	 this.axios.get('/api/cityList').then((res)=>{
		 //0: {id: 1, nm: "北京", isHot: 1, py: "beijing"}
		 var msg=res.data.msg;
		 if(msg=='ok'){
			 var data=res.data.data.cities;
			 var {cityList,hotList}= this.formatCityList(data);
			this.cityList=cityList;
			this.hotList=hotList;
		 }
		
	 })
	 
 },
 methods: {
	 formatCityList(cities){
		 var cityList=[];
		 var hotList=[];
		 for(let i=0;i<cities.length;i++){
			 if(cities[i].isHot==1){
				 hotList.push(cities[i])
			 }
		 }
		 for(let i=0;i<cities.length;i++){
			 let firstLetter=cities[i].py.substring(0,1).toUpperCase();
			if(issetLetter(firstLetter)){
				cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]})
			}
			else{
				for(let n=0;n<cityList.length;n++){
				 	if(cityList[n].index==firstLetter){
						 cityList[n].list.push({nm:cities[i].nm,id:cities[i].id})
				 	}
			 	}
			}
		 }
		 
		 cityList.sort((a,b)=>{
			if(a.index>b.index){
				return 1
			}
			else if(a.index<b.index){
				return -1
			}else{
				return 0
			}
		 })
		 function issetLetter(firstLetter){
			 for(let n=0;n<cityList.length;n++){
				 if(cityList[n].index==firstLetter){
					 return false;
				 }
			 }
			 return true;
		 }
		return {cityList,hotList}
	 },
	 handleToIndex(index){
		 var an=this.$refs.citySort.getElementsByTagName('h2');
		 this.$refs.citySort.parentNode.scrollTop=an[index].offsetTop;
		 console.log()
	 }
 }
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; }
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}

.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}

.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}

</style>
