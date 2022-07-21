function check(bar1, bar2) {
    if (parseInt(bar1.style.height) < parseInt(bar2.style.height)) {
        return true;
    }
    return false;       
}
async function insertionSort(){
    disableSortingButton();
    let divBars = document.getElementsByClassName("classBar");
    for (let i = 0; i < divBars.length; i++) {
        let j = i - 1;
        divBars[i].style.background = 'darkgoldenrod';
        await delay();
        while (j >= 0) {
            if (check(divBars[j + 1], divBars[j])) {
              divBars[j+1].style.background="darkgoldenrod";
                await delay();
                swap(divBars[j], divBars[j+1]);
                divBars[j+1].style.background="green";
            }
            else {
                break;
            }
            j--;
        }
        divBars[i].style.background = 'green';
        
    }
    enableSortingButton();
}

document.getElementById("insertionsort").addEventListener("click", insertionSort);
