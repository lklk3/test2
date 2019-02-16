<template>
    <div>
       <div id="myCh" :style="{width: '540px', height: '450px'}"></div>
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
        let myChart = this.$echarts.init(document.getElementById('myCh'))
        myChart.setOption({
            title: {
                text: "Market Value",
                subtext: "$206789"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Day", "Night"],
                x: "right",
                y: "bottom"
            },
            toolbox: {
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    magicType: {
                        show: false,
                        type: ["line", "bar"]
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                },
                show: false
            },
            calculable: true,
            xAxis: [
                {
                    type: "value",
                    boundaryGap: [0, 0.01],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    nameTextStyle: {
                        fontSize: 0
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 0
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: "category",
                    data: ["Mon", "Two", "Three", "Four", "Five", "Six"],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisLabel: {
                        margin: 24
                    }
                }
            ],
            series: [
                {
                    name: "Day",
                    type: "bar",
                    data: [182, 234, 290, 256, 233, 299]
                },
                {
                    name: "Night",
                    type: "bar",
                    data: [193, 256, 302, 243, 289, 199]
                }
            ],
            grid: {
                x: 71,
                borderWidth: 0
            }
        })
    }
  }
}
</script>
<style>
    
</style>