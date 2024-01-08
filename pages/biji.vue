<template>
  <div class="body">
    <el-button @click="pdfDown_" class="exportButton">导出</el-button>
    <div class="pdf" ref="box">
      <div v-for="item, index in Array(200)" :key="index" :class="(index + 1) % 2 === 0 ? 'box1' : 'box2'"></div>
    </div>
  </div>
</template>
<script>
import htmlToPdf from '../utils/htmlToPdf.js'
export default {
  methods: {
    pdfDown_() {
      htmlToPdf('Hsueh', this.$refs.box)
    }
  },
}
</script>
<style  lang="scss">
.pdf {
  .pdf-empty {
    box-sizing: border-box;
  }

  .pdf-head {
    box-sizing: border-box;
  }

  .pdf-foot {
    box-sizing: border-box;
  }
}
</style>
<style scoped lang="scss">
.body {
  position: relative;
  margin: 0 auto;
  width: 900px;
  .exportButton {
    display: inline-block;
    position: absolute;
    width: 80px;
    top: 20px;
    right: 20px;
    box-sizing: border-box;
  }

  .pdf {
    box-sizing: border-box;
    background-color: #fff;
    padding: 20px;
    width: 900px;
    .box1 {
      height: 30px;
      width: 100%;
      background-color: #4395ff;
    }
    .box2 {
      height: 30px;
      width: 100%;
      background-color: gold;
    }
  }
}
</style>
