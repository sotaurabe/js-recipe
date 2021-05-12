new Vue({
  el: "#app",
  data: {
    message: "ハロー",
  },
  methods: {
    changeMessage: function() {
      this.message = "ナマステ"
    },
  },
})
