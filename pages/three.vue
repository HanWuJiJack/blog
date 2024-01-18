<template>
  <div ref="canvas">
    <div id="container">
      <div id="per-box">
        <div id="per"> </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
// 引入渲染器通道RenderPass
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js'
// 引入GlitchPass通道
import { CSS3DRenderer, CSS3DObject, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
export default {
  name: 'three',
  layout: 'full',
  head() {
    return {
      title: '3D',
      meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'hsueh的3D'
      },
      ],
    }
  },
  data() {
    return {
      publicPath: process.env.ENV_ == 1 ? '/' : '/blog',
      res: {},
    }
  },
  computed: {
  },
  methods: {
  },
  unmounted() {
    window.onresize = null;
  },
  mounted() {
    function getSceneModelFaceNum(view) {
      let scene = view;
      let objects = []; // 场景模型对象
      for (let index = 0; index < scene.children.length; index++) {
        let object = scene.children[index];
        object.traverseVisible(function (object) {
          objects.push(object);
        });
      }
      return objects
    }
    function initschedule(p) {
      const percentDiv = document.getElementById("per");// 获取进度条元素
      percentDiv.style.width = p * 400 + "px";//进度条元素长度
      percentDiv.style.textIndent = p * 400 + 5 + "px";//缩进元素中的首行文本
      percentDiv.innerHTML = p * 100 + "%";//进度百分比
    }
    function closeschedule() {
      const percentDiv = document.getElementById("container");// 获取进度条元素
      percentDiv.style.display = "none"
    }
    function debounce(func, wait) {
      let timeout;

      return function () {
        let context = this; // 保存this指向
        let args = arguments; // 拿到event对象

        clearTimeout(timeout)
        timeout = setTimeout(function () {
          func.apply(context, args)
        }, wait);
      }
    }
    // 加载图片资源
    const deep = 5000
    let width = window.innerWidth
    let height = window.innerHeight

    let initWidth = window.innerWidth
    let initHeight = window.innerHeight

    window.onresize = debounce(function () {
      width = window.innerWidth
      height = window.innerHeight
      // 更新运动星体xy尺寸
      pointsCubes.forEach((pointsCube) => {
        const x = THREE.MathUtils.randFloat(0, width).toFixed(2);
        const y = THREE.MathUtils.randFloat(0, height).toFixed(2);
        pointsCube.position.x = x
        pointsCube.position.y = y
      })
      // 更新闪烁星体xy尺寸
      pointsCubes_.forEach((pointsCube) => {
        const x = THREE.MathUtils.randFloat(0, width).toFixed(2);
        const y = THREE.MathUtils.randFloat(0, height).toFixed(2);
        pointsCube.position.x = x
        pointsCube.position.y = y
      })
      // 更新地球xy
      meshEarth.position.set(width * 0.8, height * 0.8, deep - 100)

      // 更新光源xyz
      pointLight.position.set(100, height - 100, deep - 300);

      // 更新空间盒子xyz
      mesh.position.set(width / 2, height / 2, deep / 2)
      // 更新空间盒子尺寸
      mesh.scale.set(width / initWidth, height / initHeight, 1);


      // 更新相机
      camera.fov = Math.tan(height / 2 / deep) / Math.PI * 180 * 1.9
      // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
      camera.aspect = width / height;
      // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
      // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
      // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
      camera.updateProjectionMatrix();
      // 重置渲染器输出画布canvas尺寸
      renderer.setSize(width, height);
      render3d.setSize(width, height);
      camera.lookAt(width / 2, height / 2, deep)
    }, 1000)

    // 创建一个场景
    const scene = new THREE.Scene();


    // 创建相机
    const camera = new THREE.PerspectiveCamera(Math.tan(height / 2 / deep) / Math.PI * 180 * 1.9, width / height, 1000, 3000000);
    camera.position.set(width / 2, height / 2, 0)
    scene.add(camera)


    // 创建环境
    // 创建结构
    const geometry = new THREE.BoxGeometry(width, height, deep)
    // 创建材质
    // color: '#251631'
    // color: '#000'
    const material = new THREE.MeshPhongMaterial({ side: THREE.BackSide, color: '#333' })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(width / 2, height / 2, deep / 2)
    scene.add(mesh)

    // 创建地球
    const geometryEarth = new THREE.SphereGeometry(50);
    const materialEarth = new THREE.MeshPhongMaterial({
      shininess: 50,//.specular高亮的程度，越高的值越闪亮。默认值为 30。
    })

    const meshEarth = new THREE.Mesh(geometryEarth, materialEarth)
    meshEarth.receiveShadow = true;
    meshEarth.castShadow = true;
    meshEarth.position.set(width * 0.8, height * 0.8, deep - 100)

    const element = document.createElement('div');
    element.innerHTML = `
	<div class="elementContent">
	  <h5>地球</h5> 
	</div>
  `;

    const objcss3d = new CSS3DSprite(element);
    objcss3d.position.x = 0
    objcss3d.position.y = 0
    objcss3d.position.z = 0
    // objcss3d.scale.set(1, 1, 1)
    // scene.add(objcss3d)
    meshEarth.add(objcss3d)
    scene.add(meshEarth)
    objcss3d.visible = false


    const title = document.createElement('div');
    title.innerHTML = `
	<div class="elementContent">
	  <h5>点击地球吧~</h5> 
	</div>
  `;
    const objcss3dtitle = new CSS3DSprite(title);
    objcss3dtitle.position.x = 0
    objcss3dtitle.position.y = height * 0.8
    objcss3dtitle.position.z = deep - 1000

    scene.add(objcss3dtitle)

    // 环境光会均匀的照亮场景中的所有物体。
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)


    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.power = 10000
    pointLight.decay = 0.8;//设置光源不随距离衰减
    pointLight.position.set(100, height - 100, deep - 300);
    scene.add(pointLight);

    // const pointLightHelper = new THREE.PointLightHelper(pointLight, 10, 0xffffff)
    // scene.add(pointLightHelper);

    const Textures = [
      new THREE.TextureLoader().load(`${this.publicPath}/end/1.png`),
      new THREE.TextureLoader().load(`${this.publicPath}/end/5.png`),
      new THREE.TextureLoader().load(`${this.publicPath}/end/8.png`),
      new THREE.TextureLoader().load(`${this.publicPath}/end/9.png`)
    ]
    const pointsCubes = []
    for (let j = 0; j < 1; j++) {
      function sum(sum) {
        for (let k = 0; k < Textures.length; k++) {
          for (let i = 0; i < 20; i++) {
            const spriteMaterial = new THREE.SpriteMaterial({
              map: Textures[k],
              blending: THREE.AdditiveBlending
            });
            const pointsCube = new THREE.Sprite(spriteMaterial);
            pointsCube.rotation.x = Math.random() * 0.2 - 0.15
            pointsCube.rotation.y = Math.random() * 0.2 - 0.15
            pointsCube.rotation.z = Math.random() * 0.2 - 0.15
            const size = THREE.MathUtils.randFloat(5, 20)
            pointsCube.scale.set(size, size, size)
            const startz = sum * deep;
            const endz = (sum + 1) * deep;
            const x = THREE.MathUtils.randFloat(0, width).toFixed(2);
            const y = THREE.MathUtils.randFloat(0, height).toFixed(2);
            const z = THREE.MathUtils.randFloat(startz, endz).toFixed(2);
            pointsCube.position.set(x, y, z)
            pointsCube.position.speed = THREE.MathUtils.randFloat(1, 20)
            pointsCubes.push(pointsCube)
          }
        }
      }
      sum(j)
    }

    const pointsCubes_ = []
    for (let k = 0; k < Textures.length; k++) {
      for (let i = 0; i < 10; i++) {
        const spriteMaterial = new THREE.SpriteMaterial({
          map: Textures[k],
          blending: THREE.AdditiveBlending
        });
        const pointsCube = new THREE.Sprite(spriteMaterial);
        const size = THREE.MathUtils.randFloat(1, 10)
        pointsCube.scale.set(size, size, size)
        const x = THREE.MathUtils.randFloat(0, width).toFixed(2);
        const y = THREE.MathUtils.randFloat(0, height).toFixed(2);
        const z = THREE.MathUtils.randFloat(deep - 500, deep).toFixed(2);
        pointsCube.position.set(x, y, z)
        pointsCube.material.colorIndex = THREE.MathUtils.randInt(0, 2)
        pointsCubes_.push(pointsCube)
      }

    }

    pointsCubes.forEach((pointsCube) => {
      scene.add(pointsCube)
    })

    pointsCubes_.forEach((pointsCube) => {
      scene.add(pointsCube)
    })

    let xhrs = 10
    let percentNum = 0
    let percentNumW = 0
    function percentFn() {
      let sum_ = 0
      function tu() {
        if (sum_ === 2) {
          percentNum += 1;
          sum_ = -1
        }
        let percent = percentNum / xhrs
        if (percent < 1) {
          initschedule(percent)
        } else {
          closeschedule()
        }
      }
      function add() {
        if (sum_ != -1) {
          sum_++;
        }
      }
      return {
        add,
        tu
      }
    }
    const percentFn_ = percentFn()

    material.map = new THREE.TextureLoader().load(`${this.publicPath}/end/bg1.jpg`, (texture) => {
      percentFn_.add()
      percentFn_.tu()
    })
    materialEarth.map = new THREE.TextureLoader().load(`${this.publicPath}/end/earth.jpeg`, (texture) => {
      percentFn_.add()
      percentFn_.tu()
    })

    const renderer = new THREE.WebGLRenderer({
      // 设置对数深度缓冲区，优化深度冲突问题
      logarithmicDepthBuffer: true
    });
    const canvas = renderer.domElement
    this.$refs.canvas.appendChild(canvas)

    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true // 开启阴影
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';
    renderer.domElement.style.zIndex = 2;//设置层级


    const render3d = new CSS3DRenderer();
    render3d.setSize(width, height);
    this.$refs.canvas.appendChild(render3d.domElement);
    render3d.render(scene, camera)
    render3d.domElement.style.position = 'fixed';
    render3d.domElement.style.top = '0px';
    render3d.domElement.style.left = '0px';
    render3d.domElement.style.zIndex = 3;//设置层级
    render3d.domElement.style.pointerEvents = 'none';
    // const controls = new OrbitControls(camera, render3d.domElement);

 
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    const v2 = new THREE.Vector2(window.innerWidth, window.innerHeight);
    const outlinePass = new OutlinePass(v2, scene, camera);
    outlinePass.selectedObjects = [];
    meshEarth.change = function () {
      let includes_ = -1
      for (let i = 0; i < outlinePass.selectedObjects.length; i++) {
        if (outlinePass.selectedObjects[i] == this) {
          includes_ = i
        }
      }
      if (includes_ > -1) {
        outlinePass.selectedObjects.splice(includes_, 1);
      } else {
        outlinePass.selectedObjects.push(this);
      }
      objcss3d.visible = !objcss3d.visible

      let audio = new Audio(`${this.publicPath}/say.wav`);
      audio.addEventListener("canplay", function () {//监听audio是否加载完毕，如果加载完毕，则读取audio播放时间
        audio.play();
      });
      audio.addEventListener("ended", (event) => {
        audio.pause()
        audio.removeAttribute('src')
        audio.remove()
        audio = null
      });
    }
    // //模型描边颜色，默认白色         
    outlinePass.visibleEdgeColor.set(0xffff00);
    // //高亮发光描边厚度
    outlinePass.edgeThickness = 4;
    // //高亮描边发光强度
    outlinePass.edgeStrength = 6;
    //  //模型闪烁频率控制，默认0不闪烁
    outlinePass.pulsePeriod = 2;
    //模型边缘高亮边框颜色，默认白色  
    composer.addPass(outlinePass);
    // -------添加描边效果---------

    // -------射线---------
    renderer.domElement.addEventListener('click', function (event) {
      const objects = getSceneModelFaceNum(scene)
      // .offsetY、.offsetX以canvas画布左上角为坐标原点,单位px
      const px = event.offsetX;
      const py = event.offsetY;
      //屏幕坐标px、py转WebGL标准设备坐标x、y
      //width、height表示canvas画布宽高度
      const x = (px / width) * 2 - 1;
      const y = -(py / height) * 2 + 1;
      //创建一个射线投射器`Raycaster`
      const raycaster = new THREE.Raycaster();
      //.setFromCamera()计算射线投射器`Raycaster`的射线属性.ray
      // 形象点说就是在点击位置创建一条射线，射线穿过的模型代表选中
      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
      //.intersectObjects([mesh1, mesh2, mesh3])对参数中的网格模型对象进行射线交叉计算
      // 未选中对象返回空数组[],选中一个对象，数组1个元素，选中两个对象，数组两个元素
      const intersects = raycaster.intersectObjects(objects);
      console.log("射线器返回的对象", intersects);
      // intersects.length大于0说明，说明选中了模型
      if (intersects.length > 0) {
        // 选中模型的第一个模型，设置为红色
        // intersects[0].object.material.color.set(0xff0000);
        intersects[0].object.change()
      }
    })
    // -------射线---------

    // const controls = new OrbitControls(camera, canvas);
    // 监听拖动变化
    // controls.addEventListener("change", () => {
    // 	camera.lookAt(width / 2, height / 2, deep)
    // })
    // renderer.render(scene, camera)

    const color = new THREE.Color()
    const colors = [color.set("#084c68").clone(), color.set("#ffffff").clone(), color.set("#738391").clone()]

    let num = 0
    // 让立方体动起来
    function animate() {
      if (objcss3dtitle.position.x < width) {
        objcss3dtitle.position.x += 1
      } else {
        objcss3dtitle.position.x = 0
      }
      num++;
      if (num >= 30) {
        // 计算切换
        if (percentNumW < 9) {
          percentNumW++;
          percentNum++;
          percentFn_.tu()
          console.log("percentNum", percentNum)
        }
        // 星体闪烁
        pointsCubes_.forEach((pointsCube) => {
          if (pointsCube.material.colorIndex > 2) {
            pointsCube.material.colorIndex = 0
          }
          pointsCube.material.color = colors[pointsCube.material.colorIndex]
          pointsCube.material.colorIndex++;
        })
        num = 0
      }
      requestAnimationFrame(animate)
      // controls.update();
      // 地球自转
      meshEarth.rotation.y += 0.01
      pointsCubes.forEach((pointsCube) => {
        if (pointsCube.position.z <= 0) {
          pointsCube.position.z = deep
        } else {
          pointsCube.position.z -= pointsCube.position.speed
        }
      })
      // 进行渲染
      renderer.render(scene, camera)
      composer.render();
      render3d.render(scene, camera)
      camera.lookAt(width / 2, height / 2, deep)
    }
    animate()
  }
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
/* 进度条css样式 */
#container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: #000;
}

