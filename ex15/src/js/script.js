function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert("Digite o ano do seu nascimento.")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade <=3){
                //criança
                img.setAttribute('src','./src/imagens/foto-bebe-m.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#252436'
            }
            else if(idade <=6){
                img.setAttribute('src','./src/imagens/foto-bebe-m.png')
                document.body.style.background = '#253f48'
            }
            else if(idade <=10){
                img.setAttribute('src','./src/imagens/foto-menino8-m.jpg')
                img.style.borderRadius ='150px'
                document.body.style.background = '#d7a700'
            }
               
            else if(idade<=16){
                //adolescente
                img.setAttribute('src','./src/imagens/foto-jovem14-m.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#546557'
            
            }else if(idade <= 24){
                //jovem
                img.setAttribute('src','./src/imagens/foto-jovem18-m.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#182c37'

            }else if (idade <= 30){
                img.setAttribute('src','./src/imagens/foto-jovem25-m.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#2e4322'
            }
            
            else if(idade <= 36){
                //adulto 1
                img.setAttribute('src','./src/imagens/foto-jovem-m.png')
                document.body.style.background = '#0d2a2c'
                
            }else if(idade <=46){
                //adulto 2
                img.setAttribute('src','./src/imagens/foto-adulto-m.png')
                document.body.style.background = '#181919'

            }else if(idade <=55){
                img.setAttribute('src','./src/imagens/foto-homem50-m.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#546963'

            }
            else if(idade <65){
                img.setAttribute('src','./src/imagens/foto-homem60-m.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#736f6d'
            }
        
            else{
                //idoso
                img.setAttribute('src','./src/imagens/foto-idoso-m.png')
                document.body.style.background = '#325b79'
            }

        }
        //feminino
        else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <=3){
                //criança
                img.setAttribute('src','./src/imagens/foto-bebe-f.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#899498'
            }
            else if(idade <=6){
                img.setAttribute('src','./src/imagens/foto-bebe-f.png')
                document.body.style.background = '#aa0728'
            }
            else if(idade <=10){
                img.setAttribute('src','./src/imagens/foto-menina8-f.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#426899'

            }
            else if(idade <=16){
                img.setAttribute('src','./src/imagens/foto-menina16-f.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#0e1014'
            }
            
            else if(idade <=21){
                //jovem
                img.setAttribute('src','./src/imagens/foto-adulto20-f.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#0c3437'
            
            }
            else if(idade <=25){
                img.setAttribute('src','./src/imagens/foto-jovem-f.png')
                document.body.style.background = '#04858a'
            }
            else if(idade <=30){
                img.setAttribute('src','./src/imagens/foto-mulher30-f.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#e82f13'

            }
            else if(idade <=38){
                img.setAttribute('src','./src/imagens/foto-mulher35-f.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#b9d3d7'

            }

            else if(idade <=45){
                img.setAttribute('src','./src/imagens/foto-adulto-f.png')
                document.body.style.background = '#6c867d'

            }
            else if(idade <=55){
                img.setAttribute('src','./src/imagens/foto-mulher55-f.jpg')
                img.style.borderRadius = '150px'
                document.body.style.background = '#0f1d1e'

            }
            
            else if(idade <65){
                //adulto
                img.setAttribute('src','./src/imagens/foto-mulher60-f.jpg')
                img.style.borderRadius  = '150px'
                document.body.style.background = '#90a0b9'

            }else{
                //idoso
                img.setAttribute('src','./src/imagens/foto-idoso-f.png')
                document.body.style.background = '#2a12cd'
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}