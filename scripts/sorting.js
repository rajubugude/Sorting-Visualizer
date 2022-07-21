function generateBars(){
      document.getElementById("bars").innerHTML = "";
      var size = document.querySelector("#arrayRange"); 
      var n = size.value;
      for (let i =0 ; i< n; i++){
            let heightOfBars = Math.floor(Math.random() * 700);
            let bar = document.createElement("div");
            bar.classList.add("classBar");
            document.getElementById("bars").appendChild(bar);
            bar.style.height = heightOfBars + 'px';
      }
      size.addEventListener("input",generateBars);
}
document.getElementById("newArray").addEventListener("click", generateBars);


function swap(bar1,bar2)
{
      const style1 = window.getComputedStyle(bar1);
      const style2 = window.getComputedStyle(bar2);
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
      bar1.style.height = transform2;
      bar2.style.height = transform1;
}

function delay() {
      let speed = 750 - document.getElementById("speedRange").value
      return new Promise(function(accept){
            setTimeout(function() {
                  accept();
            },speed)
      });
    }


function disableSortingButton(){
      document.getElementById("bubblesort").disabled = true;
      document.getElementById("insertionsort").disabled = true;
      document.getElementById("selectionsort").disabled = true;
      document.getElementById("mergesort").disabled = true;
      document.getElementById("quicksort").disabled = true;
      document.getElementById("newArray").disabled = true;
      document.getElementById("arrayRange").disabled = true;
      // document.getElementById("speedRange").disabled = true;
}


function enableSortingButton(){
      document.getElementById("bubblesort").disabled = false;
      document.getElementById("insertionsort").disabled = false;
      document.getElementById("selectionsort").disabled = false;
      document.getElementById("mergesort").disabled = false;
      document.getElementById("quicksort").disabled = false;
      document.getElementById("newArray").disabled = false;
      document.getElementById("arrayRange").disabled = false;
      // document.getElementById("speedRange").disabled = false;
}
    
