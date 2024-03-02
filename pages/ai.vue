<template>
  <div class="ai">
    <label>
      <input type="file" name="file" ref="fileId" @change="submitForm" class="el-upload__input" />
      <!-- 上传按钮 -->
      <el-button size="mini" @click="inputClick">选取文件</el-button>
    </label>
    <div class="imgbox">
      <div class="box">
        <div>原图</div>
        <img v-if="ourl" :src="ourl" alt="原图">
      </div>
      <div class="box">
        <div>处理后</div>
        <img v-if="url" :src="url" alt="处理后">
      </div>
    </div>
    <div class="cropperbox" v-if="url">
      <div>
        <el-button size="mini" @click="changeColor('#f44336')">红底</el-button>
        <el-button size="mini" @click="changeColor('#2196f3')">蓝底</el-button>
        <el-button size="mini" @click="changeColor('#ffffff')">白底</el-button>
        <el-button size="mini" @click="ratio([5, 7])">1寸</el-button>
        <el-button size="mini" @click="ratio([7, 10])">2寸</el-button>
      </div>
      <el-form label-width="120px" style="background-color: #fff;border-radius: 10px;margin-top: 20px;padding: 10px;">
        <el-form-item label="自定义宽高比">
          <el-input style="max-width: 200px;" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="底色">
          <el-color-picker v-model="color"></el-color-picker>
        </el-form-item>
        <el-form-item label="固定宽高比">
          <el-switch v-model="form.fixed"></el-switch>
        </el-form-item>
      </el-form>
      <div style="margin-top: 20px;">
        <label>
          <el-button size="mini" @click="openCropper">截取图片</el-button>
        </label>
      </div>
      <div class="box" v-if="cropperurl">
        <div>截图后</div>
        <img :src="cropperurl" ref="cropperImg" :style="{ backgroundColor: color }" alt="处理后">
      </div>
      <vueCropper ref="cropperDlg" @cropperImg="cropperImg"></vueCropper>
    </div>
    <div class="cropperbox">
      <div>
        <el-button size="mini" @click="exportImg">导出</el-button>
        <el-button size="mini" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import requestUpload from "@/utils/requestUpload";
