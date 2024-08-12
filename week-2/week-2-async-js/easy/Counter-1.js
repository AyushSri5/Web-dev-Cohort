function counter(n){

    let interval=setInterval(() => {
    console.log(n);
    n--;

    if(n == 0){
        clearInterval(interval);
    }
    },1000);
}

counter(10);