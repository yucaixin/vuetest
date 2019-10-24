<template>
    <div>
        <div class="page-cover" v-if="show&&fixHead" @click="showMenus">
        </div> 
        <header :class="{'show':show&&fixHead,'fix-head':fixHead,'no-fix':fixHead}" id="hd">
            <div class="toolbar-nav" @click="openMenu" v-if="fixHead">
            <span v-text="pageType"></span>
            <i class="num" v-if="messageCount>0">{{messageCount}}</i>
            <router-link to="/add">
                <i v-if="needAdd" v-show="!messageCount||messageCount<=0" class="iconfont add-icon">
                &#xe60f;
                </i>
            </router-link>
            </div>
            
        </header>
        <nuMenu :showMenu="show" :page-type="pageType" :nick-name="nickname" :profile-url="profileimgurl" v-if="fixHead"></nuMenu>
    </div>
</template>
<script>
import $ from 'webpack-zepto';
import nuMenu from './menu.vue'
export default {
    data () {
        return {
            show:true,
            nickname:"",
            profileimgurl: '',
        }
    },
     props: {
        pageType: String,
        fixHead: Boolean,
        messageCount: Number,
        scrollTop: 0,
        needAdd: {
            type: Boolean,
            default: true
        }
    },
    components: {
        nuMenu
    },
    methods: {
        openMenu(){
            $("body").css('overflow','hidden');
            this.show=!this.show
        },
        showMenus() {
            this.show = !this.show;
            $('body').css('overflow', 'auto');
        }
    }
}
</script>