#per-box {
  position: absolute;
  width: 400px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -8px;
  border-radius: 8px;
  border: 1px solid #009999;
  overflow: hidden;
}

#per {
  height: 100%;
  width: 0px;
  transition: all 0.5s;
  background: #00ffff;
  color: #00ffff;
  line-height: 15px;
}

.body {
  position: relative;
  margin: 0 auto;
  // width: 595px;
  width: 900px;

  .exportButton {
    display: inline-block;
    position: absolute;
    width: 80px;
    top: 20px;
    right: 20px;
    box-sizing: border-box;
  }
}

.pdf {
  box-sizing: border-box;
  font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
  background-color: #fff;
  padding: 20px;
  // width: 595px;
  width: 900px;

  .userInfo {
    border: 2px solid #4395ff;
    padding: 20px;
    // border-left: 150px solid #4395ff;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .title {
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 30px;
  }

  .text {
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 16px;
    margin-right: 30px;
    white-space: normal;
    word-break: break-all;
  }

  .text_ {
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 16px;
    margin: 15px 0;
    white-space: normal;
    word-break: break-all;
  }

  .text__ {
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    white-space: normal;
    word-break: break-all;
    font-size: 16px;
  }

  .box_title {
    display: inline-block;
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 18px;
    background-color: #4395ff;
    color: #fff;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 10px;
  }

  .box_head {
    display: flex;
    justify-content: space-between;

    .box_head_title {
      font-weight: 600;
    }
  }

  // #4395ff
}
</style>
