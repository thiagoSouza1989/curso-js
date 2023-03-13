function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    //var hora = 17
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora <5){
        img.src = 'imagens/madrugada.jpeg'
        document.body.style.background = '#091916'
    }else if(hora >= 5 && hora <=8){
        img.src = 'imagens/amanhecer.jpeg'
        document.body.style.background = '#fddd4a'
    }
    else if(hora >= 9 && hora <=17){
        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#0675e3'
    }
    else if(hora > 17 && hora <19){
        img.src = 'imagens/crepusculo.jpeg'
        document.body.style.background = '#5A5279'
    }
    else{
        img.src = 'imagens/noite.jpeg'
        document.body.style.background = '#1A363C'
    }
}