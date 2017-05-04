/**
 * Created by Beiing on 2017/4/21.
 */
// var echarts = require('echarts');
// var $ =require('jquery');
var $ =jQuery;
var Xarray=createX(.02,2.0);
var voltage={
        title:"刺激电压与肌肉收缩特征",
        xData:Xarray,
        tip:['收缩力'],
        color:"rgb(219,50,51)",
        yData:createY(Xarray,[ '1.2', '1.3', 15,  '1.3', '1.2'],1.38)
    },
    frequency={
        title:"刺激频率与肌肉收缩特征",
        xData:[1,2,3,4,5,6,7,8,9,10,11,12],
        tip:['收缩力'],
        color:"rgb(0,136,212)",
        yData:[1, 1.5, 8, 10, 11, 11.5, 11.7, 11.8, 11.2, 6, 2, 1]
    },
    single_xtemp=[.2,.4,.6,.8,1],
    single_ytemp=[ '.05', '.1', 15,  '.1', '.05'];

function tempX(aArr,bArr,percentArr) {
    var arr=[],brr=[];
    for(var i=0;i<aArr.length;i++){
        for(var j=0;j<bArr.length;j++){
            arr[arr.length]=typeof(bArr[j])=='number'?bArr[j]*percentArr[i]:bArr[j]
            brr[brr.length]=aArr[i]+j*aArr[i]/bArr.length+'Hz'
        }

    }
//        console.log(arr)
//        console.log(brr)
    return{
        Num:arr,
        Str:brr
    }
}

function powerArr(){
    var a=[],b=0.1;
    for(b;b<=1.5;b+=0.02){
        a[a.length]=b.toFixed(2)
    }
    return a;
}

function transform_ydata(array,k) {
    return array.map(function (item) {
//            return typeof (item)==="number"?item*k:item
        return (item*k).toFixed(2)
    })
}



function transform_xdata(array,count) {
    return array.map(function (item) {
        return (parseInt(Math.round(item*count*100)))/100
    })
}

$(function(){
    $("#exper").html('<div id="main"></div>').show()
    voltage.yData=[]
    chart('main',voltage)
})

/**
 * 根据传入的强度增量,X轴最值,最大刺激强度生成一个X轴坐标数组
 * @param step 强度增量 Number
 * @param target X轴最值 Number
 * @param max   最大刺激强度 Number
 * @returns {Array}
 */
function createX(step,target) {
    var arr=[];arr[0]=.1
    for(var i=1;arr[i-1]<target;i++){
        var a;
        if(arr[i-1]<target/3){
            a=arr[i-1]+step/2
        }else if(arr[i-1]<target/2){
            a=arr[i-1]+step
        }else{
            a=arr[i-1]+step*2
        }
        arr[i]=parseFloat(a.toFixed(2))
    }
    return arr;
}

/**
 * 根据传入的X轴坐标数组和Y轴模板数组,通过不同的放大倍数,将模板数组进行处理,并组成数组返回
 * @param Xarr X轴坐标数组 Array
 * @param Yarr  Y轴模板数组 Array  对于数字将会进行处理,字符串不处理
 * @returns {Array}
 */
