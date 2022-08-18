var typed=new Typed('.typing',{
    strings:['Star Tech','Star Tech' ,'Star Tech','Star Tech'],
    typeSpeed:100,
    BackSpeed:60,
})

function changeBG(){
    const images=["pictures/bg1.jpeg",
                "pictures/bg2.jpeg",
                "pictures/Electronics.jpg"
            ]
    const section=document.querySelector('.bg_img')
    // console.log(section.src)
    const bg=images[Math.floor(Math.random()*images.length)];
    // console.log(bg)
    section.src=bg
}

setInterval(changeBG,2500)