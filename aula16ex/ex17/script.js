let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('#res')
let valores = []

function tabuada(){
    
    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}