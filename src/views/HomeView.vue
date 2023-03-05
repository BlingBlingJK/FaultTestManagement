<template>
  <div class="home">
    <div class="content">
      <div class="box1">
        <h2>
          <dv-border-box-8>大屏数据可视化</dv-border-box-8>
        </h2>
      </div>
      <div class="box2">
        <dv-border-box-8>
          <div id="myChart4" :style="{ width: '100%', height: '100%' }"></div
        ></dv-border-box-8>
      </div>
      <div class="box3">
        <dv-border-box-8>
          <div id="myChart3" :style="{ width: '100%', height: '100%' }"></div
        ></dv-border-box-8>
      </div>
      <div class="box4">
        <dv-border-box-8
          ><div id="myChart" :style="{ width: '100%', height: '100%' }"></div
        ></dv-border-box-8>
      </div>
      <div class="box5">
        <dv-border-box-8
          ><div id="myChart2" :style="{ width: '100%', height: '100%' }"></div
        ></dv-border-box-8>
      </div>

      <div class="box8">
        <dv-border-box-8
          ><div id="myChart1" :style="{ width: '100%', height: '100%' }"></div
        ></dv-border-box-8>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import echarts from "echarts";
export default {
  name: "HomeView",
  data() {
    return {
      config: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
        lineWidth: 10,
        digitalFlopStyle: {
          fontSize: 18,
          fill: "#fff",
        },
        radius: "70%",
        activeRadius: "60%",
      },
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例

      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      let myChart4 = this.$echarts.init(
        document.getElementById("myChart4"),
        "dark"
      );

      // 绘制图表
      myChart2.setOption({
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },

        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            lineStyle: {
              color: "#fff",
              width: 0,
              type: "solid",
            },
            axisLabel: {
              //x轴文字的配置
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            lineStyle: {
              color: "#fff",
              width: 0,
              type: "solid",
            },
            axisLabel: {
              //x轴文字的配置
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },
          {
            name: "Line 2",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 282, 111, 234, 220, 340, 310],
          },
          {
            name: "Line 3",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
          {
            name: "Line 4",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 0, 135)",
                },
                {
                  offset: 1,
                  color: "rgb(135, 0, 157)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 402, 231, 134, 190, 230, 120],
          },
          {
            name: "Line 5",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 302, 181, 234, 210, 290, 150],
          },
        ],
      });
      myChart1.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 16,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },

        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          lineStyle: {
            color: "#fff",
            width: 0,
            type: "solid",
          },
          axisLabel: {
            //x轴文字的配置
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
          lineStyle: {
            color: "#fff",
            width: 0,
            type: "solid",
          },
          axisLabel: {
            //x轴文字的配置
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            name: "2011",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
          },
          {
            name: "2012",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
          },
        ],
      });
      myChart3.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        legend: {
          data: ["Show", "Click", "Visit", "Inquiry", "Order"],
          top: 20,
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "Funnel",
            type: "funnel",
            left: "10%",
            top: 80,
            bottom: 20,
            width: "80%",
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 60, name: "Visit" },
              { value: 40, name: "Inquiry" },
              { value: 20, name: "Order" },
              { value: 80, name: "Click" },
              { value: 100, name: "Show" },
            ],
          },
        ],
      });

      myChart4.setOption({
        backgroundColor: "",

        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });

      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          // orient: "vertical",
          left: "center",
          top: 5,

          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["0%", "55%"], // 设置半径 [内圈半径，外圈半径]
            center: ["50%", "60%"], // 设置圆心坐标
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="less">
h2 {
  text-align: center;
  line-height: 50px;
  font-size: 22px;
  font-weight: bold;
  color: white;
}
h3 {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
}

.home {
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 1fr 1fr;
  gap: 10px;
}
.box8 {
  grid-column: span 2;
}
.box1 {
  grid-column: span 3;
}
</style>
