let num = [5,8,2,9]
num.push (7)
num.sort()
console.log(num)
console.log(`nosso vetor tem ${num.length} elementos`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
    if (pos ==-1 ){
        console.log(`O valor não foi encontrado!`)
    } else {
        console.log(`O valor 8 está na posição ${pos}`)
    }
