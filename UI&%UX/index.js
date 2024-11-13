// Array

var array = [
  {
    paragraph: "Yousef is the best in the world",
    Name: "Yousef_Hesham",
  },
  {
    paragraph:
      "in order to be what others want you have to be what others don't",
    Name: "abdo",
  },
  {
    paragraph: "“Mohammed is a Messanger Of Allah”",
    Name: "omar",
  },
  {
    paragraph: " There is no god but Allah",
    Name: "ibrahim",
  },
  {
    paragraph: "“if you want to be a front-end you have to study well ”",
    Name: "refaat",
  },
  {
    paragraph:
      "“front-end back-end front-end back-end front-end back-end front-end back-end front-end back-end””",
    Name: "manar",
  },
  {
    paragraph: "“  once is enough.””",
    Name: "osama",
  },
  {
    paragraph:
      "““In three words I can sum up everything I've learned about life: it goes on.””",
    Name: "saasd",
  },
];

function add() {
  var x = Math.random();
  var y = Math.floor(x * array.length);
  document.getElementById("random").innerHTML =
    array[y].paragraph + "<br/>" + array[y].Name;
}
