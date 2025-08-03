let b=10;
function greet(){
    let a=20;
    function meet(){
        console.log(a);
    }
    return meet;
}

const num = greet();
num(); // This will log 20 to the console, demonstrating closure.