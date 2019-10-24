<template>
    <div>
        <img class="index" src="../assets/images/index.png" alt="">
    </div>
</template>
<script>
require('../assets/scss/CV.scss');
require('../assets/scss/iconfont/iconfont.css');
require('../assets/scss/github-markdown.css');
export default {
    mounted() {
        setTimeout(() => {
            this.$router.push('list')
        }, 200);
    },
}
</script>

<style lang="scss">
 .index {
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>
