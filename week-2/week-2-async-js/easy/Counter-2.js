function counter(n){
    if(n==0)
        return;

    setTimeout(() => {
        console.log(n);
        counter(n-1);
    },1000);
}

counter(10);