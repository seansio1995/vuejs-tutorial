new Vue({
  el:"#vue-app",
  data:{
    name:"Sean Xiao",
    job:"Student",
    website:"http://www.thenetninja.co.uk",
    websiteTag:'<a href="http://www.thenetninja.co.uk">Net Ninja</a>'
  },
  methods:{
    greet: function(time){
      return "Good "+time+" "+this.name;
    }

  }
});
