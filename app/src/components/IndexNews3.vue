<template>
    <div style="padding:0 5px">
        <p class="title">裸鼹鼠令人无法相信的“超能力”：含氧量低时似植物</p>
        <p style='text-indent:0'>2017年04月22日 10:08</p>
        <hr>
        <img src="/src/images/yanshu.jpg">
        <p>裸鼹鼠（Naked Mole Rat）可能是地球上长相最惊悚的动物之一。它们是哺乳动物，但同时又是冷血动物（这非常罕见）。这样的先天条件使裸鼹鼠成为了哺乳动物中代谢能量消耗最低的生物。与其他啮齿类动物相比，它们的寿命极长，不会感到疼痛或几乎完全抵御癌症。现在，科学家又有了一项惊人的发现：当裸鼹鼠体内氧气含量低时，它们基本上变成了植物。</p>
        <p>通常，当哺乳动物缺氧时，其会窒息并最终死亡。而裸鼹鼠在其所有的进化智慧中都有一个辅助系统，允许它们在氧气耗尽时生存。</p>
        <p>美国伊利诺伊大学的Thomas Park带领的一组科学家发现， 当缺氧时，裸鼹鼠大脑开始利用果糖获得能量。氧气的缺乏基本上停止了哺乳动物产生葡萄糖的能力，但是通过切换到植物使用的果糖，裸鼹鼠可以继续生存数小时，直到它们找到新的氧源。</p>
        <p>对于长期生活在地下巢穴的动物来说，这是一种特别奇妙的特质。研究人员现在希望这一发现帮助他们找到新的方法来处理诸如心脏病发作之类的紧急情况。</p>　
    </div>
</template>
<style scoped>
    .title{
        font-size:18px;
        font-weight:700;
        color:#000;
        text-indent:0;
    }
    p{
        text-indent:2em;
        text-align:left;
    }
    img{
        width:100%;
    }
    hr{
        margin:0;
    }
</style>
<script>
    export default{
        name:"indexNews",
        data(){
            return{
                msg:'这是新闻'
            }
        },
        props:["panelClick"],
        methods:{

        }
    }
</script>
