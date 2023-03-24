function addfun() {
  var select = document.getElementById("select"); //select option
  var main2 = document.getElementById("main0"); //main div

  if (select.value == "text") {
    var smalldiv = document.createElement("div"); // 1 creat div
    smalldiv.style = "display:flex;align-items: center;  margin:5px;";
    // smalldiv.style = " border:1px solid #1D817F; border-radius:10px; padding:3px 10px; margin:2px;";
    main2.appendChild(smalldiv); //append in maindiv

    var width = document.createElement("div");
    smalldiv.appendChild(width);

    var firstptag = document.createElement("p"); //creat for lable
    width.appendChild(firstptag);
    firstptag.style.display = "none";

    var inpdiv = document.createElement("div"); //creat div for input and validp
    width.appendChild(inpdiv);

    var input1 = document.createElement("input"); // creat lable input
    input1.type = "text";
    input1.placeholder = "Lable";
    inpdiv.appendChild(input1);
    input1.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none";

    var validp = document.createElement("p"); //creat valid p
    validp.id = "validp";
    validp.style.display = "none";
    inpdiv.appendChild(validp);

    var btnLable = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(btnLable);
    btnLable.innerText = "Add";
    btnLable.style =
      "padding:7px 20px;border-radius:10px; border:none; background-color:#00D26A;";
    btnLable.setAttribute("onclick", "add(this)");

    var inpdiv2 = document.createElement("div"); //creat div for input and validp2
    smalldiv.appendChild(inpdiv2);

    var input2 = document.createElement("input"); // creat lable input
    input2.type = "text";
    input2.placeholder = "Text";
    inpdiv2.appendChild(input2);
    input2.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none";

    var validp2 = document.createElement("p"); //creat valid p2
    validp2.id = "validp2";
    validp2.style.display = "none";
    inpdiv2.appendChild(validp2);

    var cut = document.createElement("button"); // creat btn for cut full div
    smalldiv.appendChild(cut);
    cut.innerText = "❎";
    // cut.style =
    //   " width:40px; height:40px; border-radius:50%; margin-left:170px;justify-content: center; display:inline-flex;align-items: center; ";
    //
    cut.style =
      " border:none; padding:0px 0px 5px 0px; background-color: transparent; font-size:30px; margin:0px 0px 0px 152px;";
    cut.setAttribute("onclick", "cut(this)");
  } else if (select.value == "number") {
    var smalldiv = document.createElement("div"); // 1 creat div
    smalldiv.style = "display:flex;align-items: center; margin:5px";
    main2.appendChild(smalldiv); //append in maindiv

    var width = document.createElement("div");
    smalldiv.appendChild(width);

    var firstptag = document.createElement("p"); //creat for lable
    width.appendChild(firstptag);
    firstptag.style.display = "none";

    var inpdiv = document.createElement("div"); //creat div for input and validp
    width.appendChild(inpdiv);

    var input1 = document.createElement("input"); // creat lable input
    input1.type = "text";
    input1.placeholder = "Lable";
    inpdiv.appendChild(input1);
    input1.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none";

    var validp = document.createElement("p"); //creat valid p
    validp.id = "validp";
    validp.style.display = "none";
    inpdiv.appendChild(validp);

    var btnLable = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(btnLable);
    btnLable.innerText = "Add";
    btnLable.style =
      "padding:7px 20px;border-radius:10px;border:none;background-color:#00D26A;";
    btnLable.setAttribute("onclick", "add(this)");

    var inpdiv2 = document.createElement("div"); //creat div for input and validp2
    smalldiv.appendChild(inpdiv2);

    var input2 = document.createElement("input"); // creat lable input
    input2.type = "number";
    input2.placeholder = "Number";
    inpdiv2.appendChild(input2);
    input2.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none";

    var validp2 = document.createElement("p"); //creat valid p2
    validp2.id = "validp2";
    validp2.style.display = "none";
    inpdiv2.appendChild(validp2);

    var cut = document.createElement("button"); // creat btn for cut full div
    smalldiv.appendChild(cut);
    cut.innerText = "❎";
    // cut.style =
    //   "padding:7px 20px;border-radius:10px; border:none;background-color:#2BC992;margin-left:215px;justify-content: center; display:inline-flex;align-items";
    cut.style =
      " border:none; padding:0px 0px 5px 0px; background-color: transparent; font-size:30px; margin:0px 0px 0px 152px;";
    cut.setAttribute("onclick", "cut(this)");
  } else if (select.value == "email") {
    var smalldiv = document.createElement("div"); // 1 creat div
    smalldiv.style = "display:flex;align-items: center; margin:5px";
    main2.appendChild(smalldiv); //append in maindiv

    var width = document.createElement("div");
    smalldiv.appendChild(width);

    var firstptag = document.createElement("p"); //creat for lable
    width.appendChild(firstptag);
    firstptag.style.display = "none";

    var inpdiv = document.createElement("div"); //creat div for input and validp
    width.appendChild(inpdiv);

    var input1 = document.createElement("input"); // creat lable input
    input1.type = "text";
    input1.placeholder = "Lable";
    inpdiv.appendChild(input1);
    input1.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none";

    var validp = document.createElement("p"); //creat valid p
    validp.id = "validp";
    validp.style.display = "none";
    inpdiv.appendChild(validp);

    var btnLable = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(btnLable);
    btnLable.innerText = "Add";
    btnLable.style =
      "padding:7px 20px;border-radius:10px; border:none;background-color:#00D26A;";
    btnLable.setAttribute("onclick", "add(this)");

    var inpdiv2 = document.createElement("div"); //creat div for input and validp2
    smalldiv.appendChild(inpdiv2);

    var input2 = document.createElement("input"); // creat lable input
    input2.type = "email";
    input2.placeholder = "E-mail";
    inpdiv2.appendChild(input2);
    input2.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none";

    var validp2 = document.createElement("p"); //creat valid p2
    validp2.id = "validp2";
    validp2.style.display = "none";
    inpdiv2.appendChild(validp2);

    var cut = document.createElement("button"); // creat btn for cut full div
    smalldiv.appendChild(cut);
    cut.innerText = "❎";
    // cut.style =
    //   "padding:7px 20px;border-radius:10px; border:none;background-color:#2BC992;margin-left:215px;justify-content: center; display:inline-flex;align-items";
    cut.style =
      " border:none; padding:0px 0px 5px 0px; background-color: transparent; font-size:30px; margin:0px 0px 0px 152px;";
    cut.setAttribute("onclick", "cut(this)");
  } else if (select.value == "select") {
    var smalldiv = document.createElement("div"); // 1 creat div
    smalldiv.style = "display:flex;align-items: center; margin:5px";
    main2.appendChild(smalldiv); //append in maindiv

    var width = document.createElement("div");
    smalldiv.appendChild(width);

    var firstptag = document.createElement("p"); //creat for lable
    width.appendChild(firstptag);
    firstptag.style.display = "none";

    var inpdiv = document.createElement("div"); //creat div for input and validp
    width.appendChild(inpdiv);

    var input1 = document.createElement("input"); // creat lable input
    input1.type = "text";
    input1.placeholder = "Lable";
    inpdiv.appendChild(input1);
    input1.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none;";

    var validp = document.createElement("p"); //creat valid p
    validp.id = "validp";
    validp.style.display = "none";
    inpdiv.appendChild(validp);

    var btnLable = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(btnLable);
    btnLable.innerText = "Add";
    // btnLable.id = "Addb";
    btnLable.style =
      "padding:7px 20px;border-radius:10px; border:none;background-color:#00D26A;";
    btnLable.setAttribute("onclick", "add(this)");

    var inpdiv2 = document.createElement("div"); //creat div for input and validp2
    smalldiv.appendChild(inpdiv2);
    inpdiv2.style = " display: flex;flex-direction: column;";

    var input3 = document.createElement("select"); // creat lable input
    input3.type = "select";
    inpdiv2.appendChild(input3);
    input3.style =
      "padding:8px 10px; border-radius:5px; text-transform: capitalize;  border:none; margin-left:5.5px;width:185px";

    var input2 = document.createElement("input"); // creat lable input
    input2.type = "text";
    input2.id = "del1";
    input2.placeholder = "Enter Your select Value";
    inpdiv2.appendChild(input2);
    input2.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none;margin-top:10px;width:185px";

    var validp2 = document.createElement("p"); //creat valid p2
    validp2.id = "validp2";
    validp2.style.display = "none";
    inpdiv2.appendChild(validp2);

    var select = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(select);
    select.innerText = "Add";
    select.id = "del2";
    select.style =
      "padding:7px 20px;border-radius:10px; border:none;background-color:#00D26A;";
    select.setAttribute("onclick", "select(this)");

    var select2 = document.createElement("button"); // add lable name btn
    select2.style =
      " border:none; padding:0; background-color: transparent; font-size:30px; margin:0;";
    // select2.style =
    //   " padding:7px 10px;border-radius:10px; border:none;background-color:#2BC992; margin:0 ";
    select2.setAttribute("onclick", "done(this)");
    smalldiv.appendChild(select2);
    select2.innerText = "✅";

    var cut1 = document.createElement("span"); // creat btn for cut full div
    smalldiv.appendChild(cut1);
    var cut2 = document.createElement("span"); // creat btn for cut full div
    smalldiv.appendChild(cut2);
    var cut = document.createElement("button"); // creat btn for cut full div
    smalldiv.appendChild(cut);
    cut.innerText = "❎";
    // cut.style =
    //   "padding:7px 20px;border-radius:10px; border:none;background-color:#2BC992;margin-left:17px;justify-content: center; display:inline-flex;align-items";
    cut.style =
      " border:none; padding:0px 0px 5px 0px; background-color: transparent; font-size:30px; margin:0px 0px 0px 4px;";
    cut.setAttribute("onclick", "cut(this)");
  } else if (select.value == "radio") {
    var smalldiv = document.createElement("div"); // 1 creat div
    smalldiv.style = "display:flex;align-items: center; margin:5px";
    main2.appendChild(smalldiv); //append in maindiv

    var width = document.createElement("div");
    smalldiv.appendChild(width);

    var firstptag = document.createElement("p"); //creat for lable
    width.appendChild(firstptag);
    firstptag.style.display = "none";

    var inpdiv = document.createElement("div"); //creat div for input and validp
    width.appendChild(inpdiv);
    var input1 = document.createElement("input"); // creat lable input
    input1.type = "text";
    input1.placeholder = "Lable";
    inpdiv.appendChild(input1);
    input1.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none;";

    var validp = document.createElement("p"); //creat valid p
    validp.id = "validp";
    validp.style.display = "none";
    inpdiv.appendChild(validp);

    var btnLable = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(btnLable);
    btnLable.innerText = "Add";
    btnLable.style =
      "padding:7px 20px;border-radius:10px; border:none;background-color:#00D26A;";
    btnLable.setAttribute("onclick", "add(this)");

    var inpdiv2 = document.createElement("div"); //creat div for input and validp2
    smalldiv.appendChild(inpdiv2);

    var span1 = document.createElement("span"); // for radio input
    inpdiv2.appendChild(span1);

    var input2 = document.createElement("input"); // creat lable input
    input2.type = "text";
    input2.id = "del3";
    input2.placeholder = "Enter Your Radio Value";
    inpdiv2.appendChild(input2);
    input2.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none;";

    var validp2 = document.createElement("p"); //creat valid p2
    validp2.id = "validp2";
    validp2.style.display = "none";
    inpdiv2.appendChild(validp2);

    var gender = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(gender);
    gender.innerText = "Add";
    gender.id = "del4";
    gender.style =
      "padding:7px 20px;border-radius:10px; border:none;background-color:#00D26A;";
    gender.setAttribute("onclick", "gender(this)");

    var select2 = document.createElement("button"); // add lable name btn
    // select2.style =
    //   " padding:7px 10px;border-radius:10px; border:none;background-color:#2BC992;";
    select2.style =
      " border:none; padding:0; background-color: transparent; font-size:30px; margin:0;";
    select2.setAttribute("onclick", "done(this)");
    smalldiv.appendChild(select2);
    select2.innerText = "✅";

    var cut = document.createElement("button"); // creat btn for cut full div
    smalldiv.appendChild(cut);
    cut.innerText = "❎";
    // cut.style =
    //   "padding:7px 20px;border-radius:10px; border:none;background-color:#2BC992;margin-left:17px;justify-content: center; display:inline-flex;align-items";
    cut.style =
      " border:none; padding:0px 0px 5px 0px; background-color: transparent; font-size:30px; margin:0px 0px 0px 7px;";
    cut.setAttribute("onclick", "cut(this)");
  } else if (select.value == "checkbox") {
    var smalldiv = document.createElement("div"); // 1 creat div
    smalldiv.style = "display:flex; align-items: center; margin:5px";
    main2.appendChild(smalldiv); //append in maindiv

    var width = document.createElement("div");
    smalldiv.appendChild(width);

    var firstptag = document.createElement("p"); //creat for lable
    width.appendChild(firstptag);
    firstptag.style.display = "none";

    var inpdiv = document.createElement("div"); //creat div for input and validp
    width.appendChild(inpdiv);

    var input1 = document.createElement("input"); // creat lable input
    input1.type = "text";
    input1.placeholder = "Lable";
    inpdiv.appendChild(input1);
    input1.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none;";

    var validp = document.createElement("p"); //creat valid p
    validp.id = "validp";
    validp.style.display = "none";
    inpdiv.appendChild(validp);

    var btnLable = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(btnLable);
    btnLable.innerText = "Add";
    btnLable.style =
      "padding:7px 20px;border-radius:10px; border:none;background-color:#00D26A;";
    btnLable.setAttribute("onclick", "add(this)");

    var inpdiv2 = document.createElement("div"); //creat div for input and validp2
    smalldiv.appendChild(inpdiv2);

    var span1 = document.createElement("span"); // for radio input
    inpdiv2.appendChild(span1);

    var input2 = document.createElement("input"); // creat lable input
    input2.type = "text";
    input2.id = "del5";
    input2.placeholder = "Enter Your checkbox Value";
    inpdiv2.appendChild(input2);
    input2.style =
      "padding:7px 10px; border-radius:10px; text-transform: capitalize;  border:none;";

    var validp2 = document.createElement("p"); //creat valid p2
    validp2.id = "validp2";
    validp2.style.display = "none";
    inpdiv2.appendChild(validp2);

    var checkbox = document.createElement("button"); // add lable name btn
    smalldiv.appendChild(checkbox);
    checkbox.innerText = "Add";
    checkbox.id = "del6";
    checkbox.style =
      "padding:7px 20px;border-radius:10px; border:none;background-color:#00D26A;";
    checkbox.setAttribute("onclick", "checkbox(this)");

    var select2 = document.createElement("button"); // add lable name btn
    // select2.style =
    //   " padding:7px 10px;border-radius:10px; border:none;background-color:#2BC992;";
    select2.style =
      " border:none; padding:0; background-color: transparent; font-size:30px; margin:0;";
    select2.setAttribute("onclick", "done(this)");
    smalldiv.appendChild(select2);
    select2.innerText = "✅";

    var cut1 = document.createElement("span"); // extra span
    smalldiv.appendChild(cut1);
    var cut = document.createElement("button"); // creat btn for cut full div
    smalldiv.appendChild(cut);
    cut.innerText = "❎";
    // cut.style =
    //   "padding:7px 20px;border-radius:10px; border:none;background-color:#2BC992;margin-left:20px;justify-content: center; display:inline-flex;align-items";
    cut.style =
      " border:none; padding:0px 0px 5px 0px; background-color: transparent; font-size:30px; margin:0px 0px 0px 7px;";
    cut.setAttribute("onclick", "cut(this)");
  } else if (select.value == "submit") {
    var smalldiv = document.createElement("div"); // 1 creat div
    smalldiv.style =
      "display:flex; justify-content: center; align-items: center; margin:5px";
    main2.appendChild(smalldiv); //append in maindiv

    var submit = document.createElement("input");
    submit.type = "submit";
    submit.style =
      "padding:10px 25px; background-color:#00D26A; border-radius:2rem; border:2px solid white;";
    smalldiv.appendChild(submit);
    submit.setAttribute("onclick", "submit(this)");
  } else {
    alert("plz select the value");
  }
}

