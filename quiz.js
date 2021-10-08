var p1score = 0;
var p2score = 0;

function logout()
{
    window.location = "index.html";
}

function pname()
{
    player1name = localStorage.getItem("player1");
    player2name = localStorage.getItem("player2");
    console.log(player1name);
    console.log(player2name);

    document.getElementById("p1n").innerHTML = player1name + ": ";
    document.getElementById("p2n").innerHTML = player2name + ": ";
    document.getElementById("p1s").innerHTML = p1score;
    document.getElementById("p2s").innerHTML = p2score;
}

function send()
{
    numb1 = document.getElementById("num1").value;
    console.log(numb1);

    numb2 = document.getElementById("num2").value;
    console.log(numb2);
    
    q = "<h4>" + numb1 + " x " + numb2 + "</h4>";
    a = "<h5 id='inp_label'>Answer:</h5><input type='text' class='form-control' placeholder='Enter Answer Here' id='ans_input'>";
    b = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    all = q+a+b
    document.getElementById("output").innerHTML = all;
    document.getElementById("output").style.height = 160;
}