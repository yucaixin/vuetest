<template>
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
                <div :class="$style.item" v-for="item in enters" :key="item.img">
                    <router-link :to="{name:item.href}">
                        <img :src="item.img" :alt="item.title">
                        <h4>{{item.title}}</h4>
                    </router-link>
                </div>
        </section>
    </article>
</template>

<script>
import Slider from "../js/core/slide.vue"
export default {
    components: {
        Slider
    },
    data() {
        return {
            items:[
                {
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t1/52802/14/4027/212241/5d1b14f4Ed1748086/588363d90a40b28c.png?width=750&amp;height=320'
                },
                 {
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t1/54124/12/3394/140400/5d11e389Ee12d74f3/f3cba452b6470938.png?width=750&amp;height=320'
                },
                {
                    href:'home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t1/52802/14/4027/212241/5d1b14f4Ed1748086/588363d90a40b28c.png?width=750&amp;height=320'
                }
            ],
            enters:[
                {href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&amp;height=132',
                title:'优惠卷'
                },
                {href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&amp;height=132',
                title:'领福利'
                },
                {href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&amp;height=132',
                title:'抢钢镚'
                },
                {href:'home',
                img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&amp;height=135"',
                title:'白条提额'
                }

            ]
        }
    },
}
</script>

<style lang="scss" module>

@import "../css/element.scss";

.slider{
    margin: 0;
    margin-top:60px;

}    
.list{
    @include list(row);
    background: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-around;
    align-items: center;
    a{
    text-decoration: none   
}
.item{
    align-items: center;
    text-align: center;
    img{
        display: inline-block;
        width: 45px;
        height: 45px;
    }
    h4{
        font-size: 14px;
        margin-top: 12px;
        color:#666
    }
}
}
</style>
