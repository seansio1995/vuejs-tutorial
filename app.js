new Vue({
  el:"#vue-app",
  data:{
    name:"Sean Xiao",
    job:"Student",
  },
  methods:{
    greet: function(time){
      return "Good "+time+" "+this.name;
    }

  }
});
