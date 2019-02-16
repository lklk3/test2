<template>
    <div>
        <div id="myChart" :style="{width: '540px', height: '450px'}"></div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted(){
    this.drawLine();
  },
    methods: {
        drawLine(){
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            myChart.setOption({
        title : {
            text: 'Pageviews by users (past 5 days)',
            x:'left',
            y:'30px'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            y:'center',
            textStyle: {
                padding:10,
                fontSize: 24,
            },
            itemWidth: 0,
            data:['23:01:04','$15596','$3596']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true, 
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['60%', '60%'],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {value:335, name:'23:01:04'},
                    {value:310, name:'$15596'},
                    {value:234, name:'$3596'}
                ]
            }
        ]
              });
        }
      }
}
</script>
<style>
    
</style>