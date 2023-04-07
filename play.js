const fetchData = callback => {
    setTimeout(()=>{
        callback('done!');
    }, 1500);
};

setTimeout(()=>{
    console.log('time is done!');
    fetchData(text=>{
        console.log(text);
    });
} ,2000);

console.log('hello');
console.log('hi');