var p1score = 0;
var p2score = 0;
var p1name = localStorage.getItem("player1");
var p2name = localStorage.getItem("player2");
document.getElementById("p1n").innerHTML = p1name + " :  ";
document.getElementById("p2n").innerHTML = p2name + " :  ";
document.getElementById("p1s").innerHTML = p1score;
document.getElementById("p2s").innerHTML = p2score;
document.getElementById("qturn").innerHTML = "Question Turn- " + p1name;
document.getElementById("aturn").innerHTML = "Answer Turn- " + p2name;

function send()
{
    word = document.getElementById("word").value;
    nw = word.toLowerCase();
    console.log(nw);

    c1 = nw.charAt(1);
    console.log(c1);

    len = Math.floor(nw.length/2);
    c2 = nw.charAt(len);
    console.log(c2);

    len1 = nw.length-1;
    c3 = nw.charAt(len1);
    console.log(c3);

    r1 = nw.replace(c1, "_");
    r2 = r1.replace(c2, "_");
    r3 = r2.replace(c3, "_");
    console.log(r3);

    q = "<h4>Q. "+ r3 +" </h4>";
    a = "<br><h5 id='inp_label'>Answer: </h5>&nbsp;&nbsp;<input type='text' class='form-control' placeholder='Enter Answer' id='ans_input'>";
    b = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    all = q+a+b;
    document.getElementById("output").innerHTML = all;
}

var qturn = "pl1";
var aturn = "pl2";

function check()
{
   ans_get = document.getElementById("ans_input").value;
   ans = ans_get.toLowerCase();
   console.log(ans);

   if (ans == nw)
   {
       if (aturn == "pl1")
       {
           p1score = p1score + 1;
           document.getElementById("p1s").innerHTML = p1score;
       } else 
       {
           p2score = p2score + 1;
           document.getElementById("p2s").innerHTML = p2score;
       }
   }

   if (qturn == "pl1")
   {
       qturn = "pl2";
       document.getElementById("qturn").innerHTML = "Question Turn- " + p2name;
   } else 
   {
       qturn = "pl1";
       document.getElementById("qturn").innerHTML = "Question Turn- " + p1name;
   }

   if (aturn == "pl1")
   {
       aturn = "pl2";
       document.getElementById("aturn").innerHTML = "Answer Turn- " + p2name;
   } else 
   {
       aturn = "pl1";
       document.getElementById("aturn").innerHTML = "Answer Turn- " + p1name;
   }

   document.getElementById("output").innerHTML = "";
}