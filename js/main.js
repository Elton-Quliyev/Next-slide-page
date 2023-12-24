
/////////////////// objectlerle olmayan usul(bezi seyler silinib (var-lar falan))

// // btnHistory.addEventListener("click" , function(){
// //   historyText.classList.remove("hidden")
// //   visionText.classList.add("hidden")
// //   goalsText.classList.add("hidden")

// // })

// // btnVision.addEventListener("click" , function(){
// //   visionText.classList.remove("hidden")
// //   historyText.classList.add("hidden")
// //   goalsText.classList.add("hidden")

// // })


// // btnGoals.addEventListener("click" , function(){
// //   goalsText.classList.remove("hidden")
// //   historyText.classList.add("hidden")
// //   visionText.classList.add("hidden")


// // })











// objectlerle olan usul

var btnHistory = document.getElementById("history-tab")
var btnVision = document.getElementById("vision-tab")
var btnGoals = document.getElementById("goals-tab")

var container = document.querySelector(".container")


var array = [
  {
    title: "History",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate asperiores ex ad magnam consequuntur illum corporis distinctio maxime, aspernatur at expedita voluptatum quae? Officiis blanditiis explicabo doloremque unde harum aliquam totam laboriosam dicta quos. Ipsum sint doloremque esse repellat, nulla alias blanditiis hic eveniet rem ullam sapiente excepturi facilis?",
    name : "1"
  },
  {
    title: "Vision",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate asperiores ex ad magnam consequuntur illum corporis distinctio maxime, aspernatur at expedita voluptatum quae? Officiis blanditiis e",
    name : "2"
  },
  {
    title: "Goals",
    text: "bu texde metnin eri qeyd olunmalidir",
    name : "3"
  }
];

function hansiObyekt(name){   //burda funkisiyanin icine tittlenide texdide vere bilerdim ama basim garismasin deye butun objectlere name verdim

  container.textContent = ""      



  function obyektsecen(object){
    return object.name === name;
  }
  const selectedObject = array.find(obyektsecen)
  //bu hisse obyektlerin hansinin hansi oldugunu secendir. find, objecte şert verib secendir ve burada yoxlayirki senin verdiyin name ile eyni olan bir name vami? varsa hemin obyekti sececek eyer ele bisey yoxdusada undefined olacaq
  




  divim = document.createElement("div")
  container.appendChild(divim)

  var basliq = document.createElement("h1")
  basliq.textContent = selectedObject.title
  divim.appendChild(basliq)

  var metn = document.createElement("p")
  metn.textContent = selectedObject.text
  divim.appendChild(metn)
}


btnHistory.addEventListener("click", function(){
  hansiObyekt("1")
})

btnVision.addEventListener("click" , function(){
  hansiObyekt("2")
})

btnGoals.addEventListener("click" , function(){
  hansiObyekt("3")
})



window.addEventListener('load', function() {
  btnHistory.click();
});
//bu kod seyfeye refres atanda veya ilk girende qarsimiza btnhistoryin basilmis kimi gorunmesi ucundur


