$(function () {
    $("#menu").popover({
        animation: true,
        trigger: 'click',
        //template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        html: true,
        placement: 'bottom',
        //delay:{show: 1, hide: 1500},
        content: ['<div class="list-group">',
            '<a href="01.html" class="list-group-item">01.京东正向业务流程概要 </a>',
            '<a href="02.html" class="list-group-item">02.自营业务概绍</a>',
            '<a href="031.html" class="list-group-item">03.POP开放平台业务概绍</a>',
            '<a href="04.html" class="list-group-item">04.品控概绍</a>',
            '<a href="05.html" class="list-group-item">05.商品管理流程概绍</a>',
            '<a href="061.html" class="list-group-item">06.京东商品信息管理概绍 </a>',
            '<a href="07.html" class="list-group-item">07.结算概绍</a>',
            '<a href="08.html" class="list-group-item">08.返利概绍</a>',
            '<a href="09.html" class="list-group-item">09.促销概绍</a>',
            '<a href="101.html" class="list-group-item">10.营销资源概绍</a>',
            '<a href="111.html" class="list-group-item">11.反腐和信息安全概绍</a>',
            '<a href="121.html" class="list-group-item">12.术语概绍</a>',
            '<a href="131.html" class="list-group-item">13.事业部系统概览</a>',
            '</div>'].join('')
    });
    $("#content").click(function () {
        $("#content").popover('hide');
    });

    var pages = ['Index', 'MuLu', '01', '02', '031', '032', '04', '05', '061', '062',
        '07', '08', '09', '101', '102', '111', '112', '121', '122', '123', '131', '132', 'fengdi'];
    var btns = ' <div class="btnPrev" style="display: block;"><a target="_self" href="#"></a></div>' +
        '<div class="btnNext" style="display: block;"><a target="_self" href="#"></a></div>';
    $("body").append(btns);
    var pathname = window.location.pathname;
    var currPath = pathname.substring(pathname.lastIndexOf('/') + 1, pathname.lastIndexOf("."));
    var index = pages.indexOf(currPath);
    var host = window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1);

    $('.btnPrev>a').attr('href', pages[index - 1] ? host + pages[index - 1] + '.html' : '#');
    $('.btnNext>a').attr('href', pages[index + 1] ? host + pages[index + 1] + '.html' : '#');


});