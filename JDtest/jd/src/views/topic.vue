<template>
    <div>
        <nv-head page-type="主题"
                :show-menu="showMenu"
                :need-add="true"
                :fix-head="true">
        </nv-head>
    
        <div id="page" :class="{'show-menu':showMenu}" v-if="topic.title">
            <h2 class="topic-title" v-text="topic.title"></h2>
            <section class="author-info">
                <img :src="topic.author.avatar_url" class="avatar" alt=""/>
                <div class="col">
                    <span>{{topic.author.loginname}}</span>
                     <time>
                        发布于:{{topic.create_at }}
                    </time>
                </div>
                <div class="right">
                    <span class="tag"></span>
                    <span class="name">{{topic.visit_count}}次浏览</span>
                </div>
            </section>
            <section class='markdown-body topic-content' v-html="topic.content">

            </section>

            <h3 class="topic-reply">
                <strong>{{topic.reply_count}}</strong> 回复
            </h3>
            <section class="reply-list">
                <ul>
                    <li v-for="item in topic.replies" :key="item.id">
                        <section class="user">
                            <router-link :to="{name:'user',params:{loginname:item.author.loginname}}" >
                                <img class="head" :src="item.author.avatar_url"/>
                            </router-link>
                            <div class="info">
                                <span class="cl">
                                    <span class="name" v-text="item.author.loginname"></span>
                                    <span class="name mt10">
                                        <span></span>
                                        发布于:{{item.create_at }}</span>
                                </span>
                                <span class="cr">
                                    <span class="iconfont icon"
                                        :class="{'uped':isUps(item.ups)}"
                                        @click="upReply(item)">&#xe608;</span>
                                    {{item.ups.length}}
                                    <span class="iconfont icon" @click="addReply(item.id)">&#xe609;</span>
                                </span>
                            </div>
                        </section>
                        <div class="reply_content" v-html="item.content"></div>
                        <!-- <nv-reply :topic.sync="topic"
                                :topic-id="topicId"
                                :reply-id="item.id"
                                :reply-to="item.author.loginname"
                                :show.sync="curReplyId"
                                @close="hideItemReply"
                                v-if="userInfo.userId && curReplyId === item.id"></nv-reply> -->
                    </li>
                </ul>
            </section>
            <nvTop></nvTop>
        </div>
    </div>
</template>

<script>
import $ from 'webpack-zepto'
import utils from '../libs/utils.js'
import nvHead from '../components/header.vue'
import nvTop from '../components/backtotop.vue'
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            topicId:'',
            topic:{},
            showMenu:false,
            noData: false,
        }
    },
    computed: {
      ...mapGetters({
          userInfo:'getUserInfo'
      })  
    },
    mounted() {
        this.showMenu = false;
        this.topicId=this.$route.params.id;
        $.get('https://cnodejs.org/api/v1/topic/' + this.topicId,(d)=>{
            if(d&&d.data){
            
                this.topic=d.data
            }else{
                 this.noData = true;
            }
        })
    },
    methods: {
        getLastTimeStr(time, ago) {
                return utils.getLastTimeStr(time, ago);
            },
            isUps(ups) {
                return $.inArray(this.userInfo.userId, ups) >= 0;
        },
        upReply(item){
            if(!this.userInfo.userId){
                this.$router.push({
                    name:'login',
                        params: {
                            redirect: encodeURIComponent(this.$route.path)
                        }
                })
            }else{
            $.ajax({
                 type: 'POST',
                url: 'https://cnodejs.org/api/v1/reply/' + item.id + '/ups',
                 data: {
                    accesstoken: this.userInfo.token
                },
                dataType: 'json',
                success:(res)=>{
                     
                }
            })
        }
        }
    },
components: {
    nvHead,
    nvTop
}
}
</script>

<style>

</style>
