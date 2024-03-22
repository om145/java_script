const a1 = [2,6,5,4,8,9];
const a2 = [8,6,5,4,1,2];
const a3 = [];

function sma(){
    let result = a3.concat(a1,a2);
    let r = result.sort(function (a,b){return a-b});
    let res = (data) => {
        return[...new Set(data)];
    }
    console.log(res(r));
}