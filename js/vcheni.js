//! Завдання 10
const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
  ];
  const btn = document.getElementById("scientist-question");
  const btn2 = document.getElementById("scientist-question2");
  const btn3 = document.getElementById("scientist-question3");
  const btn4 = document.getElementById("scientist-question4");
  const btn5 = document.getElementById("scientist-question5");
  const btn6 = document.getElementById("scientist-question6");
  const btn7 = document.getElementById("scientist-question7");
  const btn8 = document.getElementById("scientist-question8");
  const btn9 = document.getElementById("scientist-question9");
  
  btn.addEventListener("click", btnScientist);
  btn2.addEventListener("click", btnScientist2);
  btn3.addEventListener("click", btnScientist3);
  btn4.addEventListener("click", btnScientist4);
  btn5.addEventListener("click", btnScientist5);
  btn6.addEventListener("click", btnScientist6);
  btn7.addEventListener("click", btnScientist7);
  btn8.addEventListener("click", btnScientist8);
  btn9.addEventListener("click", btnScientist9);
  
  function btnScientist() {
    const zsd = scientists
      .filter((scientist) => scientist.born > 1800 && scientist.born < 1900)
      .sort((a, b) => a.surname.localeCompare(b.surname));
    showScientists(zsd);
  }
  function btnScientist2() {
    const zsd = scientists.sort((a, b) => a.name.localeCompare(b.name));
    showScientists(zsd);
  }
  function btnScientist3() {
    const zsd = scientists
      .map((scientist) => {
        return {
          ...scientist,
          lived: scientist.dead - scientist.born,
        };
      })
      .sort((a, b) => b.lived - a.lived);
    showScientists(zsd);
  }
  
  function btnScientist4() {
    const zsd = scientists.sort((a, b) => a.born - b.born);
    showScientists([zsd[zsd.length - 1]]);
  }
  function btnScientist5() {
    const zsd = scientists.find(
      (scientist) =>
        scientist.name === "Albert" && scientist.surname === "Einstein"
    );
    showScientists([zsd]);
  }
  function btnScientist6() {
    const zsd = scientists.filter((scientist) => scientist.surname[0] === "C");
    showScientists(zsd);
  }
  function btnScientist7() {
    const zsd = scientists.filter((scientist) => scientist.name[0] === "A");
    showScientists(zsd);
  }
  function btnScientist8() {
    const zsd = scientists.sort((a, b) => b.dead - b.born - (a.dead - a.born));
    showScientists([zsd[zsd.length - 1], zsd[0]]);
  }
  function btnScientist9() {
    const zsd = scientists.filter(
      (scientist) => scientist.name[0] === scientist.surname[0]
    );
    showScientists(zsd);
  }
  function showScientists(scientists) {
    const list = document.getElementById("scientist-list");
    list.innerHTML = "";
    const carentTheme = localStorage.getItem("theme");
    scientists.forEach((scientist) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      if (carentTheme === "dark") {
        li.style.backgroundColor = "#ffffff";
        li.style.color = "#000000";
      } else if (carentTheme === "light") {
        li.style.backgroundColor = "#d9d9d9";
        li.style.color = "#000000";
      }
      li.textContent = `${scientist.name} ${scientist.surname}: (Народився/лася) - ${scientist.born} (Помер/ла) - ${scientist.dead}`;
      list.appendChild(li);
    });
  }