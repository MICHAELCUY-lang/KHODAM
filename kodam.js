
let khodam = [
    "AKMAL TANK KDA",
    "AKMAL MALING༼ つ ◕_◕ ༽つ",
    "AKMAL(⌐■_■)",
    "AKMAL GANTENG 😞😖😝",
    "AKMAL MALING ༼ つ ◕_◕ ༽つ",
    "AKMAL (⌐■_■)",
    "AKMAL GANTENG 😞😖😝",
    "AKMAL TUKANG NGOCOK💧💧💧🌈",
    "AKMAL GANTENG 😞😖😝",
    "ZAKMAL AKI🚗🚗",
     "ZAKMAL AKI🚗🚗",
  ];
  
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("picit").click();
    }
  });
  
  function picit() {
    if (document.getElementById("input").value == "") {
      alert("Anda tidak memasukkan apapun!");
    } else {
      let x = document.getElementById("input").value;
      let y = Math.floor(Math.random() * 300);
      document.getElementById("name").innerHTML = x;
      document.getElementById("container").style.display = "none";
      document.getElementById("hasil").style.display = "block";
      document.getElementById("khodam").innerHTML = khodam[y % khodam.length];
  
      console.log(y);
    }
  }
  