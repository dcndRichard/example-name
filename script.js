const getData = () => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res('some data');
            rej('some error');
        },2000)
    })
}

getData().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})