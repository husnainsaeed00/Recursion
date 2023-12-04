function mergSortArray(arr){
    if(arr.length===0) return "please provide positive Number";
    if(arr.length===1) return arr

    const mid=Math.floor(arr/2);
    const leftHalf=arr.slice(0,mid);
    const rightHalf=arr.slice(mid,arr.length)

    return Merge(mergSortArray(leftHalf),mergSortArray(rightHalf))
}

function Merge(leftHalf,rightHalf){
    const result=[];

    let leftPointer=0;
    let rightPointer=0;

    while(leftPointer<leftHalf.length && rightPointer<rightHalf.length){
        if(leftHalf[leftPointer]<rightHalf[rightPointer]){
            result.push(leftHalf[leftPointer])
            leftPointer++
        }
        else{
            result.push(rightHalf[rightPointer]);
            rightPointer++
        }
    }
    while(leftPointer<leftHalf.length){
        result.push(leftHalf[leftPointer])
        leftPointer++;
    }
    while(rightPointer<rightHalf.length){
        result.push(rightHalf[rightPointer])
        rightPointer++;
    }
}   
console.log(mergeSortRec([])) // []
console.log(mergeSortRec([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSortRec([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]