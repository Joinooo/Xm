//工具栏购物车部分
$(document).ready(function () {
    $(".car a").mouseenter(function () {
        $(".car .car-menu").slideDown();
    });
    $(".car a").mouseleave(function () {
        $(".car .car-menu").slideUp();
    })


    //动态生成导航栏内容细节
    var xmPhone = [
        {
            "src": 'images/xiaomiNOTE2-320-220!160x110.jpg',
            "title": '小米Note 2',
            "price": '2799元起'
        },
        {
            "src": 'images/MIX-320-220!160x110.jpg',
            "title": '小米MIX',
            "price": '3499元起'
        },
        {
            "src": 'images/xiaomi5S-320-220!160x110.jpg',
            "title": '小米5s',
            "price": ' 1899元'
        },
        {
            "src": 'images/5spluse320_220!160x110.jpg',
            "title": '小米5s Plus',
            "price": '2299元起'
        },
        {
            "src": 'images/mi5!160x110.jpg',
            "title": '小米手机5',
            "price": ' 1599元起'
        },
        {
            "src": 'images/maxdingbu!160x110.jpg',
            "title": '小米Max',
            "price": ' 1299元起'
        }
    ];

    var hongMi = [
        {
            "src": 'images/hongminote4!160x110.jpg',
            "title": '红米Note 4',
            "price": ' 999元起'
        },
        {
            "src": 'images/320-2202!160x110.jpg',
            "title": '红米4',
            "price": ' 699元'
        }
    ];

    var computer = [
        {
            "src": 'images/mipad2-16!160x110.jpg',
            "title": '小米平板2 16GB',
            "price": '999元'
        },
        {
            "src": 'images/mipad2-64!160x110.jpg',
            "title": '小米平板2 64GB',
            "price": ' 1299元'
        },
        {
            "src": 'images/mipad2-64-win!160x110.jpg',
            "title": '小米平板2 64GB Windows版',
            "price": ' 1299元'
        },
        {
            "src": 'images/bijiben32012.5!160x110.jpg',
            "title": '小米笔记本Air 12.5"',
            "price": ' 3499元'
        },
        {
            "src": 'images/bijiben320!160x110.jpg',
            "title": '小米笔记本Air 13.3"',
            "price": '4999元'
        }
    ];

    var dianshi = [
        {
            "src": 'images/101848.png',
            "title": '小米电视3s 48英寸',
            "price": '2299元'
        },
        {
            "src": 'images/101855xin.png',
            "title": '小米电视3s 55英寸',
            "price": ' 3699元起'
        },
        {
            "src": 'images/101860xin.png',
            "title": '小米电视3s 60英寸',
            "price": '4499元'
        },
        {
            "src": 'images/65yingyuan.png',
            "title": '小米电视3s 65英寸',
            "price": ' 5999元'
        },
        {
            "src": 'images/70dianshi.png',
            "title": '小米电视3 70英寸',
            "price": '9999元'
        },
        {
            "src": 'images/101865.png',
            "title": '查看全部<br>小米电视',
            "price": ""
        }
    ];

    var hezi = [
        {
            "src": 'images/mihezi.png',
            "title": '小米盒子3s',
            "price": '299元'
        },
        {
            "src": 'images/mihezi.png',
            "title": '小米盒子3c',
            "price": '199元'
        },
        {
            "src": 'images/hezi3s!160x110.jpg',
            "title": '小米盒子3 增强版',
            "price": '399元'
        },
        {
            "src": 'images/hezimini.png',
            "title": '小米盒子mini版',
            "price": '179元'
        },
        {
            "src": 'images/320x220.png',
            "title": '小米家庭影院',
            "price": '1999元'
        },
        {
            "src": 'images/putonban!160x110.jpg',
            "title": '小米家庭音响 标准版',
            "price": '699元'
        }
    ];

    var luyouqi = [
        {
            "src": 'images/miwifi!160x110.jpg',
            "title": '全新小米路由器',
            "price": '699元'
        },
        {
            "src": 'images/miwifi-3!160x110.jpg',
            "title": '小米路由器 3',
            "price": '149元'
        },
        {
            "src": 'images/luyouqi3c!160x110.jpg',
            "title": '小米路由器 3C',
            "price": '99元'
        },
        {
            "src": 'images/fdq2!160x110.jpg',
            "title": '小米WiFi放大器 2',
            "price": '49元'
        }
    ];

    var yj = [
        {
            "src": 'images/scooter!160x110.jpg',
            "title": '九号平衡车',
            "price": '1999元'
        },
        {
            "src": 'images/water2!160x110.jpg',
            "title": '小米净水器',
            "price": '1299元起'
        },
        {
            "src": 'images/dianfanbao!160x110.jpg',
            "title": '米家压力IH电饭煲',
            "price": '999元'
        },
        {
            "src": 'images/air2!160x110.jpg',
            "title": '小米空气净化器 2',
            "price": '699元'
        },
        {
            "src": 'images/xiaobai!160x110.jpg',
            "title": '智能摄像机',
            "price": '399元'
        },
        {
            "src": 'images/zhinengyingjian!160x110.jpg',
            "title": '查看全部<br/>智能硬件',
            "price": ""
        }
    ];


    function createEle(json) {
        for (var i = 0; i < json.length; i++) {
            var msg = json[i];
            var str = '<li>' +
                '<a href="#">' +
                '<img src="' + msg.src + '" alt=""/>' +
                ' </a>' +
                '<div class="title">' +
                ' <a href="#">' + msg.title + '</a>' +
                '</div>' +
                '<p class="price">' + msg.price + '</p>' +
                '</li>';
            $("#items").append(str);
        }
    }

    var arr = [xmPhone, hongMi, computer, dianshi, hezi, luyouqi, yj];
    $(".header-nav li.more").mouseenter(function () {
        $(".nav-item").stop().slideDown("fast");
        $("#items").html("");
        createEle(arr[$(this).index()]);
        $("#items li:eq(3)").append('<div class="flags"> <div class="flag">赠1000书币</div></div>')
    });
    $("nav").mouseleave(function () {
        $(".nav-item").stop().slideUp("normal");
    })
    $("nav .logo,nav .gif,nav .search,.header-nav .no-more").mouseenter(function () {
        $(".nav-item").slideUp("normal");
    });


    //搜索框
    $(".search-txt").focus(function () {
        $(".search-hotwords").hide();
    })
    $(".search-txt").blur(function () {
        if ($(".search-txt").val() == "") {
            $(".search-hotwords").show();
        }
    })


    //轮播图
    var $index = 0;
    $(".slider-item ol li").click(function () {
        $(".slider-item ol li").removeClass("current");
        $(this).addClass("current");
        $index = $(this).index();
        $(".slider-item a").stop().fadeOut();
        $(".slider-item a:eq(" + $index + ")").stop().fadeIn("slow");
    })
    var flag = true;

    function next() {

        $index++;
        if ($index > 4) {
            $index = 0;
        }
        $(".slider-item ol li").removeClass("current");
        $(".slider-item ol li:eq(" + ($index) + ")").addClass("current");
        $(".slider-item a").stop().fadeOut();
        $(".slider-item a:eq(" + $index + ")").stop().fadeIn("slow");
        setTimeout(function () {
            flag = true;
        }, 600);

    }


    $(".arrow .next").click(function () {
        if (flag) {
            flag = false;
            next();
        }
    })
    $(".arrow .prev").click(function () {
        $index--;
        if ($index < 0) {
            $index = 4;
        }
        $(".slider-item ol li").removeClass("current");
        $(".slider-item ol li:eq(" + ($index) + ")").addClass("current");
        $(".slider-item a").stop().fadeOut();
        $(".slider-item a:eq(" + $index + ")").stop().fadeIn("slow");
    })
    var timer_1 = null;
    timer_1 = setInterval(next, 2500);
    $(".slider a img").mouseenter(function () {
        clearInterval(timer_1);
    })
    $(".slider a img").on("mouseleave", function () {
        timer_1 = setInterval(next, 2500);
    })
    $(".arrow").mouseenter(function () {
        $(this).click(function () {
            $(".slider a img").off("mouseleave");
            clearInterval(timer_1);
        })
    })
    $(".slider ol").mouseenter(function () {
        $(this).click(function () {
            $(".slider a img").off("mouseleave");
            clearInterval(timer_1);
        })
    })


    //轮播图左边细节展示
    $(".site-category ul li").mouseenter(function () {
        var $index = $(this).index();
        $(".children").hide();
        $(".children:eq(" + $index + ")").show();
    })
    $(".slider").mouseleave(function () {
        $(".children").hide();
    })
    $(".slider-item").mouseenter(function () {
        $(".children").hide();
    })

//    小米单品轮播
    $("#control_box .left,.control-box .left").css("color", "#e0e0e0");
    $("#control_box .right").click(function () {
        $(".xm-mx-danpin ul").animate({left: "-1226px"}, 500);
        $("#control_box .right").css({"color": "#e0e0e0", "cursor": "default"});
        $("#control_box .left").css({"color": "#a0a0a0", "cursor": "pointer"}).mouseenter(function () {
            $(this).css("color", "#ff6700");
        }).mouseleave(function () {
            $(this).css("color", "#a0a0a0");
        });
        $("#control_box .right").mouseenter(function () {
            $(this).css("color", "#e0e0e0");
        }).mouseleave(function () {
            $(this).css("color", "#e0e0e0");
        })
    })
    $("#control_box .left").click(function () {
        $(".xm-mx-danpin ul").animate({left: "0"}, 500);
        $("#control_box .left").css({"color": "#e0e0e0", "cursor": "default"});
        $("#control_box .right").css({"color": "#a0a0a0", "cursor": "pointer"}).mouseenter(function () {
            $(this).css("color", "#ff6700");
        }).mouseleave(function () {
            $(this).css("color", "#a0a0a0");
        });
        $("#control_box .left").mouseenter(function () {
            $(this).css("color", "#e0e0e0");
        }).mouseleave(function () {
            $(this).css("color", "#e0e0e0");
        })
    })

    function playNext() {
        if (parseInt($(".xm-mx-danpin ul").css("left")) == 0) {
            $("#control_box .right").click();
        } else {
            $("#control_box .left").click();
        }
    }

    var $timer_2 = null;
    $timer_2 = setInterval(playNext, 5000);

    $("#control_box").mouseenter(function () {
        clearInterval($timer_2);
    })
    $("#control_box").mouseleave(function () {
        $timer_2 = setInterval(playNext, 5000);
    })

    //搭配
    $(".dapei ol li").mouseenter(function () {
        $(".dapei ol li").removeClass("active");
        $(this).addClass("active");
        var $index = $(this).index();
        $(".dapei .m-content").hide();
        $(".dapei .m-content:eq(" + $index + ")").show();
    })

    //配件
    $(".peijian ol li").mouseenter(function () {
        $(".peijian ol li").removeClass("active");
        $(this).addClass("active");
        var $index = $(this).index();
        $(".peijian .m-content").hide();
        $(".peijian .m-content:eq(" + $index + ")").show();
    })

//    周边
    $(".zhoubian ol li").mouseenter(function () {
        $(".zhoubian ol li").removeClass("active");
        $(this).addClass("active");
        var $index = $(this).index();
        $(".zhoubian .m-content").hide();
        $(".zhoubian .m-content:eq(" + $index + ")").show();
    })
//    推荐
    var i = 0;
    $("#tuijian_control .right").click(function () {
        if (i != 3) {
            i++;
        }
        $("#tuijian_control .left").css("color", "#a0a0a0");
        var k = -i * 1240;
        $("#tuijian_control .left").css("color", "#a0a0a0");
        $(".tuijian ul").stop().animate({left: "" + k + "px"}, 500);
        if (i == 3) {
            $("#tuijian_control .right").css("color", "#e0e0e0");
            $("#tuijian_control .left").mouseenter(function () {
                $(this).css("color", "#ff6700");
            }).mouseleave(function () {
                $(this).css("color", "#a0a0a0");
            })
            $("#tuijian_control .right").mouseenter(function () {
                $(this).css("color", "#e0e0e0");
            }).mouseleave(function () {
                $(this).css("color", "#e0e0e0");
            })
        } else {
            hoverColor();
        }
    })
    $("#tuijian_control .left").click(function () {
        if (i != 0) {
            i--;
        }
        $("#tuijian_control .right").css("color", "#a0a0a0");
        var k = -i * 1240;
        $(".tuijian ul").stop().animate({left: "" + k + "px"}, 500);
        if (i == 0) {
            $("#tuijian_control .left").css("color", "#e0e0e0");
            $("#tuijian_control .right").mouseenter(function () {
                $(this).css("color", "#ff6700");
            }).mouseleave(function () {
                $(this).css("color", "#a0a0a0");
            })
            $("#tuijian_control .left").mouseenter(function () {
                $(this).css("color", "#e0e0e0");
            }).mouseleave(function () {
                $(this).css("color", "#e0e0e0");
            })
        } else {
            hoverColor();
        }
    })
    function hoverColor() {
        $("#tuijian_control .left").mouseenter(function () {
            $(this).css("color", "#ff6700");
        }).mouseleave(function () {
            $(this).css("color", "#a0a0a0");
        })
        $("#tuijian_control .right").mouseenter(function () {
            $(this).css("color", "#ff6700");
        }).mouseleave(function () {
            $(this).css("color", "#a0a0a0");
        })
    }

//   热评产品
    var data = [
        {
            "src": "images/3c77fe32-1113-482d-91b1-9c01a079cce6.jpg",
            "review": "超级赞超级赞 用起来很顺手 音质也很好 非常喜欢",
            "author": "来自于 不上复旦不罢休 的评价 ",
            "title": "小米笔记本Air 12.5英寸",
            "price": " 3499元"
        },
        {
            "src": "images/97d80b35-152e-4934-af34-402251458e16.jpg",
            "review": "非常好用，孩子使用防止沉迷于电话影响学习。做工很好，定位基本准确，通话清晰。如果加入时间显示就更完美...",
            "author": "来自于 178576259 的评价",
            "title": "米兔定位电话",
            "price": "169元"
        },
        {
            "src": "images/7e051b10-ed56-43df-bd60-3780592a3345.jpg",
            "review": "有了它，妈妈再也不用担心我喝不到健康的水了。呵呵，良心产品，平民价格，对现在的水质起到了很好的改善",
            "author": "来自于 爱疯911 的评价",
            "title": "小米净水器",
            "price": "1299元"
        },
        {
            "src": "images/bae79ac6-60d5-478d-90e7-ff1222764bd1.jpg",
            "review": "超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是小米出的东西我都喜欢！那倒是因为那一句？？小米为发...",
            "author": "来自于 田密 的评价",
            "title": "小米随身蓝牙音箱",
            "price": "69元"
        },
        {
            "src": "images/12987438-4522-425f-a252-2493152edda1.jpg",
            "review": "拿到手，感觉很炫！试了一下，音质挺好！挺喜欢！5星好评",
            "author": "来自于 程桂兴吖 的评价 ",
            "title": "小米胶囊耳机",
            "price": "69元"
        },
        {
            "src": "images/032d0ff1-f77f-4830-a469-f3564d55e0c5.jpg",
            "review": "非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖",
            "author": "来自于 秘密 的评价 ",
            "title": "米兔智能故事机",
            "price": " 199元"
        },
        {
            "src": "images/62d44838-f464-4c11-887c-9168645ae797.jpg",
            "review": "真的非常喜欢，从包装到内在都很美，爱不释手",
            "author": "来自于 jiangnanjiang 的评价",
            "title": "90分旅行箱 20寸",
            "price": "299元"
        },
        {
            "src": "images/a5886d24-b443-4a15-88ca-5dbd43b72de3.jpg",
            "review": "非常好用，家里的空气明显改善，净化效器果惊人，以前小孩早上起来总打喷嚏，现在一个也不打了。在小米发布...",
            "author": "来自于 h泓毅y 的评价",
            "title": "小米空气净化器2",
            "price": "699元"
        },
        {
            "src": "images/05972209-0c29-4f2f-9844-09de1093ab02.jpg",
            "review": "样子好可爱，特别是转来转去时很有趣。让它休眠时它就会把头转过去背对着你了，唤醒它又会自动转回来。你",
            "author": "来自于 随风 的评价 ",
            "title": "米家小白智能摄像机",
            "price": "399元"
        },
        {
            "src": "images/dc2b9fb7-5399-48cc-99d9-edea9fbfb9aa.jpg",
            "review": "太棒了，屏幕太大了，一打开小米Max盒子，我们一家人都 哇！ 小米真的太棒了啦，谢谢小米。越来越牛B",
            "author": "来自于 C浩天 的评价",
            "title": "小米Max全网通版",
            "price": "1299元"
        },
        {
            "src": "images/54e35fdd-bc68-4a89-bad7-c9c3bb2fc6fe.jpg",
            "review": "包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...",
            "author": "来自于 HZG 的评价",
            "title": "米家压力IH电饭煲",
            "price": "999元"
        },
        {
            "src": "images/aa6b038a-2946-4549-acff-17c58e701556.jpg",
            "review": "里面的做工也就是看看工程图介绍，没打开看过。外表的近乎类肤质触感真的做的太棒了。电源开关清脆的触感也...",
            "author": "来自于 江南晴天 的评价",
            "title": "小米插线板",
            "price": "49元"
        },
        {
            "src": "images/8949026b-fa9a-4370-989b-5d5e2f149106.jpg",
            "review": "很好！特别是，拦截功能，智能管控……随时随地知道家中网络情况……",
            "author": "来自于 骆勇 的评价",
            "title": "小米路由器3",
            "price": "149元"
        }
    ];
    var arrH = [];
    for (var j = 0; j < 4; j++) {
        arrH[j] = Math.floor(Math.random() * data.length);
        var msg = data[arrH[j]];
        data.splice(arrH[j], 1);
        var str = '<a href="#" class="pic">' +
            '<img src="' + msg.src + '"/>' +
            '</a>' +
            '<p class="review">' +
            '<a href="#">' + msg.review + '</a>' +
            '</p>' +
            '<p class="author">' + msg.author + '</p>' +
            '<div class="info">' +
            '<h3 class="in-title"><a href="#">' + msg.title + '</a></h3>' +
            '<span class="sep">|</span>' +
            '<p class="in-price">' + msg.price + '</p>' +
            '</div>';
        $(".hot-pro-item li:eq(" + j + ")").append(str);
    }

   // 内容部分

    var i_1=0;
   $(".col1 .right").click(function () {
       $(".col1 .left").css("cursor","pointer");
           if(i_1==2){
               i_1=2;
           }else{
               i_1++;
           }
           var num=-i_1*296;
           $(".col1 .nr-slider").stop().animate({"left":""+num+"px"},500);
           $(".col1 ol li span").removeClass("nr-active");
           $(".col1 ol li:eq("+i_1+") span").addClass("nr-active");
   })
    $(".col1 .left").click(function () {
        if(i_1==0){
            i_1=0;
        }else{
            i_1--;
        }
        var num=-i_1*296;
        $(".col1 .nr-slider").stop().animate({"left":""+num+"px"},500)
        $(".col1 ol li span").removeClass("nr-active");
        $(".col1 ol li:eq("+i_1+") span").addClass("nr-active");
    })
    var i_2=0
    $(".col2 .right").click(function () {

        if(i_2==3){
            i_2=3;
        }else{
            i_2++;
        }
        var num=-i_2*296;
        $(".col2 .nr-slider").stop().animate({"left":""+num+"px"},500);
        $(".col2 ol li span").removeClass("nr-active");
        $(".col2 ol li:eq("+i_2+") span").addClass("nr-active");
    })
    $(".col2 .left").click(function () {
        if(i_2==0){
            i_2=0;
        }else{
            i_2--;
        }
        var num=-i_2*296;
        $(".col2 .nr-slider").stop().animate({"left":""+num+"px"},500)
        $(".col2 ol li span").removeClass("nr-active");
        $(".col2 ol li:eq("+i_2+") span").addClass("nr-active");
    })
    var i_3=0
    $(".col3 .right").click(function () {

        if(i_3==3){
            i_3=3;
        }else{
            i_3++;
        }
        var num=-i_3*296;
        $(".col3 .nr-slider").stop().animate({"left":""+num+"px"},500);
        $(".col3 ol li span").removeClass("nr-active");
        $(".col3 ol li:eq("+i_3+") span").addClass("nr-active");
    })
    $(".col3 .left").click(function () {
        if(i_3==0){
            i_3=0;
        }else{
            i_3--;
        }
        var num=-i_3*296;
        $(".col3 .nr-slider").stop().animate({"left":""+num+"px"},500)
        $(".col3 ol li span").removeClass("nr-active");
        $(".col3 ol li:eq("+i_3+") span").addClass("nr-active");
    })
    var i_4=0
    $(".col4 .right").click(function () {

        if(i_4==3){
            i_4=3;
        }else{
            i_4++;
        }
        var num=-i_4*296;
        $(".col4 .nr-slider").stop().animate({"left":""+num+"px"},500);
        $(".col4 ol li span").removeClass("nr-active");
        $(".col4 ol li:eq("+i_4+") span").addClass("nr-active");
    })
    $(".col4 .left").click(function () {
        if(i_4==0){
            i_4=0;
        }else{
            i_4--;
        }
        var num=-i_4*296;
        $(".col4 .nr-slider").stop().animate({"left":""+num+"px"},500)
        $(".col4 ol li span").removeClass("nr-active");
        $(".col4 ol li:eq("+i_4+") span").addClass("nr-active");
    })
})


