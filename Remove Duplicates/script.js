const array = [];

function duplicate(){
    let inp = document.getElementById("input").value
    array.push(inp);

    let dup = (data) => {
        return [...new Set(data)]
    }

    console.log(dup(array));

    document.getElementById("normal").innerHTML = JSON.stringify(`<h1>Duplicate array : ${(array)}<br></h1>`)
    document.getElementById("dupli").innerHTML = JSON.stringify(`<h1>Unique array : ${dup(array)}</h1>`)
    

}