import vueCropper from '../components/vueCropper.vue'
import html2canvas from 'html2canvas'
export default {
  name: 'ai',
  layout: 'nor',
  components: {
    vueCropper
  },
  head() {
    return {
      title: 'ai',
      meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'hsueh的regulex'
      },
      ],
    }
  },
  data() {
    return {
      color: '#2196f3',
      fileData: null,
      fileType: [
        "png",
        "jpg",
        "jpeg",
      ],
      fileSize: 5,
      url: "",
      ourl: "",
      cropperurl: "",
      form: {
        name: "5x7",
        fixed: true,
      },
      fixedratio: [5, 7],
      option: {
        size: 1,
        full: false,//输出原图比例截图 props名full
        outputType: 'png',
      }
    }
  },
  computed: {
  },
  methods: {
    exportImg() {
      html2canvas(this.$refs.cropperImg).then(canvas => {
        var aLink = document.createElement('a');
        aLink.href = canvas.toDataURL();
        aLink.download = "证件照.png"; // 导出图片的名字
        document.body.appendChild(aLink);
        aLink.click();
        aLink.remove();
      });
    },
    reset() {
      const o = {
        color: '#2196f3',
        fileData: null,

        url: "",
        ourl: "",
        cropperurl: "",
        form: {
          name: "5x7",
          fixed: true,
        },
        fixedratio: [5, 7],
        option: {
          size: 1,
          full: false,//输出原图比例截图 props名full
          outputType: 'png',
        }
      }
      Object.assign(this, o)
    },
    ratioInput(e) {
      // console.log("e", e)
      let arr;
      try {
        arr = e.split("x")
        arr = arr.map(item => parseInt(item))
        if (arr.length !== 2) {
          alert("请检测你的自定义宽高比数据!")
          return false;
        }
        if (arr.some(item => { return isNaN(item) })) {
          alert("请检测你的自定义宽高比数据!")
          return false;
        }
        console.log("arr", arr, arr.some(item => { return isNaN(item) }))
      } catch (error) {
        console.log(error)
        alert("请检测你的自定义宽高比数据!")
        return false;
      }
      this.fixedratio = arr
      return true
    },
    ratio(arr) {
      this.fixedratio = arr
      this.form.name = arr.join("x")
    },
    changeColor(color) {
      this.color = color
    },
    cropperImg(file) {
      // this.imgFile = file
      this.cropperurl = file
      // console.log(file)
    },
    inputClick() {
      this.$refs.fileId.click();
    },
    previewFile(file) {
      let reader
      if (file) {
        // 创建流对象
        reader = new FileReader()
        reader.readAsDataURL(file)
      }
      // 捕获 转换完毕
      reader.onload = (e) => {
        // 转换后的base64就在e.target.result里面,直接放到img标签的src属性即可
        this.ourl = e.target.result
      }
    },
    handleBeforeUpload(file) {
      // 校检文件类型
      if (this.fileType) {
        let fileExtension = "";
        if (file.name.lastIndexOf(".") > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
        }
        const isTypeOk = this.fileType.some((type) => {
          if (file.type.indexOf(type) > -1) return true;
          if (fileExtension && fileExtension.indexOf(type) > -1) return true;
          return false;
        });
        if (!isTypeOk) {
          alert("校检文件类型错误")
          return false;
        }
      }
      // 校检文件大小
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;
        if (!isLt) {
          alert(`文件超过${this.fileSize}mb`)
          return false;
        }
      }
      return true;
    },
    submitForm() {
      this.reset()
      if (this.$refs.fileId.files.length) {
        if (!this.handleBeforeUpload(this.$refs.fileId.files[0])) {
          return;
        }
        this.loading("loading", 1);
        this.fileData = this.$refs.fileId.files[0];
        this.previewFile(this.fileData)
        this.upload();
      }
    },
    // name
    // 1：人像
    // 2：通用
    upload() {
      let formData = new FormData();
      formData.append("file_input", this.fileData);
      requestUpload({
        url: `/ai/test/1`,
        method: "post",
        data: formData,
      })
        .then((res) => {
          this.url = '/ai/' + res
        })
        .catch((err) => {
          this.$message.error("上传失败, 请重试");
        })
        .finally(() => {
          this.load.close();
        });
    },
    // 裁剪图片弹框 
    openCropper() {
      if (this.$refs.cropperDlg) {
        const err = this.ratioInput(this.form.name)
        if (!err) {
          return
        }
        this.$refs.cropperDlg.changeImage({
          url: this.url,
          fixedNumber: this.fixedratio, // 截图框的宽高比例
          fixed: this.form.fixed
        })
      }
    },

  },
  unmounted() {

  },
  mounted() {

  }
}
</script>
<style  lang="scss">
.ai {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(36deg, #17522E 0%, #2893A2 50%, #FFCB16 100%);

  .cropperbox {
    margin-top: 20px;

    .box {
      margin-top: 20px;
      // width: 500px;
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      background-color: #000;
      color: #fff;

      img {
        width: 100%;
        // border: 1px solid #ccc;
      }
    }
  }

  .cropper-content {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;

    .cropper {
      width: 350px;
      height: 300px;
    }

    .show-preview {
      flex: 1;
      -webkit-flex: 1;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      -webkit-justify-content: center;

      .preview {
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #cccccc;
        background: #cccccc;
        margin-left: 40px;
      }
    }
  }

  .footer-btn {
    margin-top: 30px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;

    .scope-btn {
      width: 350px;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      -webkit-justify-content: space-between;
    }

    .upload-btn {
      flex: 1;
      -webkit-flex: 1;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      -webkit-justify-content: center;
    }

    .btn {
      outline: none;
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      padding: 8px 15px;
      font-size: 12px;
      border-radius: 3px;
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }
  }

  .imgbox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .box {
      margin-top: 20px;
      // width: 500px;
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;

      img {
        width: 100%;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
