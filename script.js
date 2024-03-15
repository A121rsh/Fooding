var  cr = document.querySelector(".cursor")
var me = document.querySelector("#main")


me.addEventListener("mousemove",function(m){
    console.log("hellos");
    cr.style.left = m.x + "px"
    cr.style.top = m.y+ "px"
})
