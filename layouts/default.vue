<template>
  <div class="layout_css">
    <canvas id="canvas"></canvas>
    <div class="layout_main">
      <AppHeader></AppHeader>
      <transition>
        <AppMain></AppMain>
      </transition>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>
<script>
import AppHeader from '../components/appHeader.vue'
import AppMain from '../components/appMain.vue'
import AppFooter from '../components/appFooter.vue'
export default {
  components: {
    AppHeader, AppMain, AppFooter
  },
  mounted() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getDistance(p1, p2) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let pointArr = [];
    let mouse = { x: null, y: null };  // 存储鼠标位置
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    // 初始化小球及其速度
    function initPoints() {
      pointArr = new Array(100).fill(1).map(() => {
        let vx = getRandomInt(1, 10)
        let vy = getRandomInt(1, 10)
        let Bx = getRandomInt(1, 2) == 2 ? 1 : -1
        let By = getRandomInt(1, 2) == 2 ? 1 : -1
        return {
          x: getRandomInt(0, canvasWidth),
          y: getRandomInt(0, canvasHeight),
          vx: vx / 10 * Bx,  // X 方向速度
          vy: vy / 10 * By,  // Y 方向速度
          ovx: vx / 10 * Bx,  // X 方向速度
          ovy: vy / 10 * By,  // Y 方向速度
        };
      });
    }

    // 绘制小球和连线
    function drawPoints() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);  // 清除画布

      pointArr.forEach((item, index) => {
        // 绘制每个小球
        ctx.beginPath();
        ctx.arc(item.x, item.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "lime";
        ctx.shadowBlur = 10;  // 设置阴影模糊
        ctx.shadowColor = "lime";  // 绿色阴影
        ctx.fill();

        // 连接线
        let nowArr = pointArr.slice(index + 1);
        nowArr.forEach(now => {
          const length = getDistance(item, now);
          ctx.beginPath();
          ctx.moveTo(item.x, item.y);
          ctx.lineTo(now.x, now.y);

          if (length < 100) {
            ctx.globalAlpha = 1;
          } else if (length < 120) {
            ctx.globalAlpha = 0.8;
          } else if (length < 140) {
            ctx.globalAlpha = 0.6;
          } else if (length < 160) {
            ctx.globalAlpha = 0.4;
          } else if (length < 180) {
            ctx.globalAlpha = 0.2;
          } else {
            ctx.globalAlpha = 0;
          }
          ctx.shadowBlur = 0;  // 设置阴影模糊
          ctx.strokeStyle = "lime";
          ctx.stroke();
          ctx.globalAlpha = 1;
        });
      });
    }

    // 更新小球位置
    function updatePoints() {
      pointArr.forEach(point => {
        // 鼠标吸引力计算
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - point.x;
          const dy = mouse.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // 定义吸引力的范围和强度
          const maxDistance = 100;
          const attractionStrength = 0.05;

          if (distance < maxDistance) {
            // 计算吸引力 (距离越近，吸引力越大)
            const force = (1 - distance / maxDistance) * attractionStrength;
            point.vx = dx * force;
            point.vy = dy * force;
          } else {
            point.vx = point.ovx;
            point.vy = point.ovy;
          }
        }

        // 更新位置
        point.x += point.vx;
        point.y += point.vy;

        // 碰到边界反弹
        if (point.x < 0 || point.x > canvasWidth) {
          point.vx *= -1;
          point.ovx = point.vx
        }
        if (point.y < 0 || point.y > canvasHeight) {
          point.vy *= -1;
          point.ovy = point.vy;
        }
      });
    }

    // 处理窗口大小变化
    function handleResize() {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;

      // 更新 canvas 的宽高
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // 重新初始化小球位置
      initPoints();
    }

    // 监听窗口大小变化事件
    window.addEventListener("resize", handleResize);
    // 监听鼠标移动事件，更新鼠标位置
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    // 动画循环
    function animate() {
      updatePoints();   // 更新小球位置
      drawPoints();     // 绘制小球和线条
      requestAnimationFrame(animate);  // 循环动画
    }

    // 初始设置画布大小和初始化小球
    handleResize();
    animate();  // 开始动画
  }
}
</script>
<style lang="scss" scoped>
.layout_css {
  height: auto;
  min-height: 100%;
  width: 100%;
  background-color: #f8fcff;
  // position: relative;

  #canvas {
    /* border: 1px solid #d3d3d3; */
    /* background-color: #f1f1f1; */
    overflow: hidden;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    position: fixed;
    background-color: #000;
    z-index: 1;
    pointer-events: none;
  }

  .layout_main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
    padding-top: 60px;
    // opacity: 0.8;

    @media screen and (max-width: 920px) {
      min-width: 320px;
    }

    .app-header {
      height: 60px;
    }

    .app-main {
      flex: 1;
    }

    .app-footer {
      height: 94px;
    }
  }


}
</style>
