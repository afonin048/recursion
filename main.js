function pow(x, n){
    if(n != 1){
        return x * pow(x, n-1)
    } else{
        return x
    }
}

alert(pow(2, 3))