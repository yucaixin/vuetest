<template>
    <div>
        <nvHead :page-type="getTitleStr(searchKey.tab)"
        ref="head"
        :fix-head="true"
        :need-add="true"
        >
        </nvHead>
        <section id="page">
            <ul class="posts-list">
                <li v-for="item in topics" :key="item.id">
                    <router-link :to="{name:'topic',params:{id:item.id}}">
                        <h3 v-text="item.title" :class="getTabInfo(item.tab, item.good, item.top, true)"
                            :title="getTabInfo(item.tab, item.good, item.top, false)">

                        </h3>
                        <div class="content">
                            <img class="avatar" :src="item.author.avatar_url" />
                            <div class="info">
                                <p>
                                    <span class="name">
                                        {{item.author.loginname}}
                                    </span>
                                    <span class="status" v-if="item.reply_count > 0">
                                             <b>{{item.reply_count}}</b>
                                            /{{item.visit_count}}
                                    </span>
                                </p>
                                <p>

                                </p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
        <nvTop></nvTop>
    </div>
</template>


<script>
 import $ from 'webpack-zepto';
 import utils from '../libs/utils.js'
 import nvHead from '../components/header.vue';
 import nvTop from '../components/backtotop.vue';
export default {
    components:{
        nvHead,
        nvTop
    },
    data() {
        return {
            scroll: true,
            topics: [],
            index: {},
            searchKey:{
                page: 1,
                limit: 20,
                tab: 'all',
                mdrender: true
        }
        }
    },
    methods: {
         getTitleStr(tab) {
                let str = '';
                switch (tab) {
                    case 'share':
                        str = '分享';
                        break;
                    case 'ask':
                        str = '问答';
                        break;
                    case 'job':
                        str = '招聘';
                        break;
                    case 'good':
                        str = '精华';
                        break;
                    default:
                        str = '全部';
                        break;
                }
                return str;
            },
            getTopics(){
                let params=$.param(this.searchKey);
                $.get('https://cnodejs.org/api/v1/topics?' + params,(d)=>{
                    this.scroll=true;
                    if(d&&d.data){
                        d.data.forEach(this.mergeTopice)
                    }
                })
            },
            mergeTopice(topic){
                if (typeof this.index[topic.id] === 'number') {
                    const topicsIndex = this.index[topic.id];
                    this.topics[topicsIndex] = topic;
                } else {
                    this.index[topic.id] = this.topics.length;
                    this.topics.push(topic);
                }
            },
            getScrollData(){
                if(this.scroll){
                    let totalheight = parseInt($(window).height(), 20) + parseInt($(window).scrollTop(), 20);
                    if ($(document).height() <= totalheight + 200) {
                        this.scroll = false;
                        this.searchKey.page += 1;
                        this.getTopics();
                    }
                }
            },
            getTabInfo(tab, good, top, isClass) {
                return utils.getTabInfo(tab, good, top, isClass);
            },
    },
    mounted () {
        if (this.$route.query && this.$route.query.tab) {
                this.searchKey.tab = this.$route.query.tab;
            }
        this.getTopics();

        $(window).on('scroll', utils.throttle(this.getScrollData, 300, 1000));
    },
    watch: {
      '$route'(to){
          if(to.query&&to.query.tab){
              this.searchKey.tab=to.query.tab;
              this.topics=[]
              this.index={}
          }
          this.searchKey.page=1
          this.getTopics();
          this.$refs.head.show=false
      }  
    },
}
</script>