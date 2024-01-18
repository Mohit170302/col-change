let rect=document.querySelector(".center");

rect.addEventListener("mousemove",function(val){
    let rectLocation=rect.getBoundingClientRect();
    //this line shows ki mai rect k ander kitna hu
    let insideRectVal=val.clientX-rectLocation.left;//clientX show x axis coordinate-.left show coord. from left=val inside rect;
    
    if(insideRectVal<rectLocation.width/2){
        //left side
        //converting the val by gsap
        let redcol=gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRectVal);

        gsap.to(rect,{
            backgroundColor:`rgb(${redcol},0,0)`,
            ease:Power4,
        
        });
    }else{
        //right side
        let bluecol=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRectVal);

        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecol})`,
            ease:Power4,
        
        });
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
    });
});