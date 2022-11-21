//JavaScript Menu
var tombolMenu = $("tombol-menu");
var menu = $("nav .menu ul");

function kilkMenu() {
	tombolMenu.click(function() {
		menu.toggle();

	});
	menu.click(function () {
		menu.toggle();
	});

}

$(document).ready(function() {
	var width = $(window) .width();
	if (width < 990) {
		klikMenu() ;
	}
})

// Check Lebar
$(window) .resize(function() {
	var width = $(window).width();
	if (width > 989) {
		menu.css("display", "block");

	} else {
		menu.css("display", "none");

	}
	klikMenu();

});
//Closed Pertemuan 24 oktober 2022
//pertemuan 31 oktober 2022

//efek scroll
$(document).ready(function)(){
	var scroll_pos = $(this).scrolltop();
	if(scroll_pos > 0){
		$("nav").addClass("putih");
		$("nav img.hitam").show();
		$("nav img.putih").hide();
	} else {
		$("nav").removeClass("putih");
		$("nav img.hitam").hide();
		$("nav img.putih").show();
	}

});