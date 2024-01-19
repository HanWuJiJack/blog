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
      publicPath: process.env.ENV_ == 1 ? '' : '/blog',
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
    let audio
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
      percentDiv.innerHTML = parseInt(p * 100) + "%";//进度百分比
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
    const deep = 5000
    let width = window.innerWidth
    let height = window.innerHeight

    let initWidth = window.innerWidth
    let initHeight = window.innerHeight

    window.onresize = debounce(function () {
      width = window.innerWidth
      height = window.innerHeight
      pointsCubes.forEach((pointsCube) => {
        const x = THREE.MathUtils.randFloat(0, width).toFixed(2);
        const y = THREE.MathUtils.randFloat(0, height).toFixed(2);
        pointsCube.position.x = x
        pointsCube.position.y = y
      })
      pointsCubes_.forEach((pointsCube) => {
        const x = THREE.MathUtils.randFloat(0, width).toFixed(2);
        const y = THREE.MathUtils.randFloat(0, height).toFixed(2);
        pointsCube.position.x = x
        pointsCube.position.y = y
      })
      meshEarth.position.set(width * 0.8, height * 0.8, deep - 100)
      pointLight.position.set(100, height - 100, deep - 300);
      mesh.position.set(width / 2, height / 2, deep / 2)
      mesh.scale.set(width / initWidth, height / initHeight, 1);
      camera.fov = Math.tan(height / 2 / deep) / Math.PI * 180 * 1.9
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
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
    const geometry = new THREE.BoxGeometry(width, height, deep)
    const material = new THREE.MeshPhongMaterial({ side: THREE.BackSide, color: '#333' })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(width / 2, height / 2, deep / 2)
    scene.add(mesh)
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
    meshEarth.add(objcss3d)
    scene.add(meshEarth)
    objcss3d.visible = false


    const title = document.createElement('div');
    title.innerHTML = `
	<div class="elementContent">
	  <h5>点击地球开始自我简介~</h5> 
	</div>
  `;
    const objcss3dtitle = new CSS3DSprite(title);
    objcss3dtitle.position.x = width * 0.1
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

    let xhrs = 100
    let percentNum = 0
    let percentNumW = 0
    function percentFn() {
      let sum_ = 0
      function tu() {
        if (sum_ === 2) {
          percentNum += 1;
          sum_ = -1
        }
        let percent = (percentNum / xhrs).toFixed(2)
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
      if (audio) {
        // 检查音频是否已暂停：
        if (audio.paused) {
          audio.play()
        } else {
          audio.pause()
        }
      } else {
        audio = new Audio();
        audio.src = (process.env.ENV_ == 1 ? '' : '/blog') + `/say.wav`
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
    }
    outlinePass.visibleEdgeColor.set(0xffff00);
    outlinePass.edgeThickness = 4;
    outlinePass.edgeStrength = 6;
    outlinePass.pulsePeriod = 2;
    composer.addPass(outlinePass);
    renderer.domElement.addEventListener('click', function (event) {
      const objects = getSceneModelFaceNum(scene)
      const px = event.offsetX;
      const py = event.offsetY;
      const x = (px / width) * 2 - 1;
      const y = -(py / height) * 2 + 1;
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
      const intersects = raycaster.intersectObjects(objects);
      console.log("射线器返回的对象", intersects);
      if (intersects.length > 0) {
        intersects[0].object.change()
      }
    })
    const color = new THREE.Color()
    const colors = [color.set("#084c68").clone(), color.set("#ffffff").clone(), color.set("#738391").clone()]

    let num30 = 0
    let num5 = 0
    function animate() {
      if (objcss3dtitle.position.x < width * 0.9) {
        objcss3dtitle.position.x += 1
      } else {
        objcss3dtitle.position.x = width * 0.1
      }
      num30++;
      if (num30 >= 30) {
        // 星体闪烁
        pointsCubes_.forEach((pointsCube) => {
          if (pointsCube.material.colorIndex > 2) {
            pointsCube.material.colorIndex = 0
          }
          pointsCube.material.color = colors[pointsCube.material.colorIndex]
          pointsCube.material.colorIndex++;
        })
        num30 = 0
      }
      num5++;
      if (num5 >= 5) {
        // 计算切换
        if (percentNumW < 99) {
          percentNumW++;
          percentNum++;
          percentFn_.tu()
        }
        num5 = 0
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