function createY(Xarr,Yarr,max) {
    var newArr=[],aaa='';
    for(var i=0,e=0;i<Xarr.length;i++){
        if(typeof(Yarr[e])=='number'){
            aaa=Xarr[i]>max?max:Xarr[i];
            var a=Yarr[e]*aaa;
            newArr[i]=parseFloat(a.toFixed(2))
        }else {
            newArr[i]=Yarr[e]
        }
        e++
        if(e==Yarr.length){
            e=0
        }
    }
    return newArr
}

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
            // dataZoom: [
            //     {
            //         show: true,
            //         realtime: true,
            //         start: 0,
            //         end: 10
            //     },
            //     {
            //         type: 'inside',
            //         realtime: true,
            //         start: 25,
            //         end: 85
            //     }
            // ],
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
export default{
    name:"animalExper0",
    data(){
        return{
            myChart:'',
            show:true,
            addUp:false,
            addAuto:"",
            isSeries:false,
            stimulatioStyle:"1",
            stimulatioImpu:'1',
            experStyle:[
                {
                    label: '电压',
                    value: '1',
                },
                {
                    label: '频率',
                    value: '2'
                }
            ],
            experImpu1:[
                {
                    label: '单刺激',
                    value: '1'
                },
                {
                    label: '自动强度刺激',
                    value: '2'
                }
            ],
            experImpu2:[
                {
                    label:'串刺激',
                    value:'3'
                }
            ],
            winsHeight:window.screen.height,
            single_ydata:[],
            single_xdata:[],
            single_count:0,
            powerChoose: {
                values: powerArr(),
                select:0,
                series_text:"自动强度刺激",
                intervalNum:""
            },
        }
    },
    mounted(){
        this.longPress()
    },
    methods:{
        longPress() {
            var timer="",btn=$("#powerAdd,#powerSub"),_this=this,type=-1;
            btn.on('touchstart',function (e) {
                type=e.target.id=='powerAdd'?1:-1;
                timer=setInterval(function () {
                    _this.onValuesChange(type)
                },100)
            })
            btn.on("touchend",function () {
                clearInterval(timer)
            })
        },
        onValuesChange(type){
            var obj=this.powerChoose;
            if(type>0){
                if(obj.select>obj.values.length-2){
                    obj.select=obj.values.length-1
                }else{
                    obj.select+=1
                }
            }else{
                if(obj.select<1){
                    obj.select=0
                }else{
                    obj.select-=1
                }
            }
        },
        single_ciji(type){
            var obj=this.powerChoose;
            this.addAuto=false;
            if(type==0){
                if(this.isSeries){
                    this.isSeries=false
                    obj.series_text='自动强度刺激'
                    this.single_count=0
                    this.single_ydata=[]
                    clearInterval(obj.intervalNum)
                }
            }
            $("#exper").html('<div id="main"></div>').show()
            if(this.single_count==0){
                this.single_xdata=[];
            }
            this.single_count+=1;
            this.single_ydata=this.single_ydata.concat(transform_ydata(single_ytemp,obj.values[obj.select]))
            this.single_xdata=this.single_xdata.concat(single_xtemp)
            voltage.yData=this.single_ydata
            voltage.xData=this.single_xdata
            chart('main',voltage)
        },
        series_ciji(){
            voltage.yData=[]
            voltage.xData=[]
            this.isSeries=true;
            var obj=this.powerChoose,_this=this;
            if(obj.series_text=="自动强度刺激"){
                _this.single_ciji(1)
                obj.intervalNum=setInterval(function () {
                    _this.single_ciji(1)
                },1400)
                obj.series_text='停止刺激'
            }else{
                obj.series_text='自动强度刺激'
                this.single_count==0
                clearInterval(obj.intervalNum)
            }
        },
        experMethod(){
            this.stimulatioImpu=this.stimulatioStyle=='1'?'1':'3';this.addAuto=false;
            this.powerChoose.series_text='自动强度刺激'
            clearInterval(this.powerChoose.intervalNum)
        },
        isAddUp(){
            var obj=this.powerChoose;
            if(this.addAuto){
                if(obj.series_text=='停止刺激'){
                    obj.series_text='自动强度刺激'
                    this.single_count=0
                    this.single_ydata=[]
                    clearInterval(obj.intervalNum)
                }
                if(this.stimulatioStyle=='1'){
                    $("#exper").html('<div id="main2"></div>').show()
                    this.single_count=0
                    this.single_ydata=[]
                    voltage.xData=createX(.02,2.0)
                    voltage.yData=createY(voltage.xData,[ '1.2', '1.3', 15,  '1.3', '1.2'],1.38)
                    chart('main2',voltage)
                }else{
                    var str,idName,obj;
                    str='<div id="main2"></div>';
                    idName='main2';
                    var d=tempX([1,2,3,4,6,12,24],['1','1.2',10,12,13.2,11,7,'1.2','1'],[.1,.2,.3,.4,.8,2.2,2.5])
                    frequency.xData=d.Str
                    frequency.yData=d.Num
                    obj=frequency
                    $("#exper").html(str).show()
//                this.main1=true
                    chart(idName,obj)
                }
            }else{

            }
        },
        vue_charts(type){
            var str,idName,obj;
            if(this.stimulatioStyle=="1"){
                str='<div id="main"></div>';
                idName='main';
                obj=voltage
            }else{
                str='<div id="main2"></div>';
                idName='main2';
                var d=tempX([1,2,3,4,6,12,24],['1','1.2',10,12,13.2,11,7,'1.2','1'],[.1,.2,.3,.4,.8,2.2,2.5])
                frequency.xData=d.Str
                frequency.yData=d.Num
                obj=frequency
            }
            $("#exper").html(str).show()
//                this.main1=true
            chart(idName,obj)
        },
        return_text(){
            $("#exper").hide()
        },
        styleChange(){
            if(this.stimulatioImpu=='1'){
                voltage.xData=createX(.02,2.0)
                voltage.yData=createY(voltage.xData,['1.2', '1.3',  15,  '1.3', '1.2'],1.38)
            }else if(this.stimulatioImpu=='2'){
                voltage.xData=createX(.05,3.0)
                voltage.yData=createY(voltage.xData,[ '1.2', '1.3',  15,  '1.3', '1.2'],1.38)
            }
        }
    }
}
