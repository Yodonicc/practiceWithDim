import React from 'react'
import * as echarts from 'echarts';
import axios from 'axios'




class EChartsAndAxios extends React.Component{
    componentDidMount(){
        var chartDom = document.getElementById('myEcharts');
        var myChart = echarts.init(chartDom);
        var option;

        let temp = [100];
        axios.get('https://gank.io/api/v2/categories/Article')
            .then(function (response) {
                console.log(response);
                temp[1] = response.status;
                console.log(temp);
                option = {
                    xAxis: {
                        type: 'category',
                        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        data: ['Mon', 'Tue']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        // data: [150, 230, 224, 218, 135, 147, 260],
                        data: temp,
                        type: 'line'
                    }]
                };
                console.log(option);

                option && myChart.setOption(option);
            })
            .catch(function (error) {
                console.log(error);
            });

        
        
        
    }
    
    render(){
        return (
            <div id='myEcharts'
                style={{ width: 400,height: 400 }}
            ></div>
        )
    }
    
}

export default EChartsAndAxios