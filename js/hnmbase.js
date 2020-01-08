<<<<<<< HEAD
/*
 * hnmSkin (http://hanamachi.com)
 * Copyright 2016 Hanamach!
=======

/*
 * hnmSkin (http://hanamachi.com)
 * Copyright 2016 Hanamachi-Ya!
>>>>>>> d172b35290dcab02f693002883bde365b33fab5f
 * Licensed under the MIT license
 */

var formsrc = '<form id="hnm_login_form" method="post" action="#nucleus_lf" class="form-signin"><h2>ログインフォーム</h2>';
formsrc+= '<div class="loginform"><input type="hidden" name="action" value="login" />';
formsrc+= '<input id="nucleus_lf_name" class="form-control" name="login" placeholder="アカウント" required autofocus />';
formsrc+= '<input type="password" id="nucleus_lf_pwd" class="form-control" name="password" placeholder="パスワード" required />';
formsrc+= '<p class="txtC mt5 mb5"><a href="./?special=account&acnt=forget" id="forgot" class="wht">パスワードを忘れた</a></p>';
formsrc+= '<div class="checkbox"><label for="nucleus_lf_shared">';
formsrc+= '<input type="checkbox" value="1" name="shared" id="nucleus_lf_shared">ディバイスを共用する</label></div>';
formsrc+= '<input type="submit" alt="ログイン" value="ログイン" class="formbot" />';
//formsrc+= '<p class="txtC mt5 mb5"><a href="./?special=account" id="add_acont" class="wht">新規ユーザー登録</a></p>';
formsrc+= '<a href="./" class="formbot scnd">キャンセル</a>';
formsrc+= '</div></form>';

var noimage = '<img src="./skins/hnmboot4/image/hnm-no-image.svg" />';

$(function(){//jQueryhtml読み込み
	$('._firstimg').each(function() { // firstimag 取得
		var _str = $(this).html();
		var _href = $(this).attr('href');
		var _img = _str.match(/<img.*?src\s*=\s*[\"|\'](.*?)[\"|\'].*?>/g);
		if ( _img == null ) { _img = noimage; } //画像がなければSVGを配置
		_str = '<a href="' + _href +'">' + _img + '</a>';
		$(this).html( _str );
	});

	$("#hnm_login").click(function() { //ログインフォーム表示
		$("#nucleus_lf").removeClass('d-none');
		$("#nucleus_lf").html(formsrc);
	});

	'use strict' //bootstrap4 offcanvas
	$('[data-toggle="offcanvas"]').click(function () {
		$('.offcanvas-collapse').toggleClass('open')
	})

	var pagetop = $('#btn_top');
	pagetop.hide(); // ボタン非表示
	$(window).scroll(function() { // 100px スクロールしたらボタン表示
		if ( $(this).scrollTop() > 100 ){ pagetop.fadeIn(); } 
		else { pagetop.fadeOut(); }
	});
	pagetop.click(function () {
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});
})






