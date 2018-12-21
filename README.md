# vue入坑记

### 1.安装
    npm install -g vue-cli
    vue init webpack my-project
    npm run dev
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
      之前我们在html中输出data中的值时用的是 {{xxx}} ，这种情况是有弊端的：当网速很慢或JavaScript出错时，会暴露 {{xxx}} ,最好用v-text
    
