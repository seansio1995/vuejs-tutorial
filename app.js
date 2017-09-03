new Vue({
  el:"#vue-app",
  data:{
    available:true,
    nearby:true,
    error:false,
    success:false,
    characters:["Jonny","Sean","Lena","Olivia","Tony","Zack"],
    ninjas:[
      {name: "Ryu",age:24},
      {name:"Lily",age:22},
      {name:"Dick",age:100},
      {name:"Yoda",age:202}
    ]
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
    },

    computeCSS:function(){
      return {
        available:this.available,
        nearby:this.nearby
      }
    }
  }
});
