<template>
    <div>
        <headTop signin-up='home'>
            <span slot="logo" class="head_logo" @click="reload">ele.me</span>
        </headTop>
    </div>
</template>

<script>
import headTop from '../../components/header/head.vue'
export default {
components: {
    headTop
},

}
</script>

<style>

</style>
