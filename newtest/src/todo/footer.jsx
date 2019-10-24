import '../assets/style/footer.styl'

export default{

    data(){
        return{
            author:'xiaoming'
        }
    }
    ,
    render(){
        return(
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}