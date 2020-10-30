var countvalue = 1;
$(function () {
  var prodwidthload = ((window.innerWidth * 0.84).toFixed(0) - 80 - 240 - 320);
  var prodwidthloadtitle = prodwidthload + 140;
  $.getJSON('products.json', function (data) {
    var points;
    var lastFour;
    var ratioAlt;

    $.each(data.items, function (i, f) {
      f.primaryImageUrlcut = f.primaryImageUrl.substring(0,f.primaryImageUrl.length - 4);
      f.lastFour = f.primaryImageUrl.substr(f.primaryImageUrl.length - 4);
      if (f.unitFull == "упаковка") {
        f.infoUnitFull = "упаковками";
      } else if (f.unitFull == "штука"){
        f.infoUnitFull = "поштучно";
      } else {
        f.infoUnitFull = "метрами погонными";
      };
      f.points = f.priceGoldAlt * f.unitRatioAlt;
      f.ratioAlt = f.unitRatio / f.unitRatioAlt;
      var tblRow = "<div class="+"'product__item'"+">"+
      "<div class="+"'product__item__picture'"+"><img src="+f.primaryImageUrlcut+"_220x220_1"+f.lastFour+" alt="+f.title+"/></div>"+
      "<div class="+"'product__item__prodinfo' style="+"'width:"+prodwidthload.toFixed(0)+"px;'>"+"<div class="+"'prodinfo_code' style="+
      "'width:"+prodwidthload.toFixed(0)+"px;'>"+"<p>Код: "+f.code+"</p></div><div class='prodinfo_title' style="+"'width:"+prodwidthloadtitle.toFixed(0)+"px;'>"+
      "<p>"+f.title+"</p></div><div class="+"'prodinfo_assocproducts' style="+"'width:"+prodwidthload.toFixed(0)+"px;'><p>Могут понадобиться: "+
      f.assocProducts+"</p></div><div class="+"'prodinfo_decription' style="+
      "'width:"+prodwidthload.toFixed(0)+"px;'><p>"+f.description+"</p></div></div><div class="+"'product__item__buysection'><div class="+
      "'buysection_isActive'><a>Наличие</a></div><div class="+"'buysection_prices'><p class="+"'club_price'>По карте клуба</p><span class="+
      "'buysection_numbers'><p class="+"'club_price'>"+f.priceGoldAlt.toFixed(2)+" &#8381;</p><p class="+"'basic_price'>"+f.priceRetailAlt.toFixed(2)+
      " &#8381;</p></span><p class="+"'point_price'>Можно купить за "+f.points.toFixed(2)+" балла</p></div><div class="+"'buysection_switcher'><span class="+
      "'switch_item active' id="+"'prod_switch_mkv'><a>За "+f.unitAlt+" </a></span><span class="+"'switch_item' id="+
      "'prod_switch_pack'><a>За "+f.unit+" </a></span></div><div class="+"'buysection_info'><i class="+"'fas fa-info-circle'></i><p>Продается "+
      f.infoUnitFull+":<br> 1 "+f.unitFull+" = "+f.ratioAlt.toFixed(2)+" "+f.unitAlt+"</div><div class="+"'buysection_countselect'><input class="+
      "'buysection_countselect_input' type='text' maxlength='3' min='1' value="+countvalue+ " id='"+f.productId+"_inp' /><div class="+"'buysection_countselect_arrows'><button class="+
      "'countselect_arrow_btn' id='"+f.productId+"_up' onclick='countup(this.id)'><i class="+"'fas fa-caret-up'></i></button><button class="+"'countselect_arrow_btn' id='"+
      f.productId+"_down' onclick='countdown(this.id)'><i class='fas fa-caret-down'></i></button></div></div><div class='buysection_btn'><button class='product_buy_btn' id="+f.productId+" onclick='buybutton()'><i class="+
      "'fas fa-shopping-cart'></i><p>В корзину</p></button></div></div></div>"
      if (f.unitAlt == f.unit) {
        tblRow = tblRow.replace("<span class="+"'switch_item active' id="+"'prod_switch_mkv'><a>За "+f.unitAlt+
        " </a></span><span class="+"'switch_item' id="+"'prod_switch_pack'><a>За "+f.unit+" </a></span>",
        "<span class="+"'switch_item active' id="+"'prod_switch_mkv'><a>За "+f.unitAlt+" </a></span>")
      }
      $(tblRow).appendTo("#products");

      

    });

  });

});
