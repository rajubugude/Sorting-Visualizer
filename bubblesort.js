

async function bubbleSort()
{
      let divBars = document.getElementsByClassName('classBar')
      const n = divBars.length;
      for (let i = 0; i < n; i++)
      {
            for (let j = 0; j < n-i-1; j++)
            {
                  divBars[j].style.background="red";
                  divBars[j+1].style.background="red";
                  await delay(1)
                  if (parseInt(divBars[j].style.height) > parseInt(divBars[j+1].style.height)){
                        swap(divBars[j],divBars[j+1]);
                  }
                  divBars[j].style.background="blue";
                  divBars[j+1].style.background="blue";
            }
            divBars[n-1-i].style.background="green";
      }
}

document.getElementById("bubblesort").addEventListener("click", bubbleSort);
