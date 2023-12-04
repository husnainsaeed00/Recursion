function fab(n){
    if(n<=1){
        return n;
    }
    else{
        return fab(n-1)+fab(n-2);
    }

}
function getFabSeries(n){
    let series=[]
    for(let i=0; i<n; i++){
        series.push(fab(i))
    }
    return series
}

console.log(getFabSeries(4))