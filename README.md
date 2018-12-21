# vue入坑记

## 一.安装
    npm install -g vue-cli
    vue init webpack my-project
    npm run dev
## 二.指令
### 2.v-if与v-show
    v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。例如模拟一个用户登录状态，在用户登录后显示用户名称
    v-show：调整css dispaly属性，可以使客户端操作更加流畅。
### 3.v-for、computed属性计算、methods排序
```    computed:根据业务需求修改items里面的数据,使用methods里的方法,注意要使用this去调用.
    数组:
    export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isLogin:true,
        items:[20,23,18,65,32,19,54,56,41,5]
      }
    },
    computed:{
      sortItems:function(){
            return this.items.sort(this.sortNumber);
      }
    },
    methods:{
      sortNumber:function(a,b){
              return a-b;
      }
    }
  }
  
    对象:
      export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          isLogin:true,
          students:[
            {name:'jspang',age:32},
            {name:'Panda',age:30},
            {name:'PanPaN',age:21},
            {name:'King',age:45},
            {name:'eason',age:30}
          ]
        }
      },
      computed:{
        sortStudent:function(){
              return this.sortByKey(this.students,'age');
        }
      },
      methods:{
        sortByKey:function(array,key){
                return array.sort(function(a,b){
                  let x=a[key];
                  let y=b[key];
                  return x-y;
                });

        }
      }
    }
```
### 4.v-text
      之前我们在html中输出data中的值时用的是 {{xxx}} ，这种情况是有弊端的：当网速很慢或JavaScript出错时，
      会暴露 {{xxx}} ,最好用v-text
### 5.绑定事件监听器
        <button v-on:click='add'>+</button>
        <button @click='reduce'>-</button>
### 6.v-model指令
       双向数据绑定
       .lazy：取代 imput 监听 change 事件。
       <input type="text" v-model.lazy="message">//文本框输入字符时,不立即更新,等待光标移出input才显示字符
       .trim：输入去掉首尾空格。
       .number：开头输入字符串转为数字。
       <textarea cols="30" rows="10" v-model="message"></textarea>
       多选按钮绑定一个值(两种写法,注意label作用)
       <input type="checkbox" id="isTrue" v-model="isTrue">
       <label for='isTrue'>{{isTrue}}</label>
       <label><input type="checkbox" id="isTrue" v-model="isTrue">{{isTrue}}</label>
       多选绑定一个数组
       <p>
            <input type="checkbox" id="JSPang" value="JSPang" v-model="web_Names">
            <label for="JSPang">JSPang</label><br/>
            <input type="checkbox" id="Panda" value="Panda" v-model="web_Names">
            <label for="Panda">Panda</label><br/>
            <input type="checkbox" id="PanPan" value="PanPan" v-model="web_Names">
            <label for="PanPan">PanPan</label>
        <p v-text='web_Names'></p>
        单选按钮绑定数据
        <input type="radio" id="one" value="男" v-model="sex">
            <label for="one">男</label>
            <input type="radio" id="two" value="女" v-model="sex">
            <label for="one">女</label>
        <p>{{sex}}</p>
### 7.v-bind指令
    <!-- 完整语法 -->
    <a v-bind:href="url"></a>
    <!-- 缩写 -->
    <a :href="url"></a>
### 8.绑定css样式
    绑定的值必须在vue中的data属性中进行声明
    <div :class="className">1、绑定classA</div>
    <div :class="{classA:isOk}">2、绑定class中的判断</div>
    <div v-bind:class="[classData]">3、绑定class中的数组</div>
    <div :class="isOk?classA:classB">4、绑定class中的三元表达式判断</div>
    <div :style="{color:red,fontSize:font}">5、绑定style</div>
    <div :style="styleObject">6、用对象绑定style样式</div>
### 9.其他指令
    v-pre指令:v-pre就不会输出vue中的data值
    <div v-pre>{{message}}</div>
    v-cloak指令:在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用，
    [v-cloak] {
        display: none;
    }
    <div v-cloak>
      {{ message }}
    </div>
    v-once指令:在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。
    <div v-once>第一次绑定的值：{{message}}</div>
    <div><input type="text" v-model="message"></div>
    使用该指令后,双向绑定无效了。
    </div>  
## 三.自定义指令
    ```Vue.directive自定义指令
    el: 指令所绑定的元素，可以用来直接操作DOM。
    binding: 一个对象，包含指令的很多信息。
    vnode: Vue编译生成的虚拟节点。
        <template>
            <div>
                <div v-eason="color" id='demo'>
                  {{num}}
                </div>
                <button @click='add'>add</button>
            </div>  
        </template>
        <script>
        export default {
          name: 'HelloWorld',
          data () {
            return {
              num:1,
              color:'red'
            }
          },
          methods:{
            add:function(){
              this.num++;
            }
          },
          directives:{
            eason:{
                bind:function(el,binding,vnode){//被绑定
                 el.style = 'color:'+binding.value;
                },
                inserted:function(){//绑定到节点
                      console.log('2 - inserted');
                },
                update:function(){//组件更新
                      console.log('3 - update');
                },
                componentUpdated:function(){//组件更新完成
                      console.log('4 - componentUpdated');
                },
                unbind:function(){//解绑
                      console.log('1 - bind');
                }
            }
          }
        }
        </script>```
