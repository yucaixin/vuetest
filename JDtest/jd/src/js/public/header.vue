<template>
    <div :class="$style.header"> 
        <span :class="$style.left">
            <em>注册</em>&nbsp;|&nbsp;<em>登陆</em>
        </span>
        <btn :class="$style.btnDown">APP下载</btn>
    </div>
</template>

<script>
import  btn from '../core/btn.vue'
export default {
    components: {
        btn
    }
}
</script>

<style lang='scss' module>
    .header{
        color:#666;
        height:50px;
        line-height:50px;
        position:fixed;
        left:0;
        top:0;
        right:0;
        font-size:14px;
        background:#fff;
        z-index: 100;
        .left{
        font-size:14px;
        height:15px;
        line-height:15px;
        margin:8px 0 0 9px;

    }
    .btnDown{
        float:right;
        font-size:14px;
        border-width:0;
        height:28px;
        line-height:28px;
        min-width:60px;
        padding:0;
        border-radius:4px;
        margin:14px 12px 0 0
    }
    }
    
</style>