// for lable

function add(a) {
  // console.log(a.parentNode.childNodes[1]);
  var f = a.parentNode.childNodes[0].childNodes[1].childNodes[0];
  if (f.value !== "") {
    var l = a.parentNode.childNodes[0].childNodes[1].childNodes[0];
    a.parentNode.childNodes[0].childNodes[0].innerHTML = l.value + " :-";
    l.style.display = "none";
    a.parentNode.childNodes[0].childNodes[0].style =
      "display:block; padding:10px; margin:0px 5px; width:286px; color:black; text-transform: capitalize;  font-weight: 700; ";
    a.parentNode.childNodes[1].style.display = "none";
    // a.parentNode.style.display = "flex";
  } else {
    alert("Fill the details");
  }
}

// for div cut

function cut(b) {
  b.parentNode.style.display = "none";
}

// for radio type

function gender(c) {
  var valid = c.parentNode.childNodes[2].childNodes[1];
  if (valid.value !== "") {
    var radio = document.createElement("input");
    c.parentNode.childNodes[2].childNodes[0].appendChild(radio);
    radio.type = "radio";
    radio.name = "gender";
    var ho = document.createElement("lable");
    ho.style.margin = "0px 5px";
    ho.style.textTransform = "capitalize";
    c.parentNode.childNodes[2].childNodes[0].appendChild(ho);
    var br = document.createElement("br");
    c.parentNode.childNodes[2].childNodes[0].appendChild(br);
    ho.innerHTML = c.parentNode.childNodes[2].childNodes[1].value;
    radio.value = ho.innerHTML;
    c.parentNode.childNodes[2].childNodes[1].value = "";
    c.parentNode.childNodes[2].style = "display:flex; flex-direction: column;";
  }
}

