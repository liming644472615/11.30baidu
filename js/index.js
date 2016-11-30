$(function(){
    $(".conbox").mousedown(function(e){
        e.preventDefault();
    }).mouseover(function(e){
        e.preventDefault();
    })
    var num=0;
    var clienth=document.documentElement.clientHeight;
    var flag=true;
    touch.on("body","swipeup",".conbox",mouseup);
    touch.on("body","swipedown",".conbox",mousedown);
    function mouseup(){
        if(!flag){
            return;
        }
        num++;
        if(num>=$(".con").length){
            num=$(".con").length-1;
            return;
        }
        if(num==$(".con").length-1){
            $(".jiantou").css("display","none");
        }else{
            $(".jiantou").css("display","block");
        }
        flag=false;
        if(num*clienth>=clienth){
            $(".lianxi1").animate({opacity:1},800);
        }else{
            $(".lianxi1").animate({opacity:0},800);
        }
        $(".conbox").css({
            marginTop:-num*clienth
        })
        $(".cebian li").each(function(index,obj){
            if(num==index){
                $(obj).css({background:"#333"})
            }else {
                $(obj).css({background: "rgba(0,0,0,0)"})
            }
        })
    }
    function mousedown(){
        if(!flag){
            return;
        }
        num--;
        if(num<0){
            num=0;
            return;
        }
        if(num==$(".con").length-1){
            $(".jiantou").css("display","none");
        }else{
            $(".jiantou").css("display","block");
        }
        flag=false;
        if(num*clienth>=clienth){
            $(".lianxi1").animate({opacity:1},800);
        }else{
            $(".lianxi1").animate({opacity:0},800);
        }
        $(".conbox").css({
            marginTop:-num*clienth
        })
        $(".cebian li").each(function(index,obj){
            if(num==index){
                $(obj).css({background:"#333"})
            }else {
                $(obj).css({background: "rgba(0,0,0,0)"})
            }
        })
    }
    $(".cebian li").click(function(){
        var that=$(this).index();
        if($(this).index()==$(".con").length-1){
            $(".jiantou").css("display","none");
        }else{
            $(".jiantou").css("display","block");
        }
        if($(this).index()>num){
            num=$(this).index();
            if($(this).index()*clienth>=clienth){
                $(".lianxi1").animate({opacity:1},800);
            }else{
                $(".lianxi1").animate({opacity:0},800);
            }
            $(".conbox").css({
                marginTop:-($(this).index())*clienth
            })
            $(".cebian li").each(function(index,obj){
                if(that==index){
                    $(obj).css({background:"#333"})
                }else {
                    $(obj).css({background: "rgba(0,0,0,0)"})
                }
            })
        }else if($(this).index()<num){
            num=$(this).index();
            if($(this).index()*clienth>=clienth){
                $(".lianxi1").animate({opacity:1},800);
            }else{
                $(".lianxi1").animate({opacity:0},800);
            }
            $(".conbox").css({
                marginTop:-($(this).index())*clienth
            })
            $(".cebian li").each(function(index,obj){
                if(that==index){
                    $(obj).css({background:"#333"})
                }else {
                    $(obj).css({background: "rgba(0,0,0,0)"})
                }
            })
        }
    }).mouseover(function(){
        $(".cebian p").eq($(this).index()).css("display","block");
    }).mouseout(function(){
        $(".cebian p").eq($(this).index()).css("display","none");
    });
    $(".jiantou").click(function(){
        mouseup();
    })
    $(".conbox")[0].addEventListener("webkitTransitionEnd",function(){
        if(num==0){
            flag=true;
            $(".tu4").css({
                animation:"ship 2s ease",
                opacity:1
            });
        }else{
            $(".tu4").css({
                animation:"none",
                opacity:0
            });
        }
        $(".shu").each(function(index,obj){
            if(num==index+1){
                flag=true;
                $(obj).css({animation:"shu 2s ease",opacity:1});
            }else{
                $(obj).css({animation:"none",opacity:0});
            }
        })
        $(".title2").each(function(index,obj){
            if(num==index+1){
                $(obj).css({animation:"titles 2s ease",opacity:1})
            }else{
                $(obj).css({animation:"none",opacity:0})
            }
        })
    })
    $(".conbox")[0].addEventListener("msTransitionEnd",function(){
        if(num==0){
            flag=true;
            $(".tu4").css({
                animation:"ship 2s ease",
                opacity:1
            });
        }else{
            $(".tu4").css({
                animation:"none",
                opacity:0
            });
        }
        $(".shu").each(function(index,obj){
            if(num==index+1){
                flag=true;
                $(obj).css({animation:"shu 2s ease",opacity:1});
            }else{
                $(obj).css({animation:"none",opacity:0});
            }
        })
        $(".title2").each(function(index,obj){
            if(num==index+1){
                $(obj).css({animation:"titles 2s ease",opacity:1})
            }else{
                $(obj).css({animation:"none",opacity:0})
            }
        })
    })
    $(".conbox")[0].addEventListener("mozTransitionEnd",function(){
        if(num==0){
            flag=true;
            $(".tu4").css({
                animation:"ship 2s ease",
                opacity:1
            });
        }else{
            $(".tu4").css({
                animation:"none",
                opacity:0
            });
        }
        $(".shu").each(function(index,obj){
            if(num==index+1){
                flag=true;
                $(obj).css({animation:"shu 2s ease",opacity:1});
            }else{
                $(obj).css({animation:"none",opacity:0});
            }
        })
        $(".title2").each(function(index,obj){
            if(num==index+1){
                $(obj).css({animation:"titles 2s ease",opacity:1})
            }else{
                $(obj).css({animation:"none",opacity:0})
            }
        })
    })
    $(".conbox")[0].addEventListener("oTransitionEnd",function(){
        if(num==0){
            flag=true;
            $(".tu4").css({
                animation:"ship 2s ease",
                opacity:1
            });
        }else{
            $(".tu4").css({
                animation:"none",
                opacity:0
            });
        }
        $(".shu").each(function(index,obj){
            if(num==index+1){
                flag=true;
                $(obj).css({animation:"shu 2s ease",opacity:1});
            }else{
                $(obj).css({animation:"none",opacity:0});
            }
        })
        $(".title2").each(function(index,obj){
            if(num==index+1){
                $(obj).css({animation:"titles 2s ease",opacity:1})
            }else{
                $(obj).css({animation:"none",opacity:0})
            }
        })
    })
    $(window).resize(function(){
        clienth=document.documentElement.clientHeight;
        $(".conbox").css({
            marginTop:-num*clienth
        })
    })
    mouseWheel($(".conbox")[0],mouseup,mousedown);
    //小屏导航
    var flag2=true;
    $(".xiala").click(function(){
        if(flag2) {
            $(".xiala1").css({transform: "translate(0,-2px) rotate(45deg)"});
            $(".xiala2").css({transform: "rotate(-45deg)"});
            $(".min-nav a").each(function (index, obj) {
                $(obj).css({
                    opacity:0,
                    animation: "nav 1s linear forwards " + (index * 0.2) + "s",
                })
            })
            $(".min-nav-screen").css({
                display:"block"
            })
            flag2=false;
        }else{
            $(".xiala1").css({transform: "translate(0,2px) rotate(0deg)"});
            $(".xiala2").css({transform: "rotate(0deg)"});
            $(".min-nav a").each(function (index, obj) {
                $(obj).css({
                    opacity:1,
                    animation: "nav1 1s linear forwards  "+(1.2-index * 0.2) + "s",
                })
            })
            $(".min-nav a")[0].addEventListener("webkitAnimationEnd",function(){
                $(".min-nav-screen").css({
                    display:"none"
                })
            })
            flag2=true;
        }
    })

})