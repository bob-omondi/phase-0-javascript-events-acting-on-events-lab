// Your code here

const changeElement = document.getElementById("body")
changeElement.addEventListener("click", function(){
    changeElement.style.backgroundColor = "#2f8e92"
})


const dodger = document.getElementById("dodger")

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
    else (left > 0)
        dodger.style.left = `$(left+1)`
    }

    function moveDodgerRight() {
        const rightNumbers = dodger.style.right.replace("px", "");
        const right = parseInt(rightNumbers, 10);
      
        if (right > 0) {
          dodger.style.right = `${right + 1}px`;
        }
        }
  



