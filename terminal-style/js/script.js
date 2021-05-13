const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent= document.querySelector('#contact-content')


const closeAudio = new Audio('sounds/mouseclick.mp3')
const openAudio = new Audio('sounds/radio.mp3')

about.addEventListener('click', ()=>{
    const aboutBox = new WinBox({
        title: 'About Me',
        width: 400,
        height: 400,
        top: 20,
        bottom: 20,
        left:20,
        right:20,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground('#277DA1')
        },
        onblur: function(){
            this.setBackground('#777')
        },
        onclose: function(){
            closeAudio.play()
        }
    })

    openAudio.play()
})

contact.addEventListener('click', ()=>{
    const aboutBox = new WinBox({
        title: 'Contact Me',
        width: 400,
        height: 400,
        top: 80,
        bottom: 20,
        left:80,
        right:20,
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#277DA1')
        },
        onblur: function(){
            this.setBackground('#777')
        },
        onclose: function(){
            closeAudio.play()
        }
    })

    openAudio.play()
})