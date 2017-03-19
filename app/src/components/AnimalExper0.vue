<template>
    <div>
        <div class="text-content" v-show="!show">
            <p class="sub_title">实验目的</p>
            <div class="exper">
                <p class="text tl">本实验用机械-电换能器将肌肉收缩的机械变化转变为电变化，通过生理信号采集仪分析，并经计算机实时分析系统描记肌肉的收缩与动作电位，观察刺激强度和频率对骨骼肌收缩的影响，掌握骨骼肌动作电位与机械收缩同步记录的方法及其基本波形的判断。</p>
                <p class="header">刺激强度和频率对肌肉收缩的影响</p>
                <p class="sub_title">实验原理</p>
                <p class="text tl">利用蟾蜍坐骨神经腓肠肌标本，研究不同频率的电刺激对肌肉收缩的影响，刺激神
        经会引起肌肉收缩。肌肉、神经和腺体组织称为可兴奋组织，它们有较大的兴奋性。</p>
                <p class="text tl">不同组织、细胞的兴奋表现各不相同，神经组织的兴奋表现为动作电位，肌肉的兴奋主要表现为肌肉收缩活动。因此，观察肌肉是否收缩可以判断它是否产生了兴奋。一个刺激是否可以能使组织发生兴奋，不仅与<span class="blue">刺激形式</span>有关，还与<span class="blue">刺激时间</span>、<span class="blue">刺激强度</span>、<span class="blue">强度—时间变化率</span>三要素有关，在一定的刺激时间（波宽）下，刚能引起组织发生兴奋的刺激称为阈刺激，所达到的刺激强度为阈强度，能引起组织发生最大兴奋的最小刺激， 称为最大刺激，相应的刺激强度叫最大刺激强度；界于阈刺激和最大刺激间的刺激称为阈上刺激，相应的强度称为阈上刺激强度。</p>
                <p class="sub_title">刺激电压与肌肉收缩特征</p>
                <p class="text tl">恰好能引起肌肉出现微小收缩的刺激叫阈刺激，此时的此家强度为阈强度，引起肌肉出现最大收缩的最小的刺激强度为最大刺激强度，在两者之间的刺激强度为阈上刺激强度。</p>
            </div>
            <div>
                <p class="header">刺激频率对肌肉收缩的影响</p>
                <p class="text tl">刺激神经使神经细胞产生兴奋，兴奋沿神经纤维传导，通过神经肌接头的化学传递，使肌肉终板膜上产生终板电位，终板电位可以引起肌肉产生兴奋（即动作电位），传遍整个肌纤维，再通过兴奋—收缩偶联使肌纤维中粗、细肌丝产生相对滑动，宏观上表现为肌肉收缩。肌肉收缩的形式，不仅与刺激本身有关，而且还与刺激频率有关。当刺激频率较小，刺激的间隔大于一次肌肉收缩舒张的持续时间，则肌肉收缩表现为一连串的单收缩；增大刺激频率，使刺激的间隔大于一次肌肉收缩的刺激时间、小于一次肌肉收缩舒张的持续时间，则肌肉产生不完全强直收缩；继续增加刺激频率，使刺激的间隔小于一次肌肉收缩的收缩时间，则肌肉产生完全强直收缩。</p>
                <p class="sub_title">刺激频率与肌肉收缩特征</p>
                <p class="text tl">当刺激频率较小，刺激间隔大于一次肌肉收缩舒张的持续时间，则肌肉收缩表现为一连串的单收缩；增大刺激频率，使刺激的间隔间于肌肉一次收缩和一次持续舒张的时间，则肌肉产生不完全强直收缩；继续增加刺激频率，使刺激的间隔小于肌肉收缩的收缩时间，
则肌肉产生完全
</p>
            </div>
            <button class="primary" id="created" @click="show=!show;">开始实验</button>
        </div>
        
        <div class="chart" v-show="show">
            <button class="warn" @click="show=!show">返回文档</button>
            
        </div>
        <div id="main"></div> 
        <div id="main2"></div> 
        <button class="primary" @click="vue_charts()">开始实验</button>
    </div>
</template>
<style scope>
    #main,#main2{
        width: 100%;
        height: 200px;
    }
    button{
        width: 90%;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 18px;
        color: #fff;
        margin: 5px;
        height: 36px;
    }  
    button.warn{
        background-color: #E64340;
        border-color: #E64340;
    } 
    button.primary{
        background-color: #1AAD19;
        border-color: #1AAD19;
    }
    .header{font-size: 20px;color:#333;line-height: 36px;color: #000;}
    .sub_title{
        font-size: 16px;
        line-height: 28px;
        color: #222;
        border-bottom: 2px dashed #ccc;
    }
    .text{
        color: #444;
        font-size: 12px;
        line-height: 20px;
        text-indent: 2em;
    }
    .blue{
        color: blue
    }
    .exper{
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 2px solid #e5e5e5;
    }
    .chart{
        width: 100%;
        height: ;
        overflow-x:auto; 
    }
</style>
<script>
    var echarts = require('echarts');
    var $ =require('jquery')
    var voltage={
            title:"刺激电压与肌肉收缩特征",
            xData:['1', '2', '3', '4', '5', '10', '15', '20', '30', '40', '60', '80'],
            tip:['刺激电压'],
            color:"rgb(219,50,51)",
            yData:[12, 12, 14, 16, 19, 35, 18, 14, 12, 12, 12, 12]
        },
        frequency={
            title:"刺激频率与肌肉收缩特征",
            xData:['1Hz', '2Hz', '3Hz', '4Hz', '5Hz', '10Hz', '15Hz', '20Hz', '30Hz', '40Hz', '60Hz', '80Hz'],
            tip:['刺激电压'],
            color:"rgb(0,136,212)",
            yData:[8, 8, 9, 11, 24, 39, 28, 12, 14, 9, 8, 7]
        };

    function chart(obj_id,obj){
        obj.color=obj.color||"rgb(219,50,51)";
        echarts.init(document.getElementById(obj_id)).setOption(
        {
        backgroundColor: '#394056',
        title: {
        text: obj.title,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
            },
        left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: obj.tip,
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
        data: obj.xData
        }],
        yAxis: [{
            name:"收缩力(/g)",
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [
            {
                name: obj.tip[0],
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                            width: 1
                        }
                    },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color:obj.color.replace('rgb','rgba').replace(')',', 0.3)')
                            //color: 'rgba(137, 189, 27, 0.3)'
                        }, {
                            offset: 0.8,
                            color: obj.color.replace('rgb','rgba').replace(')',', 0)')
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: obj.color,
                        borderColor: obj.color.replace('rgb','rgba').replace(')',', 0.27)'),
                        borderWidth: 12

                    }
                },
                data: obj.yData
            }
        ]
        })
    }
    
    $(function(){
        // chart('main',frequency)
        // chart("main2",voltage)
    })



export default{
        name:"animalExper0",
        data(){
            return{
                myChart:'',
                show:true,
                winsHeight:window.screen.height
            }
        },
        mounted(){
            chart('main2',frequency)
            chart("main",voltage)
        },
        methods:{
            vue_charts(){
                
            }
        }
}

</script>
