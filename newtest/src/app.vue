<template>
    <div id="text">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './todo/header.vue'
import Todo from './todo/todo.vue'
import Footer from './todo/footer.jsx'
export default {
    data () {
        return {
            text:'abc'
        }
    },
    components:{
        Footer,
        Header,
        Todo
    }
}
</script>

<style scoped>

#app{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
}
#cover{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color:#BDFCC9;
    opacity :.7;
    z-index :-1;
}
</style>
