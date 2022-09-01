async function bubbleSort(){
      disableSortingButton();
      let divBars = document.getElementsByClassName('classBar')
      const n = divBars.length;
      for (let i = 0; i < n; i++)
      {
            for (let j = 0; j < n-i-1; j++)
            {
                  divBars[j].style.background="#59ad47";
                  divBars[j+1].style.background="#59ad47";
                  await delay(10)
                  if (parseInt(divBars[j].style.height) > parseInt(divBars[j+1].style.height)){
                        swap(divBars[j],divBars[j+1]);
                  }

                  divBars[j].style.background= "white";
                  divBars[j+1].style.background="white";
            }

            divBars[n-1-i].style.background="#84ed13";
      }
      enableSortingButton();
}

document.getElementById("bubblesort").addEventListener("click", bubbleSort);
