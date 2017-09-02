new Vue({
  el:"#vue-app",
  data:{
    name:"",
    age:20,
    a:0,
    b:0,
  },
  methods:{
      logName:function(){
        console.log("You enter your name");
      },

      logAge:function(){
        console.log("You enter your age");
      },


    // addAgeA:function(){
    //   console.log("Add A");
    //   return this.age+this.a;
    // },
    //
    //
    // addAgeB:function(){
    //   console.log("Add B");
    //   return this.age+this.b;
    // }
  },

  computed:{
    addAgeA:function(){
      console.log("Add A");
      return this.age+this.a;
    },


    addAgeB:function(){
      console.log("Add B");
      return this.age+this.b;
    }
  }
});
