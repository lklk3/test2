<template>
    <div class="mych">
       <div id="myCh" :style="{width: '500px', height: '400px'}" ></div>
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
                subtext: "$20467"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Day", "Night"],
                x: "right",
                y: "bottom",
                itemGap: 11,
                itemHeight: 12
            },
            toolbox: {
                show: false,
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
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: "value",
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: "category",
                    data: ["july", "april", "may", "june", "March"],
                    axisLabel: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: "Day",
                    type: "bar",
                    data: [234, 189, 200, 162, 150],
                    itemStyle: {
                        normal: {
                            color: "rgb(105, 165, 225)"
                        }
                    },
                    barWidth: 5,
                    barGap: "50%",
                    barCategoryGap: "50%",
                    barMinHeight: 0
                },
                {
                    name: "Night",
                    type: "bar",
                    data: [234, 256, 121, 174, 170],
                    barWidth: 5,
                    itemStyle: {
                        normal: {
                            color: "rgb(93, 208, 84)"
                        }
                    },
                    barGap: "50%",
                    barCategoryGap: "50%"
                }
            ],
            color: ["rgb(255, 0, 0)", "#87cefa", "#da70d6", "rgb(170, 255, 86)", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"],
            grid: {
                borderWidth: 0
            }
        })
    }
  }
}
</script>
<style lang="less" scoped>
    .mych{
        padding-top: 30px;
        padding-left: 30px;
    }
</style>