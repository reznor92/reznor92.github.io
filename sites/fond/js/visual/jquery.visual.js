$(document).ready(function () {
    schemas.ini();
});

/**
 * @author Maxim Klimenko mavsan@gmail.com
 * @type {{schema: string, font: string, ini: schemas.ini, goo: schemas.goo, back: schemas.back, fontSize1: schemas.fontSize1, fontSize2: schemas.fontSize2, fontSize3: schemas.fontSize3, whiteSchema: schemas.whiteSchema, blackSchema: schemas.blackSchema, correctLinks: schemas.correctLinks}}
 */
var schemas = {
    schema: '',
    font: '',

    ini: function () {
        $("#schema2").on("click", this.back);
        $("#font1Schema").on("click", this.fontSize1);
        $("#font2Schema").on("click", this.fontSize2);
        $("#font3Schema").on("click", this.fontSize3);
        $("#whiteSchema").on("click", this.whiteSchema);
        $("#blackSchema").on("click", this.blackSchema);

        // если в get есть интересующие параметры...
        var get = location.search,
            tmp = [],
            tmp2 = [],
            param = [];

        if(get != null) {
            tmp = (get.substr(1)).split('&');
            for(var i=0; i < tmp.length; i++) {
                tmp2 = tmp[i].split('=');
                param[tmp2[0]] = tmp2[1];
            }
        };

        if(param.schema !== undefined) {
            $("#schema1").click();
            if(param.schema == "white") schemas.whiteSchema(); else schemas.blackSchema();
        }

        if(param.font !== undefined)
            switch (param.font) {
                case "f1":
                    schemas.fontSize1();
                    break;

                case "f2":
                    schemas.fontSize2();
                    break;

                case "f3":
                    schemas.fontSize3();
                    break;
            }
    },
    /**
	 * Нажатие на кнопку Показать версию для слабовидящих
	 */
    goo: function() {
        $(".schemaButton.hidden").each(function(){$(this).removeClass('hidden')});
        $(this).addClass('hidden');
    },
    /**
	 * Нажали на кнопку Обычный сайт
	 */
    back: function() {
        $("*").each(function () {
            $(this)
                .removeClass("font3Schema")
                .removeClass("font2Schema")
                .removeClass("font1Schema")
                .removeClass("blackSchema")
                .removeClass("whiteSchema");
        });

        schemas.schema = '';
        schemas.font = '';
        schemas.correctLinks();
    },
    /**
	 * Нажали на изменение размера шрифта 1
	 */
    fontSize1: function () {
        $("*:not(i, .schemaButton, h1, h2, h3, header .header-menu .navbar-collapse .navbar-nav li a, .title-slide)").each(function () {
            $(this).removeClass("font3Schema").removeClass("font2Schema").addClass("font1Schema");
        });
        schemas.font = 'f1';
        schemas.correctLinks();
    },
    /**
	 * Нажали на изменение размера шрифта 2
	 */
    fontSize2: function() {
        $("*:not(i, .schemaButton, h1, h2, h3, header .header-menu .navbar-collapse .navbar-nav li a, .title-slide, header .block-contacts-header .box-phone .sub-phone)").each(function () {
            $(this).removeClass("font1Schema").removeClass("font3Schema").addClass("font2Schema");
        });
        schemas.font = 'f2';
        schemas.correctLinks();
    },
    /**
	 * Нажали на изменение размера шрифта 3
	 */
    fontSize3: function() {
        $("*:not(i, .schemaButton, h1, h2, h3, header .header-menu .navbar-collapse .navbar-nav li a, .title-slide, header .block-contacts-header .box-phone .sub-phone, header .block-logo .logo .sub)").each(function () {
            $(this).removeClass("font1Schema").removeClass("font2Schema").addClass("font3Schema");
        });
        schemas.font = 'f3';
        schemas.correctLinks();
    },
    /**
	 * Бела схема
	 */
    whiteSchema: function() {
        $("*:not(.bg-position, .slider .item .description, .slider .item .description .container, .slider .item .description .container .row, .slider .item .description .container .row .flexBox, .slider .slick-prev, .slider .slick-next)").each(function () {
            $(this).removeClass("blackSchema").addClass("whiteSchema");
        });
        schemas.schema = 'white';
        schemas.correctLinks();
    },
    /**
	 * Черная схема
	 */
    blackSchema: function () {
        $("*:not(.bg-position, .slider .item .description, .slider .item .description .container, .slider .item .description .container .row, .slider .item .description .container .row .flexBox, .slider .slick-prev, .slider .slick-next)").each(function () {
            $(this).removeClass("whiteSchema").addClass("blackSchema");
        });
        schemas.schema = 'black';
        schemas.correctLinks();
    },
    /**
	 * Изменение ссылок на странице
	 */
    correctLinks: function () {
        $("a:not(.schemaButton)").each(function() {
            var href = $(this).attr('href'),
                get = href.match(/(?:.+)?\?(.+)/),
                tmp = [],
                tmp2 = [],
                param = [];

            if(href.match(/mailto/))
                return;

            if(href.match(/^\?.+/)) href = '';
            href = href.replace(/^([^?]*)(.*)?/, "$1");

            if(get != null) {
                tmp = get[1].split('&');
                for(var i=0; i < tmp.length; i++) {
                    tmp2 = tmp[i].split('=');
                    param[tmp2[0]] = tmp2[1];
                }
            }

            delete param['schema'];
            delete param['font'];

            if (schemas.schema != '')
            {
                param['schema'] = schemas.schema;
            }

            if (schemas.font != '')
            {
                param['font'] = schemas.font;
            }

            var ptmp = '';
            for (var key in param) {
                if(ptmp.length > 0) ptmp += "&";
                ptmp += key + "=" + param[key];
            }
            if(ptmp != '')
                href += "?" + ptmp;

            $(this).attr('href', href);
        });
    }
};

function checkForNum(_input)
{
    checkInput(_input, /\D/g);
}

function checkInput(_input, _regex)
{
    _input.value = _input.value.replace(_regex, "");
}