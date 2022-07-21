async function bubbleSort(){
      disableSortingButton();
      let divBars = document.getElementsByClassName('classBar')
      const n = divBars.length;
      for (let i = 0; i < n; i++)
      {
            for (let j = 0; j < n-i-1; j++)
            {
                  divBars[j].style.background="#7EAB3C";
                  divBars[j+1].style.background="#7EAB3C";
                  await delay(100)
                  if (parseInt(divBars[j].style.height) > parseInt(divBars[j+1].style.height)){
                        swap(divBars[j],divBars[j+1]);
                  }

                  divBars[j].style.background= "white";
                  divBars[j+1].style.background="white";
            }
            // await delay(10)
            divBars[n-1-i].style.background="#578F06";
      }
      enableSortingButton();
}

document.getElementById("bubblesort").addEventListener("click", bubbleSort);
