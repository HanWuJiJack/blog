<template>
  <div class="keyboard" v-if="ispc">
    <h1 class="post-title">键盘按键在线测试</h1>
    <div class="clear"></div>
    <div class="post-content">
      <div id="kb_box">
        <div id="kb_box_l">
          <div style="clear: both;height: 8px;"></div>
          <div class="kb_btn" id="kb_btn_27">Esc</div>
          <div class="kb_sep" style="width: 32px;"></div>
          <div class="kb_btn" id="kb_btn_112">F1</div>
          <div class="kb_btn" id="kb_btn_113">F2</div>
          <div class="kb_btn" id="kb_btn_114">F3</div>
          <div class="kb_btn" id="kb_btn_115">F4</div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn" id="kb_btn_116">F5</div>
          <div class="kb_btn" id="kb_btn_117">F6</div>
          <div class="kb_btn" id="kb_btn_118">F7</div>
          <div class="kb_btn" id="kb_btn_119">F8</div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn" id="kb_btn_120">F9</div>
          <div class="kb_btn" id="kb_btn_121">F10</div>
          <div class="kb_btn" id="kb_btn_122">F11</div>
          <div class="kb_btn" id="kb_btn_123">F12</div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn min_ft2" id="kb_btn_44">
            Print<br>Scrn
          </div>
          <div class="kb_btn min_ft2" id="kb_btn_145">
            Scr<br>Lock
          </div>
          <div class="kb_btn min_ft2" id="kb_btn_19">
            Pause<br>Break
          </div>
          <div style="clear: both;height: 8px;"></div>
          <div class="kb_btn" id="kb_btn_192">
            ~<br>`
          </div>
          <div class="kb_btn" id="kb_btn_49">
            !<br>1
          </div>
          <div class="kb_btn" id="kb_btn_50">
            @<br>2
          </div>
          <div class="kb_btn" id="kb_btn_51">
            #<br>3
          </div>
          <div class="kb_btn" id="kb_btn_52">
            $<br>4
          </div>
          <div class="kb_btn" id="kb_btn_53">
            %<br>5
          </div>
          <div class="kb_btn" id="kb_btn_54">
            ^<br>6
          </div>
          <div class="kb_btn" id="kb_btn_55">
            &amp;<br>7
          </div>
          <div class="kb_btn" id="kb_btn_56">
            *<br>8
          </div>
          <div class="kb_btn" id="kb_btn_57">
            （<br>9
          </div>
          <div class="kb_btn" id="kb_btn_48">
            ）<br>0
          </div>
          <div class="kb_btn" id="kb_btn_189">
            —<br>-
          </div>
          <div class="kb_btn" id="kb_btn_187">
            +<br>=
          </div>
          <div class="kb_btn min_ft" id="kb_btn_8" style="width: 60px;">Backspace</div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn min_ft" id="kb_btn_45">Ins</div>
          <div class="kb_btn min_ft" id="kb_btn_36">Home</div>
          <div class="kb_btn min_ft" id="kb_btn_33">
            Page<br>Up
          </div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn min_ft" id="kb_btn_144">
            Num<br>Lock
          </div>
          <div class="kb_btn" id="kb_btn_111">/</div>
          <div class="kb_btn" id="kb_btn_106">*</div>
          <div style="clear: both;height: 8px;"></div>
          <div class="kb_btn" id="kb_btn_9" style="width: 43px;">Tab</div>
          <div class="kb_btn" id="kb_btn_81">Q</div>
          <div class="kb_btn" id="kb_btn_87">W</div>
          <div class="kb_btn" id="kb_btn_69">E</div>
          <div class="kb_btn" id="kb_btn_82">R</div>
          <div class="kb_btn" id="kb_btn_84">T</div>
          <div class="kb_btn" id="kb_btn_89">Y</div>
          <div class="kb_btn" id="kb_btn_85">U</div>
          <div class="kb_btn" id="kb_btn_73">I</div>
          <div class="kb_btn" id="kb_btn_79">O</div>
          <div class="kb_btn" id="kb_btn_80">P</div>
          <div class="kb_btn" id="kb_btn_219">
            {<br>[
          </div>
          <div class="kb_btn" id="kb_btn_221">
            }<br>]
          </div>
          <div class="kb_btn" id="kb_btn_220" style="width: 43px;">
            |<br>\
          </div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn min_ft" id="kb_btn_46">Del</div>
          <div class="kb_btn min_ft" id="kb_btn_35">End</div>
          <div class="kb_btn min_ft" id="kb_btn_34">
            Page<br>Down
          </div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn" id="kb_btn_103">
            7<br>
            <span class="min_ft">Home</span>
          </div>
          <div class="kb_btn" id="kb_btn_104">
            8<br>↑
          </div>
          <div class="kb_btn" id="kb_btn_105">
            9<br>
            <span class="min_ft">PgUp</span>
          </div>
          <div style="clear: both;height: 8px;"></div>
          <div class="kb_btn" id="kb_btn_20" style="width: 56px;">
            Caps<br>Lock
          </div>
          <div class="kb_btn" id="kb_btn_65">A</div>
          <div class="kb_btn" id="kb_btn_83">S</div>
          <div class="kb_btn" id="kb_btn_68">D</div>
          <div class="kb_btn" id="kb_btn_70">F</div>
          <div class="kb_btn" id="kb_btn_71">G</div>
          <div class="kb_btn" id="kb_btn_72">H</div>
          <div class="kb_btn" id="kb_btn_74">J</div>
          <div class="kb_btn" id="kb_btn_75">K</div>
          <div class="kb_btn" id="kb_btn_76">L</div>
          <div class="kb_btn" id="kb_btn_186">
            :<br>;
          </div>
          <div class="kb_btn" id="kb_btn_222">
            "<br>'
          </div>
          <div class="kb_btn" id="kb_btn_13" style="width: 68px;">Enter</div>
          <div class="kb_sep" style="width: 154px;"></div>
          <div class="kb_btn" id="kb_btn_100">
            4<br>←
          </div>
          <div class="kb_btn" id="kb_btn_101">5</div>
          <div class="kb_btn" id="kb_btn_102">
            6<br>→
          </div>
          <div style="clear: both;height: 8px;"></div>
          <div class="kb_btn" id="kb_btn_16" style="width: 74px;">Shift</div>
          <div class="kb_btn" id="kb_btn_90">Z</div>
          <div class="kb_btn" id="kb_btn_88">X</div>
          <div class="kb_btn" id="kb_btn_67">C</div>
          <div class="kb_btn" id="kb_btn_86">V</div>
          <div class="kb_btn" id="kb_btn_66">B</div>
          <div class="kb_btn" id="kb_btn_78">N</div>
          <div class="kb_btn" id="kb_btn_77">M</div>
          <div class="kb_btn" id="kb_btn_188">
            &lt;<br>,
          </div>
          <div class="kb_btn" id="kb_btn_190">
            &gt;<br>.
          </div>
          <div class="kb_btn" id="kb_btn_191">
            ?<br>/
          </div>
          <div class="kb_btn" id="kb_btn_16_2" style="width: 88px;">Shift</div>
          <div class="kb_sep" style="width: 58px;"></div>
          <div class="kb_btn" id="kb_btn_38">↑</div>
          <div class="kb_sep" style="width: 58px;"></div>
          <div class="kb_btn" id="kb_btn_97">
            1<br>
            <span class="min_ft">End</span>
          </div>
          <div class="kb_btn" id="kb_btn_98">
            2<br>↓
          </div>
          <div class="kb_btn" id="kb_btn_99">
            3<br>
            <span class="min_ft">PgDn</span>
          </div>
          <div style="clear: both;height: 8px;"></div>
          <div class="kb_btn min_ft" id="kb_btn_17" style="width: 43px;">Ctrl</div>
          <div class="kb_btn min_ft" id="kb_btn_91">Win</div>
          <div class="kb_btn min_ft" id="kb_btn_18">Alt</div>
          <div class="kb_btn min_ft" id="kb_btn_32" style="width: 271px;">Space</div>
          <div class="kb_btn min_ft" id="kb_btn_18_2">Alt</div>
          <div class="kb_btn min_ft" id="kb_btn_92">Win</div>
          <div class="kb_btn min_ft" id="kb_btn_93">Menu</div>
          <div class="kb_btn min_ft" id="kb_btn_17_2">Ctrl</div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn" id="kb_btn_37">←</div>
          <div class="kb_btn" id="kb_btn_40">↓</div>
          <div class="kb_btn" id="kb_btn_39">→</div>
          <div class="kb_sep" style="width: 20px;"></div>
          <div class="kb_btn" id="kb_btn_96" style="width: 64px;">
            0<br>
            <span class="min_ft">Ins</span>
          </div>
          <div class="kb_btn" id="kb_btn_110">
            .<br>
            <span class="min_ft">Del</span>
          </div>
        </div>
        <div id="kb_box_r">
          <div style="clear: both;height: 48px;"></div>
          <div class="kb_btn" id="kb_btn_109">-</div>
          <div style="clear: both;height: 8px;"></div>
          <div class="kb_btn" id="kb_btn_107" style="height: 70px;">+</div>
          <div style="clear: both;height: 8px;"></div>
          <div class="kb_btn min_ft2" id="kb_btn_13_2" style="height: 70px;">Enter</div>
        </div>
      </div>
      <div id="kb_box_b">
        <div id="comments"></div>
        <div id="kb_box_br">
          <input type="button" @click="resetKeyboard" value="重置" class="reset_kb_btn">
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    不支持移动端设备打开！
  </div>
</template>

<script>

export default {
  name: 'keyboard',
  layout: 'nor',
  head() {
    return {
      title: 'keyboard',
      meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'hsueh的keyboard'
      },
      ],
    }
  },
  data() {
    return {
      keydownSet: {},
      ispc: false,
    }
  },
  computed: {
  },
  methods: {
    isPc() {
      if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return false; // 移动端
      } else {
        return true; // PC端
      }
    },
    trans(loc, code) {
      let res = code;
      if (loc === 3) {
        const numPad = {
          45: 96,
          46: 110,
          35: 97,
          40: 98,
          34: 99,
          37: 100,
          12: 101,
          39: 102,
          36: 103,
          38: 104,
          33: 105
        };
        if (code in numPad) {
          res = numPad[code];
        }
        ;
      }
      ; if (loc === 2 && code >= 16 && code <= 18) {
        res = code + '_2';
      }
      ; if (loc === 3 && code === 13) {
        res = code + '_2';
      }
      ; return res;
    },
    functionKey(code) {
      const keyMap = {
        175: "音量加",
        174: "音量减",
        179: "停止",
        173: "静音",
        172: "浏览器",
        180: "邮件",
        170: "搜索",
        171: "收藏",
        183: "计算器",
        182: "资源管理器",
        177: "上一首",
        176: "下一首",
        181: "音乐"
      };
      if (code in keyMap) {
        return keyMap[code];
      } else {
        return code;
      }
    },
    pressKeyboard(evt) {
      evt = (evt) ? evt : window.event;
      if (evt.keyCode) {
        var key_code = evt.keyCode;
        if (evt.type) {
          if (evt.type === "keydown")
            this.keydownSet[key_code] = true;
          else if (key_code in this.keydownSet)
            return;
        }
        if (evt.location)
          key_code = this.trans(evt.location, key_code);
        const btnKey = document.getElementById("kb_btn_" + key_code);
        if (btnKey) {
          btnKey.style.backgroundColor = "#FFCA13";
          setTimeout(function () {
            btnKey.style.backgroundColor = "#FFE282"
          }, 100);
        } else {
          document.getElementById("comments").innerText = "功能键：" + this.functionKey(key_code);
        }
        return false;
      }
    },
    resetKeyboard() {
      var a = document.getElementById("kb_box").getElementsByTagName("div");
      for (let i = 0; i < a.length; i++) {
        if (a[i].className.indexOf("kb_btn") >= 0) {
          a[i].style.backgroundColor = "#fff";
        }
      }
    }
  },
  unmounted() {
    window.document.onkeydown = null;
    window.document.onkeyup = null;
  },
  mounted() {
    this.loading("loading", 1);
    window.document.onkeydown = this.pressKeyboard;
    window.document.onkeyup = this.pressKeyboard;
    this.ispc = this.isPc()
    this.load.close();
  }
}
</script>
<style lang="scss">
.keyboard {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  min-width: 1000px;
  box-sizing: border-box;
  background-image: linear-gradient(36deg, #17522E 0%, #2893A2 50%, #FFCB16 100%);

  .post-title {
    color: #fff;
  }

  .kb_sep {
    height: 32px;
    float: left
  }

  .reset_kb_btn {
    border: 1px solid #323232;
    background-repeat: no-repeat;
    color: #FFF;
    cursor: pointer;
    height: 23px;
    padding-top: 0;
    padding-right: 5px;
    padding-bottom: 0;
    padding-left: 5px;
    margin: 0;
    -moz-border-radius: 3px;
    -khtml-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: #323232;
  }

  .kb_btn {
    font-size: 12px;
    font-family: Arial Narrow, Tahoma, sans-serif;
    height: 29px;
    width: 26px;
    background-color: #fff;
    // border: 1px solid #ccc;
    padding-left: 4px;
    padding-top: 1px;
    float: left;
    margin-right: 3px;
    margin-left: 3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    box-sizing: content-box;
    letter-spacing: normal;
    line-height: normal;
  }

  .min_ft {
    font-size: 10px;
  }

  .min_ft2 {
    font-size: 8px;
  }

  #kb_box {
    width: 872px;
    height: 250px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 40px;
    background-color: #323232
  }

  #kb_box_l {
    width: 834px;
    float: left
  }

  #kb_box_r {
    width: 38px;
    float: left
  }

  #kb_box_b {
    width: 872px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 60px
  }

  #kb_box_br {
    float: right;
    margin-top: 8px;
    margin-right: 3px
  }
}
</style>