// for select

function select(c) {
  var option1 = document.createElement("option");
  c.parentNode.childNodes[2].childNodes[0].appendChild(option1);
  option1.innerText = c.parentNode.childNodes[2].childNodes[1].value;
  c.parentNode.childNodes[2].childNodes[1].value = "";
}

// for done

function done(k) {
  console.log(k.parentNode);
  k.parentNode.childNodes[2].childNodes[1].style.display = "none";
  k.parentNode.childNodes[3].style.display = "none";
  k.parentNode.childNodes[4].style.display = "none";
  // k.parentNode.childNodes[4].style.display = "none";
}

// for checkbox

function checkbox(c) {
  var f3 = c.parentNode.childNodes[2].childNodes[1];
  if (f3.value !== "") {
    var radio = document.createElement("input");
    c.parentNode.childNodes[2].childNodes[0].appendChild(radio);
    radio.type = "checkbox";
    radio.name = "checkbox";
    var ho = document.createElement("lable");
    ho.style.margin = "0px 5px";
    ho.style.textTransform = "capitalize";
    c.parentNode.childNodes[2].childNodes[0].appendChild(ho);
    var br = document.createElement("br");
    c.parentNode.childNodes[2].childNodes[0].appendChild(br);

    ho.innerHTML = c.parentNode.childNodes[2].childNodes[1].value;
    radio.value = ho.innerHTML;
    c.parentNode.childNodes[2].childNodes[1].value = "";
    c.parentNode.childNodes[2].style = "display:flex; flex-direction:column;";
  } else {
    alert("Fill the checkbox value");
  }
}

