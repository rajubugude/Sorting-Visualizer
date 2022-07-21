async function selectionSort(){
      disableSortingButton()
      let divBars = document.getElementsByClassName('classBar')
      const n = divBars.length;
      for (let i = 0; i < n; i++){
            let minIdx = i;
            divBars[minIdx].style.background="#578F06 "
            for (let j = i+1; j < n; j++)
            {
                  divBars[j].style.background="#7EAB3C";
                  await delay(10)
                  if (parseInt(divBars[j].style.height) < parseInt(divBars[minIdx].style.height)){
                        // divBars[minIdx].style.background = 'white';
                        minIdx = j;
                        divBars[minIdx].style.background = '#578F06 ';
                  }
                  if (minIdx != j){
                    divBars[j].style.background = 'white';
                  }

            }
            await delay(10)
            swap(divBars[minIdx], divBars[i]);
            divBars[minIdx].style.background = 'white';
            divBars[i].style.background="#578F06 ";
            
      }
      enableSortingButton()
}

document.getElementById("selectionsort").addEventListener("click", selectionSort);
