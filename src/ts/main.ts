// class Person {
//     namn: string;
//     constructor(namn: string) {
//       this.namn = namn;
//     }
//   }

//   let p = new Person("Hej");

//   let p1 = new Person("Tja");

//   let p2 = new Person("Hejsan");

//   let names = 0;

//   let myuls = [p, p1, p2];

//   let ulTag = document.getElementById("myUL");

//   for (let i = 0; i < myuls.length; i++) {
//     let li = document.createElement("li");

//     let span = document.createElement("span");

//     var txt = document.createTextNode("\u00D7");

//     let ull = document.createElement("button");
//     li.innerHTML = myuls[i].namn;

//     li.appendChild(span);
//     ull.appendChild(span);
//     ulTag?.appendChild(li);
//   }

class Person {
  interest: string;
  constructor(interest: string) {
    this.interest = interest;
  }
}

class myUL {
  interest;
}

let myul = {
  interest: "Running",
};

let myul2 = new myUL();
myul2.interest = "Tennis";

let myul3 = new myUL();
myul3.interest = "Fotboll";

let myul4 = new myUL();
myul4.interest = "Ski";

let names = 0;

let myuls = ["Running", "Tennis", "Fotball", "Ski"];

let ulTag = document.getElementById("myUL");

for (let i = 0; i < myuls.length; i++) {
  console.log(myuls);

  let li = document.createElement("li");

  var span = document.createElement("span");

  var txt = document.createTextNode("\u00D7");

  let ull = document.createElement("button");
  li.innerHTML = myuls[i];

  ull.appendChild(span);
  li.appendChild(span);
  ulTag?.appendChild(li);

  span.className = "close";
  span.appendChild(txt);

  span.addEventListener("click", () => {
    li.remove();
  });
}
