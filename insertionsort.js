async function insertionSort()
{
      let divBars = document.getElementsByClassName('classBar')
      const n = divBars.length;
      let i, key, j;  
      for (i = 1; i < n; i++) 
      {  
          divBars[i].style.background="blue";
          key = divBars[i];  
          j = i - 1;  
          await delay(1)
          while (j >= 0 && divBars[j] > key) 
          {  
            //   swap(divBars[j+1], divBars[j]);
              divBars[j + 1] = divBars[j];  
              divBars[j+1].style.background = 'red';
              j = j - 1;  
          }  
          divBars[j + 1] = key;  
          divBars[j].style.background="green";
      }  
}  

document.getElementById("insertionsort").addEventListener("click", insertionSort);