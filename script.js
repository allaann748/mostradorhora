function carregar() {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    //const hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manhas.png'
        document.body.style.background = '#745922'
    } else if (hora >= 12 && hora <=18) {
        img.src = 'tarde.png'
        document.body.style.background = '#cfc4be'
    } else {
        img.src = 'noite.png'
        document.body.style.background = "#0c0403"
    }

}