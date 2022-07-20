async function selectionSort()
{
      let divBars = document.getElementsByClassName('classBar')
      const n = divBars.length;
      for (let i = 0; i < n; i++){
            let minIdx = i;
            for (let j = i+1; j < n; j++)
            {
                  divBars[j].style.background="blue";
                  divBars[minIdx].style.background="red";
                  await delay(1)
                  if (parseInt(divBars[j].style.height) < parseInt(divBars[minIdx].style.height)){
                        divBars[minIdx].style.background = 'blue';
                        minIdx = j;
                  }

            }
            swap(divBars[minIdx], divBars[i]);
            divBars[minIdx].style.background = 'blue';
            divBars[i].style.background="green";
      }
}

document.getElementById("selectionsort").addEventListener("click", selectionSort);

