function counter(n){

    setTimeout(() => {
        console.log(new Date().getHours() + ":"+new Date().getMinutes() + ":" + new Date().getSeconds());
        counter(Date.now());
    },1000);
}

counter(Date.now());