// function getSome() {
//   const request = new XMLHttpRequest();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4) {
//       console.log(request.responseText);
//     }
//   });

//   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//   request.send();
// }

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     getSome();
// });

// const getData = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("some data");
//       rej("some error");
//     }, 2000);
//   });
// };

// getData()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// function fetch(callback) {
//     let request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined,request.responseText)
//         } else if (request.readyState === 4) {
//             callback('error happended', undefined);
//         }
//     })
//     request.open('GET', './mydata.json');
//     request.send();
// }

// fetch((err,data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         let mydata = JSON.parse(data);
//         mydata.forEach((item) => {
//             console.log(item.name)
//         })
//     }
// })

/* 
function getthedata(callback){
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback("error", undefined);
        }
    })
    request.open('GET', "https://jsonplaceholder.typicode.com/todos/");
    request.send();
}

getthedata((err, data) => {
    if (err) {
        console.log(err)
    } else {
        for (x of JSON.parse(data)) {
            console.log(x.title)
        }
    }
}) */

/* function fetch1(){
    return new Promise((res, rej) => {
        let nums = [3,5,4,6]
        setTimeout(() => {
            if(nums.length === 4)
                res("hello")
            else
                rej(nums.length)
        },3000)
    })
}
fetch1().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
}); */



/* function fetch2(callback) {
    const response = new XMLHttpRequest();
    response.addEventListener("readystatechange", () => {
        if (response.readyState === 4 && response.status === 200) {
            callback(undefined, response.responseText);
        } else if (response.readyState === 4) {
            callback(new Error("some error occured"),undefined);
        }
    })

    response.open("GET", "mydata.json");
    response.send()
}

fetch2((err, data) => {
    if (err) {
        console.log(err);
    } else {
        let parsedData = JSON.parse(data)
        parsedData.forEach((item) => {
            console.log(item);
        })
    }
}) */

// function fetch3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const request = new XMLHttpRequest();
//             request.addEventListener("readystatechange", () => {
//                 if (request.readyState === 4 && request.status === 200) {
//                     resolve(request.responseText);
//                 } else if (request.readyState === 4) {
//                     reject(new Error());
//                 }
//             })
//             request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//             request.send();
//         },3000)
//     })
// }
// fetch3().then((data) => {
//     for (x of JSON.parse(data)) {
//         console.log(x.title)
//     }
// }, (err) => {
//     console.log(err);
// })

function idontknowyet(arr,callback) {
    let newArr = []
    arr.forEach((item) => {
        newArr.push(item.slice(0,4))
    })
    callback(newArr);
}
idontknowyet([ 'watch', 'apple', 'pen' ], (newArr) => {
    console.log(newArr)
})