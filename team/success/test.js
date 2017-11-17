var app = new Vue({
  el: '#app',
  data: {
    graph:[]
  }
});

for(var i=0;i<10;i++){
  var arr = [];
  for(var j=0;j<15;j++){
    arr.push(Math.random() * 20);
  }
  app.graph.push(arr);
}