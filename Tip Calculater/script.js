function tipc() {
  let a = parseInt(document.getElementById("amount").value);
  let t = parseInt(document.getElementById("tip").value);

  let tip = (a * t) / 100;
  let gst = (a * 18) / 100;

  let res = a + tip + gst;
  console.log(res);
  document.getElementById("a").innerHTML = "Amount:" + a;
  document.getElementById("t").innerHTML = "Tip:" + tip;
  document.getElementById("gst").innerHTML = "GST:" + gst;
  document.getElementById("result").innerHTML = "Total:" + res;
}
