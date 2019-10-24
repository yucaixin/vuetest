const paginnationBev=Behavior({
    data:{
        dataArray:[],
        total:"",
        empty:false
    },


    methods: {
        setMoreData(dataArrays){
            this.setData({
                dataArray:this.data.dataArray.concat(dataArrays),
            })
        },
        getCurrentStart(){
            return this.data.dataArray.length
        },
        setTotal(total){
            this.data.total=total
            if(total==0){
                this.setData({
                    empty:true
                })
            }
        },
        hasMore(){
            if(this.data.dataArray.length>=this.data.total){
                return false
            }else{
                return true
            }
        },
        initialize(){
            this.setData({
                dataArray:[],
                empty:false
            })
            
            this.data.total=null
        }    
    },
})


export {paginnationBev}