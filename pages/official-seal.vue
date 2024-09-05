<template>
  <div class="official-seal">
    <canvas class="canvas" ref="sealCanvas" width="400" height="400"></canvas>
    <div class="cropperbox">
      <el-form label-width="120px" style="background-color: #fff;border-radius: 10px;margin-top: 20px;padding: 10px;">
        <el-form-item label="底色">
          <el-color-picker color-format="rgb" :show-alpha="true" v-model="form.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="文字">
          <el-input style="max-width: 200px;" v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item label="文字大小">
          <el-input-number v-model="form.fontSize" :min="1" :max="100" label="文字大小"></el-input-number>
        </el-form-item>
        <el-form-item label="外环线宽度">
          <el-input-number v-model="form.outWidth" :min="1" :max="10" label="外环线宽度"></el-input-number>
        </el-form-item>
        <el-form-item label="内外环线宽度">
          <el-input-number v-model="form.innerWidth" :min="1" :max="10" label="内外环线宽度"></el-input-number>
        </el-form-item>
        <el-form-item label="内外环线半径">
          <el-input-number v-model="form.innerRadius" :min="1" :max="200" label="内外环线半径"></el-input-number>
        </el-form-item>
        <el-form-item label="星星内半径">
          <el-input-number v-model="form.startOutRadius" :min="1" :max="200" label="星星内半径"></el-input-number>
        </el-form-item>
        <el-form-item label="星星外半径">
          <el-input-number v-model="form.startinnerRadius" :min="1" :max="200" label="星星外半径"></el-input-number>
        </el-form-item>
      </el-form>
      <div style="margin-top: 20px;">
        <label>
          <el-button size="mini" @click="generation">重新生成</el-button>
        </label>
        <label>
          <el-button size="mini" @click="exportImg">导出图片</el-button>
        </label>
        <label>
          <el-button size="mini" @click="reSet">默认设置</el-button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'official-seal',
  layout: 'nor',
  head() {
    return {
      title: '公章',
      meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'hsueh的生成公章'
      },
      ],
    }
  },
  data() {
    return {
      form: {
        color: "rgba(255, 5, 5, 1)",
        text: "我是一段文字",
        outWidth: 3,
        innerWidth: 3,
        innerRadius: 110,
        startOutRadius: 60,
        startinnerRadius: 25,
        fontSize: 20,
      },
    }
  },
  computed: {
  },
  methods: {
    reSet() {
      this.form = {
        color: "rgba(255, 5, 5, 1)",
        text: "我是一段文字",
        outWidth: 3,
        innerWidth: 3,
        innerRadius: 110,
        startOutRadius: 60,
        startinnerRadius: 25,
        fontSize: 20,
      }
      this.generation()
    },
    exportImg() {
      this.generationAll() //超清版本
      this.generation()
    },
    generation() {
      // console.log("this", this)
      // console.log("this.color", this.color)
      let that = this
      let dpr = 1;
      const color = that.form.color
      const text = that.form.text
      // return
      const canvas = that.$refs['sealCanvas']
      canvas.width = 400 * dpr
      canvas.height = 400 * dpr
      const ctx = canvas.getContext('2d');

      const centerX = 200;
      const centerY = 200;
      const radius = 150;
      ctx.scale(dpr, dpr);
      // 绘制外圆
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
      ctx.lineWidth = that.form.outWidth;
      ctx.strokeStyle = color;
      ctx.stroke();

      // 绘制内圆
      ctx.beginPath();
      ctx.arc(centerX, centerY, that.form.innerRadius, 0, Math.PI * 2, false);
      ctx.lineWidth = that.form.innerWidth;
      ctx.strokeStyle = color;
      ctx.stroke();

      // 绘制五角星
      function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);

        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;

          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
      }

      drawStar(centerX, centerY, 5, that.form.startOutRadius, that.form.startinnerRadius);
      // 绘制弧形文字
      function drawCircularText(ctx, text, centerX, centerY, radius, startAngle, align) {
        ctx.font = `${that.form.fontSize}px Arial`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";

        // let anglePerChar = (Math.PI * 1.2) / text.length; // 根据字符数量调整间隔
        let anglePerChar = (Math.PI / 12); // 根据字符数量调整间隔
        let currentAngle = startAngle - anglePerChar * (text.length - 1) / 2;

        for (let i = 0; i < text.length; i++) {
          let char = text[i];
          let x = centerX + radius * Math.cos(currentAngle);
          let y = centerY + radius * Math.sin(currentAngle);
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(currentAngle + Math.PI / 2);
          ctx.fillText(char, 0, 0);
          ctx.restore();
          currentAngle += anglePerChar;
        }
      }
      drawCircularText(ctx, text, centerX, centerY, radius - 30, -Math.PI / 2, "center");

    },
    generationAll() {
      let that = this
      that.loading("loading", 1);
      // console.log("this", this)
      // console.log("this.color", this.color)
      let dpr = window.devicePixelRatio || 1;
      dpr = dpr * 3;
      const color = that.form.color
      const text = that.form.text
      // return
      const canvas = that.$refs['sealCanvas']
      canvas.width = 400 * dpr
      canvas.height = 400 * dpr
      const ctx = canvas.getContext('2d');

      const centerX = 200;
      const centerY = 200;
      const radius = 150;
      ctx.scale(dpr, dpr);
      // 绘制外圆
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
      ctx.lineWidth = that.form.outWidth;
      ctx.strokeStyle = color;
      ctx.stroke();

      // 绘制内圆
      ctx.beginPath();
      ctx.arc(centerX, centerY, that.form.innerRadius, 0, Math.PI * 2, false);
      ctx.lineWidth = that.form.innerWidth;
      ctx.strokeStyle = color;
      ctx.stroke();

      // 绘制五角星
      function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);

        for (let i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          ctx.lineTo(x, y);
          rot += step;

          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          ctx.lineTo(x, y);
          rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
      }

      drawStar(centerX, centerY, 5, that.form.startOutRadius, that.form.startinnerRadius);
      // 绘制弧形文字
      function drawCircularText(ctx, text, centerX, centerY, radius, startAngle, align) {
        ctx.font = `${that.form.fontSize}px Arial`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";

        // let anglePerChar = (Math.PI * 1.2) / text.length; // 根据字符数量调整间隔
        let anglePerChar = (Math.PI / 12); // 根据字符数量调整间隔
        let currentAngle = startAngle - anglePerChar * (text.length - 1) / 2;

        for (let i = 0; i < text.length; i++) {
          let char = text[i];
          let x = centerX + radius * Math.cos(currentAngle);
          let y = centerY + radius * Math.sin(currentAngle);
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(currentAngle + Math.PI / 2);
          ctx.fillText(char, 0, 0);
          ctx.restore();
          currentAngle += anglePerChar;
        }
      }
      drawCircularText(ctx, text, centerX, centerY, radius - 30, -Math.PI / 2, "center");
      var aLink = document.createElement('a');
      aLink.href = canvas.toDataURL();
      aLink.download = "公章.png"; // 导出图片的名字
      document.body.appendChild(aLink);
      aLink.click();
      aLink.remove();
      that.load.close();
    },
  },
  unmounted() {

  },
  mounted() {
    this.generation()
  }
}
</script>

<style lang="scss">
.official-seal {
  position: relative;
  margin: 0 auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(36deg, #17522E 0%, #2893A2 50%, #FFCB16 100%);

  .canvas {
    // width: 400px;
    // height: 400px;
    // background-color: #fff;
    border: 1px solid #fff;
  }
}
</style>
