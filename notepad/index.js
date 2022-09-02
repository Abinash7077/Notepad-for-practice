let Name = document.getElementById("name");
let Book = document.getElementById("book");
let Roll = document.getElementById("roll");
let notepad = document.querySelector(".tablebody");
let Input1=document.querySelector('.input1')

// let btn=document.querySelector(".button").addEventListener("click",()=>{
//     console.log("Button clicked")
// })
let button = document.querySelector(".btn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  // alert("hello")
  console.log("clicked");
  let str = ` <tbody>
                    <tr>
                         <td>${Name.value}</td>
                         <td>${Book.value}</td>
                         <td>${Roll.value}</td>
                    </tr>
             </tbody>`;
             notepad.innerHTML +=str
             Name.value=" "
             Book.value=" "
             Roll.value=' '
             console.log(notepad)
});
