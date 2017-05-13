/**
 * Created by yifangts on 2017/4/21.
 */
// var echarts = require('echarts');
// var $ =require('jquery');
var $ =jQuery;
var Xarray=createX(.02,2.0);
var voltage={
        name:"voltage",
        title:"刺激电压与肌肉收缩特征",
        xData:Xarray,
        tip:['收缩力'],
        color:"rgb(219,50,51)",
        chart_end:100,
        yData:createY(Xarray,[ '1.2', '1.3', 15,  '1.3', '1.2'],1.38)
    },
    frequency={
        name:"frequency",
        title:"刺激频率与肌肉收缩特征",
        xData:[1,2,3,4,5,6,7,8,9,10,11,12],
        tip:['收缩力'],
        color:"rgb(0,136,212)",
        chart_end:100,
        yData:[1, 1.5, 8, 10, 11, 11.5, 11.7, 11.8, 11.2, 6, 2, 1]
    },
    single_xtemp=[.2,.4,.6,.8,1],
    single_ytemp=['.05', '.1', 15,  '.1', '.05'];

/**
 * 根据频率的值产生相应的数据,每次只产生一组数据,每组数据为100,获取多次的时候需要拼接数组
 * y轴数据需要根据频率手动产生...
 * @param value
 */
function frequency_data(value) {
    var xData=[],
        i=0,
        j=1;
    for(;i<10;i++){
        j=0;
        for(;j<10;j++){
            xData.push(value-1+"."+i+j+'Hz')
        }
    }
    var yData;
    switch (value){
        case 1:
            yData=[
                0, 0.01, 0.02, 0.04, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06, 0.11, 0.15, 0.23, 0.36, 0.53, 0.68, 0.86, 1.02, 1.17, 1.33, 1.51, 1.67, 1.84, 1.89, 1.95, 2.03, 2.09, 2.14, 2.17, 2.22, 2.23, 2.26, 2.27, 2.29, 2.29, 2.3, 2.29, 2.29, 2.26, 2.22, 2.15, 2.02, 1.87, 1.76, 1.64, 1.53, 1.41, 1.3, 1.2, 1.1, 1.03, 0.95, 0.9, 0.86, 0.79, 0.75, 0.71, 0.68, 0.62, 0.59, 0.54, 0.49, 0.46, 0.42, 0.38, 0.35, 0.31, 0.28, 0.25, 0.21, 0.18, 0.15, 0.13, 0.09, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.03, 0.02, 0.02, 0.01, 0.01, 0
            ];
            break;
        case 2:
            yData=[
                0, 0, 0, 0, 0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.53, 0.65, 0.82, 0.98, 1.15, 1.32, 1.46, 1.64, 1.77, 1.89, 2.03, 2.14, 2.22, 2.26, 2.29, 2.3, 2.29, 2.15, 1.87, 1.64, 1.41, 1.2, 1, 0.79, 0.62, 0.46, 0.31, 0.23, 0.18, 0.2, 0.21, 0.23, 0.24, 0.3, 0.4, 0.53, 0.65, 0.82, 0.98, 1.15, 1.32, 1.46, 1.64, 1.77, 1.89, 2.03, 2.14, 2.22, 2.26, 2.29, 2.3, 2.29, 2.15, 1.87, 1.64, 1.41, 1.2, 1, 0.9, 0.79, 0.71, 0.62, 0.54, 0.46, 0.38, 0.31, 0.25, 0.18, 0.13, 0.1, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.03, 0.02, 0.02, 0.01, 0.01, 0
            ];
            break;
        case 3:
            yData=[
                0, 0, 0, 0, 0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.53, 0.65, 0.82, 0.98, 1.15, 1.32, 1.46, 1.55, 1.68, 1.77, 1.85, 1.89, 1.95, 2.02, 2.05, 2.03, 1.98, 1.91, 1.8, 1.55, 1.33, 1.2, 1.15, 1.32, 1.46, 1.64, 1.77, 1.89, 2.03, 2.14, 2.22, 2.26, 2.29, 2.3, 2.29, 2.15, 1.87, 1.64, 1.41, 1.2, 1.32, 1.46, 1.64, 1.77, 1.89, 2.03, 2.23, 2.33, 2.47, 2.55, 2.63, 2.59, 2.55, 2.45, 2.34, 2.19, 1.87, 1.64, 1.41, 1.2, 1, 0.9, 0.79, 0.71, 0.62, 0.54, 0.46, 0.38, 0.31, 0.25, 0.18, 0.13, 0.1, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 4:
            yData=[0, 0, 0, 0, 0, 0.05, 0.11, 0.22, 0.33, 0.44, 0.58, 0.71, 0.9, 1.08, 1.45, 1.7, 1.95, 2.08, 2.22, 2.23, 2.1, 1.7, 1.46, 1.26, 1.28, 1.32, 1.35, 1.41, 1.53, 1.61, 1.8, 1.95, 2.23, 2.44, 2.52, 2.52, 2.06, 1.55, 1.45, 1.46, 1.46, 1.51, 1.61, 1.72, 1.8, 1.95, 2.08, 2.45, 2.72, 2.89, 2.8, 2.57, 2.06, 1.8, 1.81, 1.84, 1.86, 1.91, 1.98, 2.13, 2.29, 2.69, 2.99, 3.18, 3.08, 2.83, 2.27, 1.98, 1.55, 1.32, 1.1, 0.99, 0.87, 0.78, 0.68, 0.59, 0.51, 0.42, 0.34, 0.27, 0.2, 0.14, 0.11, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 5:
            yData=[0, 0, 0, 0, 0.05, 0.12, 0.24, 0.36, 0.48, 0.64, 0.78, 0.99, 1.19, 1.59, 1.87, 2.14, 2.29, 2.44, 2.45, 2.31, 1.87, 1.61, 1.41, 1.45, 1.49, 1.68, 1.77, 1.98, 2.14, 2.45, 2.68, 2.77, 2.77, 2.27, 1.7, 1.61, 1.61, 1.66, 1.89, 2.29, 2.69, 2.99, 3.18, 3.08, 2.83, 2.27, 1.98, 1.99, 2.02, 2.1, 2.18, 2.34, 2.52, 2.96, 3.29, 3.5, 3.39, 3.11, 2.5, 2.57, 2.77, 3.26, 3.62, 3.85, 3.73, 3.42, 2.75, 2.18, 1.7, 1.45, 1.21, 1.09, 0.96, 0.86, 0.75, 0.65, 0.56, 0.46, 0.37, 0.3, 0.22, 0.15, 0.12, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 6:
            yData=[0, 0, 0, 0, 0.05, 0.13, 0.26, 0.4, 0.53, 0.7, 0.86, 1.09, 1.31, 1.59, 1.87, 2.14, 2.29, 2.44, 2.45, 2.31, 1.87, 1.61, 1.59, 1.75, 2.06, 2.35, 2.52, 2.68, 2.69, 2.54, 2.06, 1.77, 1.59, 1.64, 1.98, 2.14, 2.45, 2.68, 2.77, 2.77, 2.27, 1.7, 1.89, 2.18, 2.35, 2.69, 2.95, 3.05, 3.05, 2.5, 1.87, 2.18, 2.52, 2.96, 3.29, 3.5, 3.39, 3.11, 2.5, 2.45, 2.57, 2.77, 3.26, 3.62, 3.85, 3.73, 3.42, 2.75, 1.87, 1.59, 1.33, 1.2, 1.06, 0.95, 0.83, 0.71, 0.62, 0.51, 0.41, 0.33, 0.24, 0.17, 0.13, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 7:
            yData=[0, 0, 0, 0, 0.05, 0.14, 0.29, 0.44, 0.58, 0.77, 0.95, 1.31, 1.59, 1.87, 2.14, 2.29, 2.44, 2.45, 2.31, 1.87, 1.75, 2.06, 2.35, 2.52, 2.68, 2.69, 2.54, 2.06, 1.77, 1.92, 2.27, 2.59, 2.77, 2.95, 2.96, 2.79, 2.27, 2.18, 2.35, 2.69, 2.95, 3.05, 3.05, 2.5, 2.08, 2.59, 2.96, 3.24, 3.35, 3.35, 2.75, 2.4, 2.77, 3.26, 3.62, 3.85, 3.73, 3.42, 2.75, 2.69, 2.83, 3.05, 3.59, 3.98, 4.23, 4.1, 3.76, 3.03, 2.06, 1.75, 1.46, 1.32, 1.17, 1.05, 0.91, 0.78, 0.68, 0.56, 0.45, 0.36, 0.26, 0.19, 0.14, 0.07, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 8:
            yData=[
                0, 0, 0, 0, 0.06, 0.15, 0.32, 0.48, 0.64, 0.85, 1.05, 1.44, 1.75, 2.06, 2.35, 2.52, 2.68, 2.69, 2.54, 2.06, 1.92, 2.27, 2.59, 2.77, 2.95, 2.96, 2.79, 2.27, 2.11, 2.5, 3.25, 3.26, 3.07, 2.5, 2.4, 2.59, 2.96, 3.24, 3.35, 3.35, 2.75, 2.85, 3.26, 3.56, 3.68, 3.68, 3.03, 2.64, 2.99, 3.43, 3.73, 3.86, 3.86, 3.18, 3.05, 3.59, 3.98, 4.23, 4.1, 3.03, 2.96, 3.95, 4.38, 4.65, 4.65, 4.51, 4.14, 3.33, 2.27, 1.93, 1.61, 1.45, 1.29, 1.15, 1, 0.86, 0.75, 0.62, 0.5, 0.4, 0.29, 0.21, 0.15, 0.08, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 9:
            yData=[
                0, 0, 0, 0, 0.07, 0.17, 0.35, 0.53, 0.7, 0.94, 1.15, 1.58, 1.92, 2.27, 2.59, 2.77, 2.95, 2.96, 2.79, 2.27, 2.11, 3.05, 3.25, 3.26, 3.07, 2.5, 2.32, 3.57, 3.59, 3.38, 2.75, 2.64, 3.26, 3.56, 3.68, 3.68, 3.03, 3.14, 3.59, 3.92, 4.05, 4.05, 3.33, 3.29, 3.77, 4.1, 4.25, 4.25, 3.5, 3.35, 3.45, 3.95, 4.32, 4.47, 4.47, 3.67, 3.52, 3.95, 4.38, 4.65, 4.51, 4.34, 4.82, 5.11, 5.11, 4.96, 4.55, 3.66, 2.5, 2.12, 1.77, 1.6, 1.42, 1.26, 1.1, 0.95, 0.82, 0.68, 0.55, 0.44, 0.32, 0.23, 0.17, 0.09, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 10:
            yData=[
                0, 0, 0, 0, 0.07, 0.17, 0.35, 0.53, 0.7, 0.94, 1.15, 1.58, 1.92, 2.27, 2.77, 2.95, 2.96, 2.79, 2.27, 2.11, 3.05, 3.25, 3.26, 3.07, 2.5, 2.32, 3.59, 3.38, 2.75, 2.64, 3.26, 3.56, 3.68, 3.68, 3.03, 3.14, 3.92, 4.05, 4.05, 3.33, 3.29, 4.1, 4.25, 4.25, 3.5, 3.35, 3.45, 3.95, 4.32, 4.47, 3.67, 3.52, 3.63, 4.15, 4.69, 3.86, 3.71, 3.95, 4.38, 4.65, 4.51, 4.34, 4.82, 5.11, 5.11, 4.96, 4.55, 3.66, 2.5, 2.12, 1.77, 1.6, 1.42, 1.26, 1.1, 0.95, 0.82, 0.68, 0.55, 0.44, 0.32, 0.23, 0.17, 0.09, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 11:
            yData=[
                0, 0, 0, 0, 0.08, 0.19, 0.38, 0.58, 0.77, 1.03, 1.27, 1.74, 2.11, 2.5, 3.05, 3.25, 3.26, 3.07, 2.5, 2.32, 3.35, 3.57, 3.59, 3.38, 2.75, 2.55, 3.95, 3.72, 3.03, 2.9, 3.59, 4.05, 4.05, 3.33, 3.45, 4.46, 4.46, 3.66, 3.62, 4.68, 4.68, 3.85, 3.69, 3.79, 4.75, 4.92, 4.04, 3.87, 3.99, 4.57, 5.16, 4.25, 4.08, 4.34, 4.82, 5.11, 4.96, 4.77, 5.05, 5.35, 5.23, 5, 5.3, 5.62, 5.62, 5.46, 5.01, 4.03, 2.75, 2.33, 1.95, 1.76, 1.56, 1.39, 1.21, 1.05, 0.9, 0.75, 0.6, 0.48, 0.35, 0.25, 0.19, 0.1, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 12:
            yData=[
                0, 0, 0, 0, 0.09, 0.21, 0.42, 0.64, 0.85, 1.13, 1.4, 1.91, 2.32, 2.75, 3.57, 3.59, 3.38, 2.75, 2.55, 3.93, 3.95, 3.72, 3.03, 4.13, 4.15, 3.93, 3.18, 4.34, 4.09, 3.33, 3.19, 3.95, 4.46, 4.46, 3.66, 3.79, 4.91, 4.91, 4.03, 3.98, 5.15, 5.15, 4.23, 4.06, 4.17, 5.41, 4.44, 4.26, 4.39, 5.03, 5.68, 4.67, 4.49, 4.77, 5.3, 5.62, 5.46, 5.25, 5.56, 5.89, 5.75, 5.5, 5.83, 6.18, 6.18, 6.01, 5.51, 4.43, 3.02, 2.56, 2.14, 1.94, 1.72, 1.53, 1.33, 1.15, 0.99, 0.83, 0.66, 0.53, 0.38, 0.28, 0.21, 0.11, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 13:
            yData=[
                0, 0, 0, 0, 0.1, 0.23, 0.46, 0.7, 0.93, 1.24, 1.54, 2.1, 2.55, 3.03, 3.93, 3.95, 3.72, 3.03, 2.8, 4.32, 4.34, 4.09, 3.33, 4.54, 4.56, 3.5, 4.77, 4.5, 3.66, 3.51, 4.91, 4.91, 4.03, 3.68, 5.15, 5.15, 4.23, 4.17, 5.4, 5.4, 4.43, 4.38, 5.67, 4.65, 4.47, 4.59, 5.95, 4.88, 4.69, 4.83, 5.53, 5.14, 4.94, 5.25, 5.83, 6.18, 6.01, 5.77, 6.12, 6.48, 6.32, 6.05, 6.41, 6.8, 6.8, 6.61, 6.06, 4.87, 3.32, 2.82, 2.35, 2.13, 1.89, 1.68, 1.46, 1.27, 1.09, 0.91, 0.73, 0.58, 0.42, 0.31, 0.23, 0.12, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 14:
            yData= [0, 0, 0, 0, 0.11, 0.25, 0.51, 0.77, 1.02, 1.36, 1.69, 2.31, 2.8, 3.33, 4.32, 4.34, 4.09, 3.33, 3.08, 4.75, 4.77, 4.5, 3.66, 4.99, 5.02, 3.85, 5.25, 4.95, 4.03, 3.86, 5.4, 4.43, 4.05, 5.67, 4.65, 4.59, 5.94, 4.87, 4.82, 5.12, 4.92, 5.05, 5.37, 5.16, 5.31, 6.08, 5.65, 5.43, 5.42, 5.57, 6.39, 5.92, 5.69, 5.77, 6.41, 6.8, 6.61, 6.35, 6.73, 7.13, 6.95, 6.66, 7.05, 7.48, 7.48, 7.27, 6.67, 5.36, 3.65, 3.1, 2.59, 2.34, 2.08, 1.85, 1.61, 1.4, 1.2, 1, 0.8, 0.64, 0.46, 0.34, 0.25, 0.13, 0.07, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 15:
            yData=[0, 0, 0, 0, 0.12, 0.28, 0.56, 0.85, 1.12, 1.5, 1.86, 2.54, 3.08, 3.66, 4.75, 4.77, 4.5, 3.66, 3.39, 5.23, 5.25, 4.95, 4.03, 5.49, 5.52, 4.23, 5.78, 5.45, 4.43, 4.25, 5.94, 4.87, 4.45, 6.24, 5.12, 5.05, 6.53, 5.36, 5.3, 5.63, 5.41, 5.56, 5.91, 5.68, 5.84, 6.69, 6.22, 5.97, 5.96, 6.13, 7.03, 6.51, 6.26, 6.35, 7.05, 7.48, 7.27, 6.98, 7.4, 7.84, 7.65, 7.33, 7.75, 8.23, 8.23, 8, 7.34, 5.9, 4.01, 3.41, 2.85, 2.57, 2.29, 2.03, 1.77, 1.54, 1.32, 1.1, 0.88, 0.7, 0.51, 0.37, 0.28, 0.14, 0.08, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 16:
            yData=[0, 0, 0, 0, 0.13, 0.31, 0.62, 0.93, 1.23, 1.65, 2.05, 2.79, 3.39, 4.03, 5.23, 4.95, 4.03, 3.73, 5.75, 5.78, 4.43, 6.04, 6.07, 4.65, 6.36, 6, 4.87, 4.67, 6.53, 5.36, 4.89, 6.86, 5.63, 5.55, 5.9, 5.91, 5.83, 6.19, 5.83, 6.19, 5.95, 6.12, 6.5, 6.25, 6.42, 7.36, 6.84, 6.57, 6.56, 6.74, 7.73, 7.16, 6.89, 6.98, 7.75, 8.23, 8, 7.68, 8.14, 8.62, 8.41, 8.06, 8.53, 9.05, 9.05, 8.8, 8.07, 6.49, 4.41, 3.75, 3.14, 2.83, 2.52, 2.23, 1.95, 1.69, 1.45, 1.21, 0.97, 0.77, 0.56, 0.41, 0.31, 0.15, 0.09, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 17:
            yData=[
                0, 0, 0, 0, 0.14, 0.34, 0.68, 1.02, 1.35, 1.81, 2.26, 3.07, 3.73, 4.43, 5.75, 4.43, 4.1, 6.32, 6.36, 4.87, 6.64, 6.68, 5.12, 7, 5.36, 5.14, 7.18, 5.9, 5.38, 6.19, 6.1, 5.66, 6.5, 6.41, 6.49, 6.5, 6.41, 6.81, 6.41, 6.81, 6.55, 6.73, 7.15, 6.87, 7.06, 8.1, 7.52, 7.23, 7.22, 7.41, 8.5, 7.88, 7.58, 7.68, 8.53, 9.05, 8.8, 8.45, 8.95, 9.48, 9.25, 8.87, 9.38, 9.95, 9.95, 9.68, 8.88, 7.14, 4.85, 4.13, 3.45, 3.11, 2.77, 2.45, 2.14, 1.86, 1.59, 1.33, 1.07, 0.85, 0.62, 0.45, 0.34, 0.17, 0.1, 0.07, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 18:
            yData=[
                0, 0, 0, 0, 0.15, 0.37, 0.75, 1.12, 1.49, 1.99, 2.49, 3.38, 4.1, 4.87, 6.32, 4.87, 4.51, 6.95, 7, 5.36, 7.3, 7.35, 5.63, 7.7, 5.9, 5.65, 7.9, 6.49, 5.92, 6.81, 6.71, 6.23, 7.15, 7.05, 7.14, 7.15, 7.05, 7.49, 7.05, 7.49, 7.21, 7.4, 7.87, 7.56, 7.77, 8.91, 8.27, 7.95, 7.94, 8.15, 9.35, 8.67, 8.34, 8.45, 9.38, 9.95, 9.68, 9.29, 9.85, 10.43, 10.18, 9.76, 10.32, 10.94, 10.95, 10.65, 9.77, 7.85, 5.34, 4.54, 3.79, 3.42, 3.05, 2.69, 2.35, 2.05, 1.75, 1.46, 1.18, 0.94, 0.68, 0.5, 0.37, 0.19, 0.11, 0.08, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 19:
            yData=[
                0, 0, 0, 0, 0.17, 0.41, 0.82, 1.23, 1.64, 2.19, 2.74, 3.72, 4.51, 5.36, 6.95, 5.36, 7.64, 5.9, 8.03, 6.19, 8.47, 6.49, 6.21, 7.14, 6.51, 6.81, 6.51, 7.49, 6.85, 7.49, 7.38, 6.85, 7.87, 7.75, 7.85, 7.86, 7.75, 8.24, 7.75, 8.24, 7.93, 8.14, 8.66, 8.32, 8.55, 9.8, 9.1, 8.74, 8.73, 8.97, 10.29, 9.54, 9.17, 9.29, 10.32, 10.94, 10.65, 10.22, 10.84, 11.47, 11.2, 10.74, 11.35, 12.03, 12.05, 11.72, 10.75, 8.64, 5.87, 4.99, 4.17, 3.76, 3.35, 2.96, 2.59, 2.25, 1.92, 1.61, 1.3, 1.03, 0.75, 0.55, 0.41, 0.21, 0.12, 0.09, 0.07, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 20:
            yData=[
                0, 0, 0, 0, 0.19, 0.45, 0.9, 1.35, 1.8, 2.41, 3.01, 4.09, 4.96, 5.9, 7.64, 5.9, 6.49, 6.81, 7.14, 6.83, 7.15, 7.49, 7.16, 7.85, 7.16, 7.49, 7.16, 8.24, 7.54, 8.24, 8.12, 7.54, 8.66, 8.53, 8.64, 8.65, 8.53, 9.06, 8.53, 9.06, 8.72, 8.95, 9.53, 9.15, 9.4, 10.78, 10.01, 9.61, 9.6, 9.87, 11.32, 10.49, 10.09, 10.22, 11.35, 12.03, 11.72, 11.24, 11.92, 12.62, 12.32, 11.81, 12.48, 13.23, 13.25, 12.89, 11.82, 9.5, 6.46, 5.49, 4.59, 4.14, 3.68, 3.26, 2.85, 2.48, 2.11, 1.77, 1.43, 1.13, 0.83, 0.6, 0.45, 0.23, 0.13, 0.1, 0.08, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 21:
            yData=[
                0, 0, 0, 0, 0.21, 0.5, 0.99, 1.49, 1.98, 2.65, 3.31, 4.5, 5.46, 6.49, 6.49, 5.75, 6.81, 7.49, 7.85, 7.51, 7.86, 8.24, 7.88, 8.64, 7.88, 8.24, 7.88, 9.06, 8.29, 9.06, 8.93, 8.29, 9.53, 9.38, 9.5, 9.52, 9.38, 9.97, 9.38, 9.97, 9.59, 9.85, 10.48, 10.07, 10.34, 11.86, 11.01, 10.57, 10.56, 10.86, 12.45, 11.54, 11.1, 11.24, 12.48, 13.23, 12.89, 12.36, 13.11, 13.88, 13.55, 12.99, 13.73, 14.55, 14.58, 14.18, 13, 10.45, 7.11, 6.04, 5.05, 4.55, 4.05, 3.59, 3.14, 2.73, 2.32, 1.95, 1.57, 1.24, 0.91, 0.66, 0.5, 0.25, 0.14, 0.11, 0.09, 0.07, 0.06, 0.05, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 22:
            yData=[
                0, 0, 0, 0, 0.23, 0.55, 1.09, 1.64, 2.18, 2.91, 3.64, 4.95, 6.01, 7.14, 7.14, 6.32, 7.49, 8.24, 8.64, 8.26, 8.65, 9.06, 8.67, 9.5, 8.67, 9.06, 8.67, 9.97, 9.12, 9.97, 9.82, 9.12, 10.48, 10.32, 10.45, 10.47, 10.32, 10.97, 10.32, 10.97, 10.55, 10.84, 11.53, 11.08, 11.37, 13.05, 12.11, 11.63, 11.62, 11.95, 13.69, 12.69, 12.21, 14.18, 13.6, 12.99, 14.42, 14.92, 14.29, 14.42, 15.27, 14.9, 14.29, 15.1, 16.04, 15.6, 14.3, 11.5, 7.82, 6.64, 5.55, 5, 4.45, 3.95, 3.45, 3, 2.55, 2.14, 1.73, 1.36, 1, 0.73, 0.55, 0.27, 0.15, 0.12, 0.1, 0.08, 0.07, 0.06, 0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 23:
            yData=[
                0, 0, 0, 0, 0.25, 0.6, 1.2, 1.8, 2.4, 3.2, 4, 5.45, 6.61, 7.85, 7.85, 6.95, 9.06, 9.5, 9.09, 9.52, 9.97, 9.54, 10.45, 9.54, 9.97, 9.54, 10.97, 10.03, 10.97, 10.8, 10.03, 11.53, 11.35, 11.5, 11.35, 12.07, 11.35, 12.07, 11.6, 11.92, 12.68, 12.19, 12.51, 13.32, 12.79, 12.79, 13.14, 13.96, 13.43, 13.14, 15.06, 13.96, 13.43, 15.6, 14.96, 14.29, 15.86, 16.41, 15.72, 15.86, 16.8, 16.39, 15.72, 16.61, 17.64, 17.16, 15.73, 12.65, 8.6, 7.3, 6.1, 5.5, 4.9, 4.35, 3.8, 3.3, 2.8, 2.35, 1.9, 1.5, 1.1, 0.8, 0.6, 0.3, 0.16, 0.13, 0.11, 0.09, 0.08, 0.07, 0.06, 0.06, 0.05, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 24:
            yData=[
                0, 0, 0, 0, 0.27, 0.66, 1.32, 1.98, 2.64, 3.52, 4.4, 6, 7.27, 8.64, 8.64, 7.65, 9.97, 10.45, 10, 10.97, 10.49, 11.5, 10.49, 10.97, 10.49, 12.07, 11.03, 12.07, 11.88, 11.03, 12.68, 12.48, 12.48, 13.28, 12.48, 13.28, 12.76, 13.11, 13.95, 13.41, 13.76, 14.65, 14.07, 14.07, 15.36, 14.77, 14.45, 16.57, 15.36, 14.77, 17.16, 16.46, 15.72, 18.05, 17.29, 17.45, 18.48, 18.03, 17.29, 18.27, 19.4, 18.88, 17.3, 19.2, 20.37, 19.85, 18.15, 13.92, 9.46, 8.03, 6.71, 6.05, 5.39, 4.79, 4.18, 3.63, 3.08, 2.59, 2.09, 1.65, 1.21, 0.88, 0.66, 0.33, 0.18, 0.14, 0.12, 0.1, 0.09, 0.08, 0.07, 0.07, 0.06, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
        break;
        case 25:
            yData=[
                0, 0, 0, 0, 0.3, 0.73, 1.45, 2.18, 2.9, 3.87, 4.84, 6.6, 8, 9.5, 9.5, 10.97, 11.5, 11, 12.07, 11.54, 12.65, 11.54, 12.07, 11.54, 13.28, 12.13, 13.28, 13.07, 12.74, 13.95, 13.73, 13.95, 13.73, 13.73, 14.61, 13.73, 14.61, 14.04, 14.42, 15.34, 14.75, 15.14, 16.11, 15.48, 15.48, 16.9, 16.25, 15.89, 18.23, 16.9, 16.25, 18.88, 18.11, 17.29, 19.85, 19.02, 19.19, 20.33, 19.83, 19.02, 20.1, 20.77, 19.03, 21.12, 22.41, 21.83, 19.97, 15.31, 10.41, 8.83, 7.38, 6.66, 5.93, 5.27, 4.6, 3.99, 3.39, 2.85, 2.3, 1.81, 1.33, 0.97, 0.73, 0.36, 0.2, 0.15, 0.13, 0.11, 0.1, 0.09, 0.08, 0.08, 0.07, 0.06, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 26:
        yData=[
            0, 0, 0, 0, 0.33, 0.8, 1.59, 2.4, 3.19, 4.26, 5.32, 7.26, 8.8, 10.45, 10.45, 12.07, 12.65, 12.1, 13.28, 12.69, 13.92, 12.69, 13.28, 12.69, 14.61, 13.34, 14.61, 14.38, 14.01, 15.34, 15.1, 15.1, 15.1, 16.07, 15.1, 16.07, 15.44, 15.86, 16.87, 16.22, 16.65, 17.72, 17.03, 17.03, 18.59, 17.87, 17.48, 18.59, 17.87, 19.02, 21.83, 20.92, 21.11, 22.36, 21.81, 20.92, 22.11, 22.85, 20.93, 21.95, 23.23, 24.01, 21.97, 23.23, 24.65, 24.01, 21.97, 16.84, 11.45, 9.71, 8.12, 7.33, 6.52, 5.8, 5.06, 4.39, 3.73, 3.14, 2.53, 1.99, 1.46, 1.07, 0.8, 0.4, 0.22, 0.17, 0.14, 0.12, 0.11, 0.1, 0.09, 0.09, 0.08, 0.07, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
        break;
        case 27:
            yData=[0, 0, 0, 0, 0.36, 0.88, 1.75, 2.64, 3.51, 4.69, 5.85, 7.99, 9.68, 11.5, 11.5, 13.28, 13.92, 13.31, 14.61, 13.96, 15.31, 13.96, 14.61, 13.96, 16.07, 14.67, 16.07, 15.82, 15.41, 16.87, 16.61, 16.61, 16.61, 17.68, 16.61, 17.68, 16.98, 17.45, 18.56, 17.84, 18.32, 19.49, 18.73, 18.73, 20.45, 19.66, 19.23, 20.45, 20.65, 20.21, 21.49, 19.66, 24.01, 23.01, 23.22, 24.6, 23.99, 23.01, 24.32, 25.14, 23.02, 25.55, 26.41, 24.17, 27.11, 26.41, 24.17, 18.52, 12.6, 10.68, 8.93, 8.06, 7.17, 6.38, 5.57, 4.83, 4.1, 3.45, 2.78, 2.19, 1.61, 1.18, 0.88, 0.44, 0.24, 0.19, 0.15, 0.13, 0.12, 0.11, 0.1, 0.1, 0.09, 0.08, 0.04, 0.04, 0.03, 0.02, 0.01, 0];
            break;
        case 28:
            yData=[
                0, 0, 0, 0, 0.4, 0.97, 1.93, 2.9, 3.86, 5.16, 6.44, 8.79, 10.65, 12.65, 12.65, 14.61, 15.31, 14.64, 16.07, 15.36, 16.84, 15.36, 16.07, 15.36, 17.68, 16.14, 17.68, 17.4, 16.95, 18.56, 18.27, 18.27, 18.27, 19.45, 18.27, 19.45, 18.68, 19.19, 20.42, 19.62, 20.15, 21.44, 20.6, 20.6, 22.5, 21.63, 21.15, 22.5, 22.71, 22.23, 23.64, 21.63, 26.41, 22.71, 27.72, 26.57, 26.81, 25.31, 26.75, 27.65, 25.32, 28.1, 29.05, 26.59, 29.82, 29.05, 26.59, 20.37, 13.86, 11.75, 9.82, 8.87, 7.89, 7.02, 6.13, 5.31, 4.51, 3.8, 3.06, 2.41, 1.77, 1.3, 0.97, 0.48, 0.26, 0.21, 0.17, 0.14, 0.13, 0.12, 0.11, 0.11, 0.1, 0.09, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 29:
            yData=[
                0, 0, 0, 0, 0.44, 1.07, 2.12, 3.19, 4.25, 5.68, 7.08, 9.67, 11.72, 13.92, 13.92, 16.07, 16.84, 16.1, 17.68, 16.9, 18.52, 16.9, 17.68, 16.9, 19.45, 17.75, 19.45, 19.14, 18.65, 20.42, 20.1, 20.1, 20.1, 21.39, 20.1, 21.39, 20.55, 21.11, 22.46, 21.58, 22.17, 23.58, 22.66, 22.66, 24.75, 23.79, 23.27, 24.75, 24.98, 24.45, 26, 23.79, 24.98, 26.24, 30.49, 29.23, 29.49, 27.84, 29.43, 30.41, 27.85, 30.91, 31.95, 29.25, 32.8, 31.95, 29.25, 22.41, 15.25, 12.93, 10.8, 9.76, 8.68, 7.72, 6.74, 5.84, 4.96, 4.18, 3.37, 2.65, 1.95, 1.43, 1.07, 0.53, 0.29, 0.23, 0.19, 0.15, 0.14, 0.13, 0.12, 0.12, 0.11, 0.1, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
        case 30:
            yData=[
                0, 0, 0, 0, 0.2, 0.48, 1.18, 2.33, 3.51, 4.68, 6.25, 7.79, 10.64, 12.89, 15.31, 15.31, 17.68, 18.52, 17.71, 19.45, 18.59, 20.37, 18.59, 19.45, 18.59, 21.39, 19.53, 21.39, 21.05, 20.51, 22.46, 22.11, 22.11, 22.11, 23.53, 22.11, 23.53, 22.61, 23.22, 24.71, 23.74, 24.39, 25.94, 24.93, 24.93, 27.23, 26.17, 25.6, 27.23, 27.48, 26.9, 28.6, 26.17, 32.28, 30.3, 34.06, 30.62, 32.37, 33.45, 30.64, 35.14, 34.94, 32.18, 36.08, 35.77, 35.14, 32.18, 24.65, 16.78, 14.22, 11.88, 10.74, 9.55, 8.49, 7.41, 6.42, 5.46, 4.6, 3.71, 2.92, 2.15, 1.57, 1.18, 0.58, 0.32, 0.25, 0.21, 0.17, 0.15, 0.14, 0.13, 0.13, 0.12, 0.11, 0.04, 0.04, 0.03, 0.02, 0.01, 0
            ];
            break;
    }
    return {
        xData,
        yData,
    }
}

function newArr(arr) {
    var arr2=arr,newA=[];
    for(var i=19;i>0;i--){
        newA=arr2.map((j)=>Number((j/1.1).toFixed(2)))
        arr2=newA;
    }
    return newA
}

/**
 * 从小递增模板
 * @param aArr
 * @param bArr
 * @param percentArr
 * @returns {{Num: Array, Str: Array}}
 */
function tempX(aArr,bArr,percentArr) {
    var arr=[],brr=[];
    for(var i=0;i<aArr.length;i++){
        for(var j=0;j<bArr.length;j++){
            arr[arr.length]=typeof(bArr[j])=='number'?bArr[j]*percentArr[i]:bArr[j]
            brr[brr.length]=aArr[i]+j*aArr[i]/bArr.length+'Hz'
        }

    }
    return{
        Num:arr,
        Str:brr
    }
}



/**
 * 实验强度选择数组,电压从0.1--1.48V 频率1-30Hz
 * type  1表示是频率实验,无表示电压实验
 * @param type
 * @returns {Array}
 */
function powerArr(type){
    var a=[],b=0.1;
    if(type==1){
        for(var i=1;i<=30;i++){
            a.push(i)
        }
    }else{
        for(b;b<=1.5;b+=0.02){
            a[a.length]=b.toFixed(2)
        }
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

/**
 * 绘制图标波形
 * @param obj_id
 * @param obj
 */
function chart(obj_id,obj){
    obj.color=obj.color||"rgb(219,50,51)";
    if(obj.name==="frequency"){
        obj.chart_end=obj.yData.length<=100?100:1/(obj.yData.length/100)*50>30?1/(obj.yData.length/100)*50:30;
    }else{
        obj.chart_end=500/obj.yData.length;
        obj.chart_end=obj.chart_end>30?obj.chart_end:30;
    }
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
                itemWidth: 10,
                itemHeight: 5,
                itemGap: 13,
                data: obj.tip,
                right: '4%',
                textStyle: {
                    fontSize: 12,
                    color: '#F1F1F3'
                }
            },
            dataZoom: [
                {
                    show: true,
                    // show: false,
                    realtime: true,
                    start: 0,
                    end: obj.chart_end||100,

                    // x:10,
                    // y:180,
                    // top:0,
                    // bottom:0
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 0,
                    end: 10
                }
            ],
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
            show:false,//实验显示
            addUp:false,//增加
            addAuto:false,//是否从小递增开关控制
            powerInput:"",//强度选则显示
            isSeries:false,//是否自动刺激|串刺激
            stimulatioStyle:"1",//实验方法 1电压,2频率
            stimulatioImpu:'1',
            //实验方法
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
            //实验刺激输入
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
            single_ydata:[],//电压刺激数据
            single_xdata:[],//电压刺激数据
            single_count:0,//电压刺激计数
            //电压实验强度控制
            powerChoose: {//电压实验时强度选择
                values: powerArr(),
                select:0,
                series_text:"自动强度刺激",
                intervalNum:""
            },
            //频率实验强度控制
            powerChoose2: {//频率实验时强度选择
                values: powerArr(1),
                select:0,
                series_text:"串刺激",
                intervalNum:"",
                xData:[],
                yData:[]
            },
        }
    },
    mounted(){
        //开启长按增加
        this.longPress()
    },
    methods:{
        /**
         * 实验强度长按增加
         */
        longPress() {
            var timer="",btn=$("#powerAdd,#powerSub,#powerAdd2,#powerSub2"),_this=this,type=-1;
            btn.on('touchstart',function (e) {
                var delay=100;
                if(this.stimulatioStyle==2)delay=200
                type=e.target.id.indexOf("A")>0?1:-1;
                timer=setInterval(function () {
                    _this.onValuesChange(type)
                },delay)
            })
            btn.on("touchend",function () {
                clearInterval(timer)
            })
            btn.bind('contextmenu', function(e) {
                e.preventDefault();
            })
        },
        /**
         * 实验强度变化引起强度显示变化
         * @param type
         */
        onValuesChange(type){
            var obj=this.powerChoose;
            if(this.stimulatioStyle=="2")obj=this.powerChoose2;
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
        /**
         * 电压刺激实验,单刺激
         * @param type
         */
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
            //电压单刺激的时候,每次只有一个波形,并且波形不累加
            if(type==0&&this.stimulatioStyle=="1"){
                this.single_count=1
                this.single_ydata=transform_ydata(single_ytemp,obj.values[obj.select])
                // this.single_ydata=[0,5,10,15,20,25,30]
                this.single_xdata=single_xtemp
            }else{//自动刺激的时候,波形累加
                this.single_count+=1;
                this.single_ydata=this.single_ydata.concat(transform_ydata(single_ytemp,obj.values[obj.select]))
                this.single_xdata=this.single_xdata.concat(single_xtemp)
            }
            voltage.yData=this.single_ydata
            voltage.xData=this.single_xdata
            chart('main',voltage)
        },
        /**
         * 电压刺激实验,自动强度刺激
         */
        series_ciji(){
            voltage.yData=[]
            voltage.xData=[]
            this.isSeries=true;
            var obj=this.powerChoose,_this=this;
            if(obj.series_text=="自动强度刺激"){
                _this.single_ciji(1)
                obj.intervalNum=setInterval(function () {
                    if(_this.isSeries==true){
                        _this.single_ciji(1)
                    }else{
                        obj.series_text='自动强度刺激'
                        this.single_count==0
                        clearInterval(obj.intervalNum)
                    }
                },1400)
                obj.series_text='停止刺激'
            }else{
                obj.series_text='自动强度刺激'
                this.single_count==0
                clearInterval(obj.intervalNum)
            }
        },
        /**
         * 实验方法选择控制,停止正在进行的自动刺激,串刺激,从小递增
         */
        experMethod(){
            this.stimulatioImpu=this.stimulatioStyle=='1'?'1':'3';
            this.addAuto=false;
            this.isSeries=false;
            this.powerChoose.series_text='自动强度刺激'
            this.powerChoose2.series_text='串刺激'
            clearInterval(this.powerChoose.intervalNum)
            clearInterval(this.powerChoose2.intervalNum)
        },
        /**
         * 从小递增方法
         */
        isAddUp(){
            var obj=this.powerChoose,
                obj2=this.powerChoose2;
            if(this.addAuto){
                obj.series_text='自动强度刺激'
                obj2.series_text='串刺激'
                this.single_count=0
                this.single_ydata=[]
                clearInterval(obj.intervalNum)
                clearInterval(obj2.intervalNum)
                if(this.stimulatioStyle=='1'){
                    $("#exper").html('<div id="main2"></div>').show()
                    this.single_count=0
                    this.single_ydata=[]
                    voltage.xData=createX(.02,2.0)
                    voltage.yData=createY(voltage.xData,[ '1.2', '1.3', 15,  '1.3', '1.2'],1.38)
                    chart('main2',voltage)
                }else{
                    var str,idName;
                    str='<div id="main2"></div>';
                    idName='main2';
                    var d=tempX([1,2,3,4,6,12,24],['1','1.2',10,12,13.2,11,7,'1.2','1'],[.1,.2,.3,.4,.8,2.2,2.5])
                    frequency.xData=d.Str
                    frequency.yData=d.Num
                    $("#exper").html(str).show()
//                this.main1=true
                    chart(idName,frequency)
                }
            }else{

            }
        },
        /**
         * 频率刺激实验方法
         * @param type 0表示单刺激,否则为串刺激
         */
        vue_charts(type){
            var str,idName,d;
            var obj=this.powerChoose2,_this=this;
            this.addAuto=false;
            str='<div id="main2"></div>';
            idName='main2';
            if(type==0){
                this.isSeries=false;
                d=frequency_data(obj.values[obj.select])
                frequency.xData=d.xData
                frequency.yData=d.yData
                frequency.chart_end=100
                clearInterval(obj.intervalNum)
            }else{
                obj.xData=[];
                obj.yData=[];
                obj.select=0;
                this.isSeries=true;
                if(obj.series_text=="串刺激"){
                    obj.series_text='停止刺激'
                    d=frequency_data(obj.values[obj.select])
                    obj.xData=obj.xData.concat(d.xData)
                    obj.yData=obj.yData.concat(d.yData)
                    frequency.xData=obj.xData
                    frequency.yData=obj.yData
                    // chart(idName,frequency)

                    // _this.vue_charts(0)
                    obj.intervalNum=setInterval(function () {
                        obj.chart_end=101;
                        _this.onValuesChange(1)
                        if(obj.select==29||_this.isSeries==false||_this.addAuto==true){
                            clearInterval(obj.intervalNum)
                            obj.series_text='串刺激'
                        }
                        d=frequency_data(obj.values[obj.select])
                        obj.xData=obj.xData.concat(d.xData)
                        obj.yData=obj.yData.concat(d.yData)
                        frequency.xData=obj.xData
                        frequency.yData=obj.yData
                        chart(idName,frequency)
                    },1400)
                }else{
                    obj.series_text='串刺激'
                    this.single_count==0
                    clearInterval(obj.intervalNum)
                }
            }

            $("#exper").html(str).show()
//                this.main1=true
            chart(idName,frequency)
        },
        /**
         * 返回实验文档
         */
        return_text(){
            $("#exper").hide()
        },

        // styleChange(){
        //     if(this.stimulatioImpu=='1'){
        //         voltage.xData=createX(.02,2.0)
        //         voltage.yData=createY(voltage.xData,['1.2', '1.3',  15,  '1.3', '1.2'],1.38)
        //     }else if(this.stimulatioImpu=='2'){
        //         voltage.xData=createX(.05,3.0)
        //         voltage.yData=createY(voltage.xData,[ '1.2', '1.3',  15,  '1.3', '1.2'],1.38)
        //     }
        // }
    }
}
