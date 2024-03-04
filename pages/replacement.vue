<template>
  <div class="replacement">
    <div class="cropperbox">
      <h3 class="text">操作说明：</h3>
      <p class="text">1.点击合成图片</p>
      <p class="text">2.点击截取图片</p>
      <p class="text">3.点击导出</p>
    </div>
    <el-dialog title="图片合成" :visible.sync="dialogVisible" :fullscreen="true" append-to-body>
      <div class="merge-content">
        <label>
          <input type="file" name="file" ref="fileId" @change="submitForm" class="el-upload__input" />
          <input type="file" name="fileup" ref="fileIdup" @change="submitFormUp" class="el-upload__input" />
          <!-- 上传按钮 -->
        </label>
        <el-form label-width="120px" style="margin-top: 20px;" :inline="true">
          <el-form-item label="截图框高度">
            <el-input v-model.number="previewHeight" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="上层图片">
            <el-button size="mini" @click="inputClickUp">选取上层图片</el-button>
          </el-form-item>
          <el-form-item label="底层图片">
            <el-button size="mini" @click="inputClick">选取底层图片</el-button>
          </el-form-item>
          <el-form-item label="上层预设图片">
            <el-radio-group v-model="previewImgUrl">
              <el-radio :label="item.url" border v-for="item in imgs" :key="item.url">
                <img :src="item.url" height="20" />
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div ref='previewDiv' class="box" :style="{ backgroundColor: color, height: previewHeight + 'px', }">
          <img :src="ourl" class="bgImg" />
          <div class='preview-img-div' :style="{ height: previewHeight + 'px', }" ref='previewImgDiv'
            @mousewheel="handleMousewheel" @mousedown="handleMouseDown">
            <img :src="previewImgUrl" :style="{
      transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`
    }" />
          </div>
        </div>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="finish">确认</el-button>
      </div>
    </el-dialog>
    <div class="cropperbox">
      <div>
        <el-button size="mini" @click="changeColor('#f44336')">红底</el-button>
        <el-button size="mini" @click="changeColor('#2196f3')">蓝底</el-button>
        <el-button size="mini" @click="changeColor('#ffffff')">白底</el-button>
      </div>
      <el-form label-width="120px" style="background-color: #fff;border-radius: 10px;margin-top: 20px;padding: 10px;">
        <el-form-item label="底色">
          <el-color-picker v-model="color"></el-color-picker>
        </el-form-item>
      </el-form>
      <div class="cropper" v-if="cropperurl">
        <div>截图后</div>
        <img :src="cropperurl" ref="cropperImg" alt="处理后">
      </div>
    </div>
    <div style="margin-top: 20px;">
      <label>
        <el-button size="mini" @click="openMerge">合成图片</el-button>
      </label>
    </div>
    <div class="cropper" v-if="url">
      <div>合成后</div>
      <img :src="url" alt="合成后">
    </div>
    <div style="margin-top: 20px;" v-if="url">
      <label>
        <el-button size="mini" @click="openCropper">截取图片</el-button>
      </label>
    </div>
    <div class="cropperbox" v-if="url">
      <div>
        <el-button size="mini" @click="ratio([5, 7])">1寸</el-button>
        <el-button size="mini" @click="ratio([7, 10])">2寸</el-button>
      </div>
      <el-form label-width="120px" style="background-color: #fff;border-radius: 10px;margin-top: 20px;padding: 10px;">
        <el-form-item label="自定义宽高比">
          <el-input style="max-width: 200px;" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="固定宽高比">
          <el-switch v-model="form.fixed"></el-switch>
        </el-form-item>
      </el-form>
      <div class="cropper" v-if="cropperurl">
        <div>截图后</div>
        <img :src="cropperurl" ref="cropperImg" alt="处理后">
      </div>
    </div>
    <vueCropper ref="cropperDlg" @cropperImg="cropperImg"></vueCropper>
    <div class="cropperbox">
      <div>
        <el-button size="mini" v-if="cropperurl" @click="exportImg">导出</el-button>
        <el-button size="mini" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import vueCropper from '../components/vueCropper.vue'
import html2canvas from 'html2canvas'
import one from "../assets/merge/1.png";
export default {
  name: 'replacement',
  layout: 'nor',
  data() {
    return {
      upimg: '',
      imgs: [
        { url: one },
      ],
      color: '#2196f3',
      dialogVisible: false,
      previewImgUrl: '',// 上层图片
      scale: 1,
      translateX: 0,
      translateY: 0,
      publicPath: process.env.ENV_ == 1 ? '' : '/blog',
      fileType: [
        "png",
        "jpg",
        "jpeg",
      ],
      form: {
        name: "5x7",
        fixed: true,
      },
      fixedratio: [5, 7],
      fileSize: 5,
      ourl: "",// 下层图片
      url: "",// 合并后图片
      cropperurl: "",// 截图后图片
      previewHeight: 500,
    }
  },
  components: {
    vueCropper
  },
  methods: {
    changeColor(color) {
      this.color = color
    },
    reset() {
      const o = {
        color: '#2196f3',
        dialogVisible: false,
        previewImgUrl: '',// 上层图片
        scale: 1,
        translateX: 0,
        translateY: 0,
        fileType: [
          "png",
          "jpg",
          "jpeg",
        ],
        form: {
          name: "5x7",
          fixed: true,
        },
        fixedratio: [5, 7],
        fileSize: 5,
        ourl: "",// 下层图片
        url: "",// 合并后图片
        cropperurl: "",// 截图后图片
      }
      Object.assign(this, o)
    },
    finish() {
      html2canvas(this.$refs.previewDiv).then(canvas => {
        canvas.toBlob((blob) => {
          // console.log("URL.createObjectURL(blob)", URL.createObjectURL(blob))
          this.url = URL.createObjectURL(blob)
          this.openMerge()
        })
        // this.url = canvas.toDataURL()
        // console.log("this.url", this.url)
        // this.openMerge()
      }).catch(err => {
        console.log(err)
      });
    },
    openMerge() {
      this.dialogVisible = !this.dialogVisible
    },
    ratio(arr) {
      this.fixedratio = arr
      this.form.name = arr.join("x")
    },
    cropperImg(file) {
      // this.imgFile = file
      this.cropperurl = file
      // console.log(file)
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
    exportImg() {
      html2canvas(this.$refs.cropperImg).then(canvas => {
        var aLink = document.createElement('a');
        aLink.href = canvas.toDataURL();
        aLink.download = "合并.png"; // 导出图片的名字
        document.body.appendChild(aLink);
        aLink.click();
        aLink.remove();
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
      if (this.$refs.fileId.files.length) {
        if (!this.handleBeforeUpload(this.$refs.fileId.files[0])) {
          return;
        }
        this.previewFile(this.$refs.fileId.files[0])
      }
    },
    submitFormUp() {
      if (this.$refs.fileIdup.files.length) {
        if (!this.handleBeforeUpload(this.$refs.fileIdup.files[0])) {
          return;
        }
        this.previewFileUp(this.$refs.fileIdup.files[0])
      }
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
    previewFileUp(file) {
      let reader
      if (file) {
        // 创建流对象
        reader = new FileReader()
        reader.readAsDataURL(file)
      }
      // 捕获 转换完毕
      reader.onload = (e) => {
        // 转换后的base64就在e.target.result里面,直接放到img标签的src属性即可
        this.previewImgUrl = e.target.result
      }
    },
    inputClick() {
      // console.dir(this.$refs.fileId)
      // 先执行事件的代码块，然后将对象本身的value值清空
      this.$refs.fileId.value = "";    // 写法1
      //  e.target.value = "";    // 写法2
      this.$refs.fileId.click();
    },
    inputClickUp() {
      // console.dir(this.$refs.fileId)
      // 先执行事件的代码块，然后将对象本身的value值清空
      this.$refs.fileIdup.value = "";    // 写法1
      //  e.target.value = "";    // 写法2
      this.$refs.fileIdup.click();
    },
    handleMousewheel(event) {
      this.scale = this.scale + event.wheelDelta / 12000
      return false
    },
    handleMouseDown(event) {
      event.preventDefault()
      if (event.target.tagName !== 'IMG') {
        return false
      }
      let div = this.$refs.previewImgDiv
      let originX = event.screenX
      let originY = event.screenY
      let translateX = this.translateX
      let translateY = this.translateY
      const move = (e) => {
        let afterX = e.screenX
        let afterY = e.screenY
        this.translateX = translateX + (afterX - originX) / this.scale
        this.translateY = translateY + (afterY - originY) / this.scale
      }
      div.addEventListener('mousemove', move)
      div.addEventListener('mouseup', () => {
        div.removeEventListener('mousemove', move)
      })
    }
  }
}
</script>

<style lang="scss">
.replacement {
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

    .text {
      color: #fff;
    }

    .box {
      margin-top: 20px;
      max-width: 500px;
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

  .cropper {
    position: relative;
    background: rgba(0, 0, 0, 1);
    padding: 20px;
    color: #fff;
    margin-top: 20px;

    img {
      width: 100%;
      max-width: 300px;
    }
  }

  .box {
    position: relative;
    width: 500px;
    height: 500px;
    // background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

}
</style>

<style lang="scss">
// 截图
.merge-content {
  .box {
    position: relative;
    width: 400px;
    border: 1px solid #ccc;
    overflow: hidden;
    margin-top: 20px;

    .bgImg {
      width: 100%;
      max-width: 300px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .preview-img-div {
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0);
      z-index: 2;
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
  }
}
</style>