function submit(s) {
  var n = s.parentNode.parentNode.childNodes;
  var a = document.getElementById("main3");
  a.style =
    "background-color: #1d817f76;width: 850px;padding: 23px 30px;border: 2px solid #DFB890; border-radius: 10px;";

  for (var i = 0; i < n.length; i++) {
    var k = n[i].childNodes;
    for (var m = 0; m < k.length - 1; m++) {}
    k[m].remove();
    // console.log(k[m].remove());
    var sumbtn2 = document.createElement("input");
    sumbtn2.style =
      "padding:10px 25px; background-color:#2BC992; border-radius:2rem; border:2px solid white;";
    sumbtn2.type = "submit";
    a.appendChild(sumbtn2);
    sumbtn2.setAttribute("onclick", "submit2(this)");
    s.style.display = "none";
    a.innerHTML = s.parentNode.parentNode.parentNode.innerHTML;
    s.parentNode.parentNode.parentNode.remove();
    var btn2 = document.getElementById("main3");
    btn2.setAttribute("class", "maindi2");
  }
}

function submit2(g) {
  var last1 = g.parentNode.childNodes[3].childNodes;
  console.log(last1);

  for (var i = 0; i <= last1.length; i++) {
    if (last1[i].childNodes.length <= 3 && last1[i].childNodes.length > 2) {
      last1[i].childNodes[2].childNodes[1].style.display = "block";
      last1[i].childNodes[2].childNodes[1].innerHTML =
        last1[i].childNodes[2].childNodes[0].value;
      last1[i].childNodes[2].childNodes[0].style.display = "none";
    } else if (
      last1[i].childNodes.length <= 5 &&
      last1[i].childNodes.length > 4
    ) {
      var radio_data = document.getElementsByName("gender");
      for (var j = 0; j < radio_data.length; j++) {
        if (radio_data[j].checked) {
          last1[i].childNodes[2].childNodes[2].style.display = "block";
          last1[i].childNodes[2].childNodes[2].style.textTransform =
            "capitalize";
          last1[i].childNodes[2].childNodes[2].innerHTML = radio_data[j].value;
          last1[i].childNodes[2].childNodes[0].style.display = "none";
          // last1[i].childNodes[2].childNodes[1].style.display = "none";
        }
      }
    } else if (
      last1[i].childNodes.length <= 6 &&
      last1[i].childNodes.length > 5
    ) {
      var radio_data = document.getElementsByName("checkbox");
      for (var j = 0; j < radio_data.length; j++) {
        if (radio_data[j].checked) {
          last1[i].childNodes[2].childNodes[2].style.display = "block";
          last1[i].childNodes[2].childNodes[2].innerHTML +=
            radio_data[j].value + ",";
          last1[i].childNodes[2].childNodes[0].style.display = "none";
          // last1[i].childNodes[2].childNodes[1].style.display = "none";
        }
      }
    } else if (
      last1[i].childNodes.length <= 7 &&
      last1[i].childNodes.length > 6
    ) {
      last1[i].childNodes[2].childNodes[2].style.display = "block";
      last1[i].childNodes[2].childNodes[2].innerHTML =
        last1[i].childNodes[2].childNodes[0].value;
      last1[i].childNodes[2].childNodes[0].style.display = "none";
      // last1[i].childNodes[2].childNodes[1].style.display = "none";
    }

    var main4 = document.getElementById("main4");
    var btn3 = document.getElementById("main4");
    btn3.setAttribute("class", "maindi3");
    main4.innerHTML = g.parentNode.innerHTML;
    g.style.display = "none";
    g.parentNode.style.display = "none";
  }
}

function funm() {
  // a.style.backgroundColor="red"
  var a = document.getElementById("con");
  a.setAttribute("class", "imgmain");
  var b = document.getElementById("main2");
  b.setAttribute("class", "maindi");

  var a = document.getElementById("inputmain");
  var h1 = document.getElementById("hedding");
  h1.style.textTransform = "capitalize";
  h1.innerHTML = a.value;
}

const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
