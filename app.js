Vue.component("greeting",{
  template:"<p>Hello this is greeting from {{name}} <button v-on:click='changeName'>Change Name</button></p>",
  data:function(){
    return {
      name:"Sean"
    }
  },
  methods:{
    changeName:function(){
    this.name="Mario";
  },
}
});


var one=new Vue({
  el:"#vue-app-one",
});


var two=new Vue({
  el:"#vue-app-two",
});
