new Vue ({
  el: '#appMenu',
  data: {
    order: 0,
    availiable: true,
    ordered: false,
  },
  methods: {
    addToOrder: function(){
      return this.order;
    },
    removeOrder: function() {
      order = 0;
      return this.order;
    }
  },
  computed: {
    compClasses: function(){
      return {
        ordered: this.ordered
      }
    }
  }
});

new Vue ({
  el: '#appBooking',
  data: {
    bookDay: false,
    bookTime: false,
    selectDay: false,
    name: "",
    phone: ""
  },
  methods: {
    logName: function(){
      return "You have entered your name"
    },
    logPhone: function(){
      return "You have entered your number"
    }
  }
});

new Vue ({
  el: "#appContact",
  data: {
    locations: [
      { location: "18-12 Cooper St, Warrnambool VIC 3280", email: "resturant@locationone.com.au", phone: "0456 568 659"},
      { location: "6 Allan St, Warrnambool VIC 3280", email: "resturant@locationtwo.com.au", phone: "0429 658 189" },
      { location: "365 Raglan Parade, Warrnambool VIC 3280", email: "resturant@locationthree.com.au", phone: "0465 816 842" }
    ]
  }
});

Vue.component('menu', {
  template: '<h1>{{ foodName }}</h1></br><p>{{ price }}</br>{{ extra }}</p></br><button v-on:click="close">Close></button><button v-on:click="order">Order</button>'
  data: function(){
    return {
      food: 'This is the menu',
      price: 'This is the price',
      extra: 'This is extra information'
    }
  },
  methods: {
    order: function(){

    },
    close: function(){

    }
  }
});

Vue.components('booking', {
  template: ''
    props: {
      firstName: {
        type: string,
        required: true,
        default: "none",
        validator: function(value){

        }
      },
      lastName: {
        type: string,
        required: true,
        default: "none",
        validator: function(value){

        }
      },
      email: {
        type: string,
        required: true,
        default: "none",
        validator: function(value){

        }
      },
      computed: {
        fullName: function(){
          return this.firstName + ' ' + this.lastName
        }
      },
      watch: {
        firstName: function(value, oldValue) {}
      }
    }
});
