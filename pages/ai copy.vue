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
    <!-- <vueCropper ref="cropper" :img="url" :outputSize="option.size" :outputType="option.outputType"></vueCropper> -->
    <div class="cropper-content">
      <div class="cropper">
        <vueCropper ref="cropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType" :info="true"
          :full="option.full" :canMove="option.canMove" :canMoveBox="option.canMoveBox" :original="option.original"
          :autoCrop="option.autoCrop" :autoCropWidth="option.autoCropWidth" :autoCropHeight="option.autoCropHeight"
          :fixedBox="option.fixedBox" @realTime="realTime" @imgLoad="imgLoad"></vueCropper>
      </div>
      <div class="show-preview"
        :style="{ 'width': previews.w + 'px', 'height': previews.h + 'px', 'overflow': 'hidden', 'margin': '5px' }">
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img">
        </div>
      </div>
    </div>

    <div class="footer-btn">
      <div class="scope-btn">
        <label class="btn" for="uploads">更换图片</label>
        <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
          accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">

        <button @click="changeScale(1)">+</button>
        <button @click="changeScale(-1)">-</button>
        <button @click="rotateLeft">↺</button>
        <button @click="rotateRight">↻</button>
      </div>
      <div class="upload-btn">
        <button @click="down('blob')">下载</button>
      </div>
    </div>
  </div>
</template>

<script>
import requestUpload from "@/utils/requestUpload";
export default {
  name: 'ai',
  layout: 'nor',
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
      fileData: null,
      fileType: [
        "png",
        "jpg",
        "jpeg",
      ],
      fileSize: 5,
      url: "",
      ourl: "",
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
      // console.dir(this.$refs.fileId);
      if (!this.handleBeforeUpload(this.$refs.fileId.files[0])) {
        return;
      }
      if (this.$refs.fileId.files.length) {
        this.fileData = this.$refs.fileId.files[0];
        this.previewFile(this.fileData)
        this.upload();
      } else {
        this.$message.error("请选择文件");
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
        });
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
      width: 500px;
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      background-color: #fff;
    }
  }
}</style>
