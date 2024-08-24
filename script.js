
gsap.from("#gungnir_description",{
    x:"-150%",
    duration:1,
    delay:0.5
})
gsap.from("#gungnir_img",{
    x:"150%",
    duration:1,
    delay:1
})
gsap.from("#sof_img",{
    // x:"-150%",
    transform:"scale(0)",
    duration:1.2,
    scrollTrigger:{
        trigger:"#sof_img",
        start:"top 63.1%",
        // markers:true,
    }
})
gsap.from("#sof_description",{
    // x:"170%",
    // transform:"rotateZ(180deg)",
    opacity:0,
    delay:0.3,
    duration:1.5,
    scrollTrigger:{
        trigger:"#sof_description",
        // markers:true,
        start:"top 39%"
    }
})
gsap.from("#mionir_description",{
    x:"-160%",
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:"#mionir_description",
        // markers:true,
        start:"top 32%"
    }
})
gsap.from("#mionir_img",{
    x:"-300%",
    duration:1,
    // delay:1.5,
    ease: "expoScale(0.5,7,none)",
    scrollTrigger:{
        trigger:"#mionir_img",
        // markers:true,
        start:"top 27%"
    }
})

gsap.from("#dainselif_img",{
    x:"390%",
    duration:1,
    // delay:1,
    scrollTrigger:{
        trigger:"#dainselif_img",
        // markers:true,
        start:"top 45.8%"
    }
})
gsap.from("#dainselif_description",{
    x:"390%",
    duration:1.2,
    // delay:1,
    scrollTrigger:{
        trigger:"#dainselif_description",
        // markers:true,
        start:"top 45.8%"
    }
})
gsap.from("#tyrfing_image",{
    x:"-450%",
    duration:1.5,
   scrollTrigger:{
    trigger:"#tyrfing_image",
    // markers:true,
    start:"top 31%"
   }
})

gsap.from("#next_desciption",{
    x:"450%",
    duration:1,
    // delay:1,
    scrollTrigger:{
        trigger:"#next_desciption",
        // markers:true,
        start:"top 42%"
    }
})



// Redirecting Function

function redirectToNewTab(value)
{
    if(value=="gungnir")
    {
        window.open('https://en.wikipedia.org/wiki/Gungnir')
    }
    else if(value=="sof")
    {
        window.open("https://en.wikipedia.org/wiki/Sword_of_Freyr")
    }
    else if(value=="mionir")
    {
        window.open("https://en.wikipedia.org/wiki/Mj%C3%B6lnir")
    }
    else if(value=="dainselif")
    {
        window.open("https://en.wikipedia.org/wiki/D%C3%A1insleif")
    }
    else if(value=="tyrfing")
    {
        window.open("https://en.wikipedia.org/wiki/Tyrfing")
    }
    else if(value=="hemdal")
    {
        window.open("https://en.wikipedia.org/wiki/H%C7%ABfu%C3%B0")
    }
}