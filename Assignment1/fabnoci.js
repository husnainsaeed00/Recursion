//Iterative fabnaci 

function fab(n){
    let fabSeries=[0,1];
    for(let i=2;i<n; i++){
        fabSeries[i]=fab[i-1]+fab[i-2]
    }
    return fabSeries
}