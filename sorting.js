function generateBars(){
      for (let i =0 ; i< 100; i++){
            let heightOfBars = Math.floor(Math.random() * 850);
            let bar = document.createElement("div");
            bar.classList.add("classBar");
            document.getElementById("bars").appendChild(bar);
            bar.style.height = heightOfBars + 'px';
      }
}
// document.getElementById("newArray").disabled = true;
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

function delay(ms) {
      return new Promise(function(accept){
            setTimeout(function() {
                  accept();
            },ms)
      });
    }
    