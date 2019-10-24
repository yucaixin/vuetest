<template>
    <Panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div class="item">
                <h4>下载App<span class="red">送888礼包</span></h4>
                <p class="gray">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&amp;height=135" alt="">
            </div>
            <div class="item">
                <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&amp;height=135" alt="">
                        <h4>领取128元红包</h4>
                        <p>立即开通</p>
                    </li>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&amp;height=135" alt="">
                        <h4>打白条免息</h4>
                        <p>立即免息</p>
                    </li>
                </ul>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../js/core/panel.vue"
export default {
    components: {
        Panel
    }
}
</script>

<style lang="scss" module>
    @import '../css/element.scss';
    .panel{
        @include panel;
        >h4{
            border-bottom: 1px solid #ddd;
        }
        .content{
            @include list(row);
            margin: 0;
            .item{
                width:50%;
                box-sizing: border-box;
                &:first-child{
                    padding: 16px 10px;
                    text-align: center;

                }
                h4{
                    font-size:14px;
                    line-height:20px
                }
                .red{
                    color:red
                }
                .gray{
                    color:#999;
                    font-size: 14px
                }
            }
        }
    }
</style>
