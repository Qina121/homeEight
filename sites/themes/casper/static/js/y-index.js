$(document).ready(function() {
  //定义变量
  var navItem = $(".nav_item");
  var header = $(".y-header");
  var applyBlock = $(".y-applys .block");
  var autoMarketing = $(".auto_marking");
  var win_state = true;
  var consult = $(".y-consult");
  var consultWin = $(".consult_win");
  var emailInput = $(".email");
  var phoneInput = $(".phone");
  var block = $(".y-applys .model .block");
  var functionBlock = $(".function_block");
  var matte = $(".matte");
  var yes = $(".yes");
  var childNav = $(".y-header .child_nav_2");
  var childNava = childNav.find("a");
  var yAbout = $(".y-about");
  var scaleItem = yAbout.find("li");
  var cardRight = $(".email-product .show-card .right");
  var cardLeft = $(".email-product .show-card .left");
  var emailInformation = $(".y-more-information .item");
  var applyH = $(".y-apply-h .block a");
  var titleProduct = $(".provide-solution .title div");
  var contentSolution = $(".provide-solution .content .example");
  var solutionTriangle = $(".provide-solution .triangle");
  var solutionInfoText = $(".provide-solution .text div");
  var titleCase = $(".example-case .title .case");
  var contentCase = $(".example-case .content");
  var contentExample = $(".example-case .content .block");
  var triangle = $(".example-case .triangle");
  var infoText = $(".example-case .print div");
  var suitText = $(".example-case .suit div");
  var CaseExample = $(".example-case .Case_example");
  var provide_example = $(".provide-solution .solution_example");
  var caseTitle = $(".y-example .case .success .successCase");
  var caseBanner = $(".y-example .case .success .title div");
  var caseNav = $(".y-example .case .success .title div");
  var subNav = $(".y-example .subNav div");
  var noteNum = 0;
  var noteTimer = 0;
  var noteProduct = $(".note-product");
  var productBox = $(".note-product .product .box");
  var productBoxItem = $(".note-product .product .box .item");
  var descBox = $(".note-product .desc .box");
  var signLi = $(".note-product .sign li");
  var bannerText = $(".y-banner .content .textAuto");
  var bannerModel = $(".y-banner .content .models"); 
  var bannerBlock = $(".y-banner .content .blocks");
  var bannerDetail = $(".y-banner .content .detail");
  var comming = $(".y-banner .comming-soon");
  var mobleHead = $(".mobleHead");
  var menuIcon = $(".menuIcon");
  var menuList = $(".menuList");
  var url = location.search;
  var W = $(window).width() + "px";
  var H = $(window).height() + "px";
  var Width = $(window).width();
  var Height = $(window).height();
  var yesL = (Width - $(".yes").width()) / 2 + "px";
  var commingTop = (Height - comming.height() - 70) / 2;
  var switchNum = 0;
  var timer = 0;
  var formTimer = 0;

  //定义函数
  function slide() {
    applyBlock.stop().animate({ marginTop: "0" }, 600);
  }

  function imgScale(picture) {
    picture.css({ transform: "scale(1.1,1.1)", transition: "0.3s" });
  }
  function imgScale_samll(picture) {
    picture.css({ transform: "scale(1,1)", transition: "0.3s" });
  }

  function countDown() {
    //倒计时
    var endTime = new Date().getTime() + 60 * 1000;

    formTimer = setInterval(function() {
      var start = new Date().getTime();
      var time = endTime - start;
      if (time <= 0) {
        time = 0;
        clearInterval(formTimer);
      }

      //秒：
      var s = parseInt((time % (60 * 1000)) / 1000);

      $(".code_button").html(s + "s");
      $(".code_button_mf").html(s + "s");
      if (s <= 1) {
        $(".code_button").removeAttr("disabled");
        $(".code_button").html("点击获取验证码");
        $(".code_button_mf").removeAttr("disabled");
        $(".code_button_mf").html("点击获取验证码");
      } else {
        $(".code_button").html(s + "s");
        $(".code_button").attr("disabled", "disabled");
        $(".code_button_mf").html(s + "s");
        $(".code_button_mf").attr("disabled", "disabled");
      }
    }, 1000);
  }

  //如果是当前的页面，导航下划线没有移出事件
  function current() {
    var url = window.location.pathname;
    //转换成字符串
    url = url.toString();
    var array = new Array(); //用来存放分分割后的字符串
    array = url.split("/");
    for (var i = 0; i < navItem.length; i++) {
      navItem
        .eq(i)
        .find(".line")
        .stop()
        .animate({ width: "0px", opacity: 0 }, 200);
      if (navItem.eq(i).attr("mark") == array[1]) {
        $(this)
          .find(".line")
          .stop()
          .animate({ width: "0px", opacity: 0 }, 200, function() {
            console.log(1111);
          });
        navItem
          .eq(i)
          .find(".scope")
          .css("color", "#07c6fc");
      } else {
        navItem.eq(i).mouseleave(function() {
          $(this)
            .find(".line")
            .stop()
            .animate({ width: "0px", opacity: 0 }, 200);
          $(this)
            .find(".scope")
            .css("color", "#666");
        });
      }
    }
  }

  function emailZe(s) {
    var val = s.val();
    var re = /(^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+)|(^$)/;
    if (re.test(val)) {
      s.css("border", "1px solid #ccc");
    } else {
      s.css("border", "1px solid red");
    }
  }

  function phoneZe(s) {
    var val = s.val();
    if (val) {
      var t = /^1[345789]\d{9}$/;
      if (t.test(val)) {
        s.css("border", "1px solid #ccc");
      } else {
        s.css("border", "1px solid red");
      }
    }
  }

  function shadow(clock) {
    clock.mouseenter(function() {
      $(this).css("boxShadow", "0px 0px 10px #ccc");
    });
    clock.mouseleave(function() {
      $(this).css("boxShadow", "none");
    });
  }

  function show(item) {
    item.mouseenter(function() {
      $(this)
        .find(".information")
        .css("display", "flex");
    });
    item.mouseleave(function() {
      $(this)
        .find(".information")
        .css("display", "none");
    });
  }

  //短信产品切换
  function noteqie() {
    noteTimer = setInterval(function() {
      if (noteNum >= signLi.length - 1) {
        noteNum = 0;
        productBox
          .stop()
          .animate(
            { marginLeft: -200 * signLi.length + "px" },
            300,
            function() {
              productBox.css("marginLeft", 0 + "px");
            }
          );
        descBox
          .stop()
          .animate(
            { marginLeft: -300 * signLi.length + "px" },
            300,
            function() {
              descBox.css("marginLeft", 0 + "px");
            }
          );
      } else {
        noteNum++;
        productBox.stop().animate({ marginLeft: -200 * noteNum + "px" }, 300);
        descBox.stop().animate({ marginLeft: -300 * noteNum + "px" }, 300);
      }
      for (var i = 0; i < productBoxItem.length - 1; i++) {
        signLi.eq(i).css("backgroundColor", "#fff");
      }
      signLi.eq(noteNum).css("backgroundColor", "#666");
    }, 2500);
  }

  //成功案例banner
  function caseEnter(_this) {
    _this.css({ transform: "scale(1.2,1.2)", transition: "0.3s" });
  }
  function caseLeave(_this) {
    _this.css({ transform: "scale(1,1)", transition: "0.3s" });
  }
  caseBanner.mouseenter(function() {
    _this = $(this);
    caseEnter(_this);
  });
  caseBanner.mouseleave(function() {
    _this = $(this);
    caseLeave(_this);
  });

  caseBanner.on("click", function() {});
  //点击切换
  function exampleSwitch(title, content, mark, desc, suit) {
    title.on("click", function() {
      var index = $(this).index();
      switchNum = index;
      for (var i = 0; i < title.length; i++) {
        title.eq(i).css({ color: "#fff", backgroundColor: "#26c3f2" });
        desc.eq(i).css("display", "none");
        if (suit) {
          suit.eq(i).css("display", "none");
        }
      }
      title.eq(switchNum).css({ color: "#26c3f2", backgroundColor: "#fff" });
      content.stop().animate({ marginLeft: -1080 * switchNum + "px" }, 300);
      desc.eq(switchNum).css("display", "block");
      if (suit) {
        suit.eq(switchNum).css("display", "block");
      }
    });
  }
  //气泡点击切换
  function caseSwitch(title, content, mark, desc, suit, sub) {
    title.on("click", function() {
      $("body,html").animate({ scrollTop: 570 }, 300);
      var index = $(this).index();
      switchNum = index;
      for (var i = 0; i < title.length; i++) {
        desc.eq(i).css("display", "none");
        if (suit) {
          suit.eq(i).css("display", "none");
        }
        if (sub) {
          sub
            .eq(i)
            .css({
              transform: "scale(1,1)",
              transition: "0.3s",
              backgroundColor: "#fff"
            });
        }
      }
      content.stop().animate({ marginLeft: -1080 * switchNum + "px" }, 300);
      desc.eq(switchNum).css("display", "block");
      if (suit) {
        suit.eq(switchNum).css("display", "block");
      }
      if (sub) {
        sub
          .eq(switchNum)
          .css({
            transform: "scale(1.3,1.3)",
            transition: "0.3s",
            backgroundColor: "#f2f2f2"
          });
      }
    });
  }

  //案例切换轮播效果
  function autoSwitch(title, content, mark, desc, suit, sub) {
    timer = setInterval(function() {
      if (switchNum >= title.length - 1) {
        switchNum = 0;
        content
          .stop()
          .animate(
            { marginLeft: -1080 * title.length + "px" },
            300,
            function() {
              content.css("marginLeft", 0 + "px");
            }
          );
      } else {
        switchNum++;
        var moveDistance = content.width()/(title.length+1);
        console.log(content.width())
        content.stop().animate({ marginLeft: -moveDistance* switchNum + "px" }, 300);
      }
      for (var i = 0; i < title.length; i++) {
        title.eq(i).css({ color: "#fff", backgroundColor: "#26c3f2" });
        desc.eq(i).css("display", "none");
        if (suit) {
          suit.eq(i).css("display", "none");
        }
        if (sub) {
          sub
            .eq(i)
            .css({
              transform: "scale(1,1)",
              transition: "0.3s",
              backgroundColor: "#fff"
            });
        }
      }
      title.eq(switchNum).css({ color: "#26c3f2", backgroundColor: "#fff" });
      desc.eq(switchNum).css("display", "block");
      if (suit) {
        suit.eq(switchNum).css("display", "block");
      }
      if (sub) {
        sub
          .eq(switchNum)
          .css({
            transform: "scale(1.3,1.3)",
            transition: "0.3s",
            backgroundColor: "#f2f2f2"
          });
      }
    }, 3500);
  }

  //判断表单内容是否有空值
  function cmd(formInput) {
    var ipt = formInput.find("input");

    for (var i = 0; i < ipt.length; i++) {
      if (ipt[i].value.length == 0) {
        ipt[i].focus();
        return false;
      }
    }
    return true;
  }

  //提交表单
  function test(formId) {
    //验证是否注册成功
    var form = new FormData(formId);
    $.support.cors = true;
    $.ajax({
      url: "https://wellemail.com/Service/SolutionsConsulting",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      success: function(data) {
        if (data.Accepted) {
          $(".matte").css("display", "block");
          $("body").css("overflow", "hidden");
          var yesT =
            (Height - $(".yes").height()) / 2 + $(window).scrollTop() + "px";
          yes.css({ top: yesT, left: yesL });
          var len = $(formId).find("input").length;
          for (var i = 0; i < len; i++) {
            $(formId)
              .find("input")
              .eq(i)
              .attr("value", "");
          }
        } else {
          alert("验证码错误或失败，请重新填写提交！");
        }
      },
      error: function(e) {
        alert("错误！！");
      }
    });
  }

  function random(formId) {
    //验证随机码是否正确
    var form = new FormData(formId);
    //随机码验证
    $.ajax({
      url: "https://wellemail.com/Service/SendMobileCode",
      type: "post",
      data: form,
      processData: false,
      contentType: false,
      success: function(data) {
        if (data.Accepted) {
          countDown(); //倒计时
        } else {
          alert("随机码输入错误！！！！！");
        }
      },
      error: function(e) {
        alert("错误！！");
      }
    });
  }

  function menushow() {
    menuIcon.bind("click",function(e){
      menuList.stop().animate({ opacity: "1", height: "638px" }, 300);
      
      $("body").one("click",function(){
        menuList.stop().animate({ opacity: "0", height: "0" }, 300);
      });
      e.stopPropagation();  
  })
  menuList.bind("click",function(e){
    　　 e.stopPropagation();
    })

    $("body").children().click(function () {});


  }

  var os = (function() {
    var ua = navigator.userAgent,
      isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
      isAndroid = /(?:Android)/.test(ua),
      isFireFox = /(?:Firefox)/.test(ua),
      isChrome = /(?:Chrome|CriOS)/.test(ua),
      isTablet =
        /(?:iPad|PlayBook)/.test(ua) ||
        (isAndroid && !/(?:Mobile)/.test(ua)) ||
        (isFireFox && /(?:Tablet)/.test(ua)),
      isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet: isTablet,
      isPhone: isPhone,
      isAndroid: isAndroid,
      isPc: isPc
    };
  })();

  //调用函数

  $(".y-banner .content").css("height", Height - 70 + "px");
  if ($(".y-banner .content").height() < 800) {
    $(".y-banner .content .top").css({
      background: "url(/images/banner_smallup.png) center no-repeat",
      height: "208px"
    });
    $(".y-banner .content .down").css({
      background: "url(/images/banner_smalldown.png) center no-repeat",
      height: "137px"
    });
  } else {
    $(".y-banner .content .top").css({
      background: "url(/images/banner_up.png) center no-repeat",
      height: "270px"
    });
    $(".y-banner .content .down").css({
      background: "url(/images/banner_down.png) center no-repeat",
      height: "170px"
    });
  }
  comming.css("paddingTop", commingTop + "px");
  childNav.css("width", W);


  window.onresize = function() {
    var W = $(window).width() + "px";
    var Height = $(window).height();
    if (window.screen.width > 400) {
      $(".y-banner .content").css("height", Height - 70 + "px");
    } else {
      $(".y-banner .content").css("height", Height + "px");
    }
    var textTop = (Height - bannerText.height()) / 2 - 30;
    var modelTop = (Height - bannerModel.height()) / 2-45;
    bannerText.css("paddingTop", textTop + "px");
    bannerModel.css("paddingTop", modelTop + "px");

    if ($(".y-banner .content").height() < 800) {
      $(".y-banner .content .top").css({
        background: "url(/images/banner_smallup.png) center no-repeat",
        height: "208px"
      });
      $(".y-banner .content .bottom").css({
        background: "url(/images/banner_smalldown.png) center no-repeat",
        height: "137px"
      });
    } else {
      $(".y-banner .content .top").css({
        background: "url(/images/banner_up.png) center no-repeat",
        height: "270px"
      });
      $(".y-banner .content .bottom").css({
        background: "url(/images/banner_down.png) center no-repeat",
        height: "170px"
      });
    }

    childNav.css("width", W);

    var commingTop = (Height - comming.height() - 70) / 2;
    comming.css("paddingTop", commingTop + "px");
  };

  bannerBlock.mouseenter(function() {
    var index = $(this).index();
    bannerBlock.stop().animate({ opacity: "0" }, 200, function() {
      bannerBlock.css("display", "none");

      bannerDetail.eq(index).css("display", "block");

      bannerDetail
        .eq(index)
        .stop()
        .animate({ opacity: "1" }, 200);
    });
  });

  bannerDetail.mouseleave(function() {
    var index = $(this).index();
    $(this)
      .stop()
      .animate({ opacity: "0" }, 300, function() {
        $(this).css("display", "none");

        bannerBlock.css("display", "block");

        bannerBlock.stop().animate({ opacity: "1" }, 300);
      });
  });

  $(".y-banner .content .models").mouseleave(function() {
    bannerDetail.stop().animate({ opacity: "0" }, 300, function() {
      bannerDetail.css("display", "none");

      bannerBlock.css("display", "block");

      bannerBlock.stop().animate({ opacity: "1" }, 300);
    });
  });
  current();
  navItem.mouseenter(function() {
    $(this)
      .find(".line")
      .stop()
      .animate({ width: "100px", opacity: "1" }, 300);

    $(this)
      .find(".scope")
      .css("color", "#07c6fc");

    $(this)
      .find(".nav_sub")
      .css("display", "block");
    $(this)
      .find(".nav_sub")
      .eq(0)
      .stop()
      .animate({ opacity: "1", height: "245px" }, 200);
  });
  navItem.eq(3).mouseenter(function() {
    $(this)
      .find(".nav_sub")
      .eq(0)
      .stop()
      .animate({ opacity: "1", height: "162px" }, 200);
  });
  navItem.mouseleave(function() {
    $(this)
      .find(".nav_sub")
      .eq(0)
      .stop()
      .animate({ opacity: "0", height: "0px" }, 200, function() {
        $(this).css("display", "none");
      });
  });

  $(".y-header nav .nav_sub a").mouseenter(function() {
    $(this).css({ backgroundColor: "#07c6fc", color: "#fff" });
  });
  $(".y-header nav .nav_sub a").mouseleave(function() {
    $(this).css({ backgroundColor: "#fff", color: "#666" });
  });

  //监测滚动条大于零时，导航添加下阴影
  $(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
      header.css({ "box-shadow": "0px 0px 2px 2px #ccc" });
    } else {
      header.css({ "box-shadow": "none" });
    }
  });

  slide();

  //首页的人工咨询
  consult.on("click", function(event) {
    if (win_state) {
      consultWin
        .stop()
        .animate({ opacity: "1", height: "344px", width: "270px" }, 300);
      win_state = false;
    } else {
      consultWin
        .stop()
        .animate({ opacity: "0", height: "0px", width: "0px" }, 300);
      win_state = true;
    }

    event.stopPropagation();
  });
  consultWin.on("click", function(event) {
    event.stopPropagation();
  });

  $(document).on("click", function() {
    consultWin
      .stop()
      .animate({ opacity: "0", height: "0px", width: "0px" }, 300);
    win_state = true;
  });

  //邮件正则
  emailInput.blur(function() {
    emailZe($(this));
  });
  //手机正则
  phoneInput.blur(function() {
    phoneZe($(this));
  });

  //apply移入效果
  block.mouseenter(function() {
    $(this)
      .find(".desc")
      .css({ display: "block", transition: "1s" });
    $(this)
      .find(".desc")
      .stop()
      .animate({ height: "80px", opacity: "1" }, 300);
  });
  block.mouseleave(function() {
    $(this)
      .find(".desc")
      .stop()
      .animate({ height: "0px", opacity: "0" }, 600, function() {});
  });

  $(".email-product .show-card .left").click(function() {
    var T = $(this);
    view(T);
  });
  $(".email-product .show-card .right").click(function() {
    var T = $(this);
    view(T);
  });

  $(".view").click(function(event) {
    event.stopPropagation();
    unview();
  });
  //出现蒙版
  function view(T) {
    if (Height * window.devicePixelRatio > 1000) {
      var imgT =
        (Height * window.devicePixelRatio -
          $(".view img").height() * window.devicePixelRatio) /
          2 +
        $(window).scrollTop() -
        300 +
        "px";
      var imgL =
        (Width * window.devicePixelRatio - $(".view img").width()) / 2 + "px";
    } else {
      var imgT =
        (Height - $(".view img").height()) / 2 +
        $(window).scrollTop() -
        300 +
        "px";
      var imgL = (Width - $(".view img").width()) / 2 + "px";
    }
    T.find(".view").css("display", "block");
    $(".view")
      .find(".center")
      .css({ top: imgT, left: imgL });
    $("body").css("overflow", "hidden");
  }
  //蒙版消失
  function unview() {
    $(".view").css("display", "none");
    $("body").css("overflow", "auto");
  }
  //导航的小iocn放大缩小
  childNava.mouseenter(function() {
    $(this).css({ transform: "scale(1.1,1.1)", transition: "0.6s" });
  });
  childNava.mouseleave(function() {
    $(this).css({ transform: "scale(1,1)", transition: "0.6s" });
  });

  noteqie();
  productBox.mouseenter(function() {
    clearInterval(noteTimer);
  });
  productBox.mouseleave(function() {
    noteqie();
  });
  descBox.mouseenter(function() {
    clearInterval(noteTimer);
  });
  descBox.mouseleave(function() {
    noteqie();
  });

  //关于我们的页面
  scaleItem.mouseenter(function() {
    imgScale($(this));
  });
  scaleItem.mouseleave(function() {
    imgScale_samll($(this));
  });
  applyH.mouseenter(function() {
    imgScale($(this).find("img"));
  });
  applyH.mouseleave(function() {
    imgScale_samll($(this).find("img"));
  });
  $(".order").click(function() {
    if (cmd($("#formBox"))) {
      test($("#tf")[0]);
    } else {
      alert("请将表单填写完整");
    }

    return false;
  });

  $(".tryOne").click(function() {
    if (cmd($("#mfFull"))) {
      test($("#mf")[0]);
    } else {
      alert("请将表单填写完整");
    }

    return false;
  });

  $(".code_button").click(function(e) {
    e.preventDefault();
    random($("#tf")[0]); //获取短信验证码
  });
  $(".code_button_mf").click(function(e) {
    e.preventDefault();
    random($("#mf")[0]); //获取短信验证码
  });

  //点击OK清除浮层
  $(".OK").click(function() {
    $(".matte").css("display", "none");
    $("body").css("overflow", "auto");
    $("#tf")[0].reset();
    clearInterval(formTimer);
    $(".code_button").removeAttr("disabled");
    $(".code_button").html("点击获取验证码");
  });

  //点击刷新更换随机码
  $(".redraw").click(function(e) {
    e.preventDefault();
    $(".random")
      .find(".randomImg")
      .attr(
        "src",
        "https://wellemail.com/Service/CheckCodeImage?" + new Date().getTime()
      );
  });

  shadow(cardRight);
  shadow(cardLeft);

  //关于我们
  shadow(scaleItem);
  shadow(scaleItem);

  exampleSwitch(titleCase, CaseExample, triangle, infoText, suitText);
  exampleSwitch(
    titleProduct,
    provide_example,
    solutionTriangle,
    solutionInfoText
  );
  autoSwitch(titleCase, CaseExample, triangle, infoText, suitText, subNav);
  caseSwitch(caseNav, CaseExample, triangle, infoText, suitText, subNav);
  caseSwitch(subNav, CaseExample, triangle, infoText, suitText, subNav);
  contentCase.mouseenter(function() {
    clearInterval(timer);
  });
  contentCase.mouseleave(function() {
    autoSwitch(titleCase, CaseExample, triangle, infoText, suitText, subNav);
  });
  
  //移动端
  var blockMove = $(".blockmove");
  var largeForm = $(".largeForm");
  var miniForm = $(".miniForm");
  var screenWidth = window.screen.width;

  function ismobile() {
    var mobileArry = ["iPhone", "iPad", "Android", "Windows Phone", "BB10; Touch", "BB10; Touch", "PlayBook", "Nokia"];
    var ua = navigator.userAgent;
    var res= mobileArry.filter(function(arr) {
        return ua.indexOf(arr) > 0;
    });
    return res.length > 0;
  }

  if(ismobile()){

  }


  if (os.isAndroid || os.isPhone) {
    var ratio = 1 / window.devicePixelRatio;

    $("head").append(
      '<meta name="viewport" content="width=device-width,initial-scale=' +
        ratio +
        ",minimum-scale=" +
        ratio +
        ",maximum-scale=" +
        ratio +
        ',user-scalable=no" />'
    );
    var size = document.documentElement.clientWidth / 10.8;
    var mobleHeight = $(window).height();
    $(".y-banner .content").css("height", mobleHeight + "px");
    document.getElementsByTagName("html")[0].style.fontSize = size + "px";
    $('.y-banner .content .model .block').css('display','block');
    $(".b-center").css("width", "90%");
   
    $('.blockmove').css('display','block')
    if (screenWidth < 400) {
      largeForm.css("display", "none");
      miniForm.css("display", "block");
      $('.blockmove').css('display','block')
      // console.log(45646)
      $(".example-case").css(
        "paddingTop",
        ($(window).height() - $(".example-case").height() - 1400) / 2 + "px"
      );

      //导航
      mobleHead.css("display", "block");
      header.css("display", "none");
      $(".y-banner").css("paddingTop", "0");
      $(".maketing").css("paddingTop", "0px");
      $(".y-example").css("paddingTop", "0px");
    } else {
      mobleHead.css("display", "none");
      largeForm.css("display", "block");
      miniForm.css("display", "none");
      $('.blockmove').css('display','none')
    }
  } else {
    $(".y-form .formbg").css({
      background: "url(/images/banner_up.png) no-repeat",
      paddingTop: "300px"
    });
    $('.blockmove').css('display','none')
  }

  if (os.isTablet) {
    mobleHead.css("display", "none");
    largeForm.css("display", "block");
    miniForm.css("display", "none");
  }

  menushow();

});
