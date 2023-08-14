let P = document. querySelector("P")
let add = document. querySelector(".add")
let sub = document. querySelector(".sub")
let multi = document. querySelector(".multi")

console.log(P)

add.addEventListener("click", function (){
    P.innerHTML = +P.innerHTML + 1;
} )
sub.addEventListener("click", function (){
    P.innerHTML = +P.innerHTML - 1;
} )
multi.addEventListener("click", function (){
    P.innerHTML = +P.innerHTML * 2;
} )

