new Vue({
  el:"#vue-app",
  data:{
    name:"Sean Xiao",
    job:"Student",
    website:"http://www.thenetninja.co.uk",
    websiteTag:'<a href="http://www.thenetninja.co.uk">Net Ninja</a>',
    age:22,
    x:0,
    y:0,
  },
  methods:{
    greet: function(time){
      return "Good "+time+" "+this.name;
    },
    add: function(){
      this.age++;
    },

    subtract:function(){
      this.age--;
    },

    addten:function(){
      this.age += 10;
    },

    subtractten:function(){
      this.age-=10;
    },

    updateXY:function(event){
      this.x=event.offsetX;
      this.y=event.offsetY;
    }

}
});
