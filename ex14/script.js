function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    //var hora = 11
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora <12){
        img.src = 'imagens/manha.jpeg'
        document.body.style.background = '#FFD452'
    }else if(hora >= 12 && hora <=18){
        img.src = 'imagens/tarde.jpeg'
        document.body.style.background = '#5A5279'
    }else{
        img.src = 'imagens/noite.jpeg'
        document.body.style.background = '#1A363C'
    }
}