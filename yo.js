function player_selector(command) {
    eval(command)
};

function yo_ahoy_key(event) {
    if (!event || (!event.key && !event.keyCode)) return;
    var key = ''; 'Enter' === event.key || 13 === event.keyCode ? key = 'fullscreen' : 'Left' === event.key || 'ArrowLeft' === event.key || 37 === event.keyCode ? key = 'prev' : 'Right' === event.key || 'ArrowRight' === event.key || 39 === event.keyCode ? key = 'next' : 'Up' === event.key || 'ArrowUp' === event.key || 38 === event.keyCode ? key = 'up' : 'Down' === event.key || 'ArrowDown' === event.key || 40 === event.keyCode ? key = 'down' : '0' === event.key || 48 === event.keyCode ? key = '0' : '1' === event.key || 49 === event.keyCode ? key = '1' : '2' === event.key || 50 === event.keyCode ? key = '2' : '3' === event.key || 51 === event.keyCode ? key = '3' : '4' === event.key || 52 === event.keyCode ? key = '4' : '5' === event.key || 53 === event.keyCode ? key = '5' : '6' === event.key || 54 === event.keyCode ? key = '6' : '7' === event.key || 55 === event.keyCode ? key = '7' : '8' === event.key || 56 === event.keyCode ? key = '8' : '9' !== event.key && 57 !== event.keyCode || (key = '9');
    if (key && (key === 'up' || key === 'down')) {
        var a = document.querySelector('.yohoho-active');
        console.log(key, a.dataset.event, a && a.dataset && a.dataset.event && parseInt(a.dataset.event));
        if (a && a.dataset && a.dataset.event && parseInt(a.dataset.event)) {
            var u = key === 'up'
                ? document.querySelector('[data-event="' + (parseInt(a.dataset.event) - 1) + '"]:not([style*="display:none"]):not([style*="display: none"]')
                : document.querySelector('[data-event="' + (parseInt(a.dataset.event) + 1) + '"]:not([style*="display:none"]):not([style*="display: none"]');
            if (!u && key === 'up') {
                var p = document.querySelector('[data-event="prev"]:not([style*="display:none"]):not([style*="display: none"]');
                if (p && typeof p.onclick === 'function') {
                    p.onclick.apply(p);
                }
            }
            else if (!u && key === 'down') {
                var n = document.querySelector('[data-event="next"]:not([style*="display:none"]):not([style*="display: none"]');
                if (n && typeof n.onclick === 'function') {
                    n.onclick.apply(n);
                }
            }
            else if (u && typeof u.onclick === 'function') {
                u.onclick.apply(u);
            }
        }
    }
    else if (key && key === 'fullscreen') {
        yo_fullscreen();
    }
    else {
        var e = document.querySelectorAll('[data-event]:not([style*="display:none"]):not([style*="display: none"]');
        if (e && e.length) {
            for (var i = 0; i < e.length; i++) {
                if (key && e[i].dataset.event === key && typeof e[i].onclick === 'function') {
                    e[i].onclick.apply(e[i]);
                    return;
                }
            }
        }
    }
}

function yo(self) {
    var h, a, w, i, l, y, s, t = false, p = '';

    var date1 = new Date();
    var date2 = new Date('2021-10-21');
    var tld = date1 > date2 ? 'cc' : 'online';

    var sel = self && self.getAttribute('data-ahoy')
        ? self.getAttribute('data-ahoy')
        : 'yohoho';

    y = document.querySelector('#' + sel);
    if (!y) {
        y = document.querySelector('#yohoho-online');
        if (!y) {
            y = document.querySelector('#yohoho-torrent');
            if (!y) {
                return false;
            }
            else {
                t = true;
            }
        }
    }

    var yohoho = document.createElement('div');
    var attr = Array.prototype.slice.call(y.attributes);

    while (a = attr.pop()) { yohoho.setAttribute(a.nodeName, a.nodeValue); }
    yohoho.innerHTML = y.innerHTML;
    y.parentNode.replaceChild(yohoho, y);

    var options = [].slice.call(yohoho.attributes).reduce(function (o, a) {
        return /^data-/.test(a.name) && (o[a.name.substr(5)] = decodeURIComponent(a.value)), o;
    }, {});

    if (self && self.attributes) {
        [].slice.call(self.attributes).reduce(function (o, a) {
            if (/^data-/.test(a.name)) {
                options[a.name.substr(5)] = decodeURIComponent(a.value)
            }
        }, {});
    }
    options.player = yo_get_players_list();
    var bg = (options.bg && options.bg.replace(/[^0-9a-z]/ig, ''))
        ? options.bg.replace(/[^0-9a-z]/ig, '')
        : '000';

    var options_url = "https://reyohoho.space:4435/cache";
    options.url = null;
    options.code = "31";
    var options_loading = options.loading
        ? decodeURIComponent(options.loading).trim()
        : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtc3BpcmFsIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgY2xhc3M9ImJrIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTU0LjUgODkuOWMtOS42IDAtMTguNi0zLjktMjUuNC0xMSAtNi44LTcuMS0xMC41LTE2LjYtMTAuNS0yNi43IDAtOC45IDMuMy0xNy4yIDkuMi0yMy41UzQxLjcgMTkgNTAuMiAxOWM4LjQgMCAxNi40IDMuNCAyMi4zIDkuNyA2IDYuMyA5LjIgMTQuNiA5LjIgMjMuNSAwIDE1LjgtMTIuMiAyOC43LTI3LjMgMjguNyAtMTUgMC0yNy4zLTEyLjktMjcuMy0yOC43IDAtMTMuMyAxMC4zLTI0LjIgMjMtMjQuMnMyMyAxMC44IDIzIDI0LjJjMCAxMC44LTguNCAxOS42LTE4LjcgMTkuNiAtMTAuMyAwLTE4LjctOC44LTE4LjctMTkuNiAwLTguMyA2LjUtMTUuMSAxNC40LTE1LjEgNy45IDAgMTQuNCA2LjggMTQuNCAxNS4xIDAgNS44LTQuNSAxMC42LTEwLjEgMTAuNnMtMTAuMS00LjgtMTAuMS0xMC42YzAtMy40IDIuNi02LjEgNS44LTYuMSAzLjIgMCA1LjggMi43IDUuOCA2LjEgMCAwLjktMC43IDEuNi0xLjUgMS42IC0wLjggMC0xLjUtMC43LTEuNS0xLjYgMC0xLjYtMS4zLTIuOS0yLjgtMi45IC0xLjUgMC0yLjggMS4zLTIuOCAyLjkgMCA0LjEgMy4yIDcuNCA3LjEgNy40czcuMS0zLjMgNy4xLTcuNGMwLTYuNi01LjEtMTItMTEuNC0xMiAtNi4zIDAtMTEuNCA1LjQtMTEuNCAxMiAwIDkuMSA3IDE2LjUgMTUuNyAxNi41IDguNiAwIDE1LjctNy40IDE1LjctMTYuNSAwLTExLjYtOS0yMS0yMC0yMXMtMjAgOS40LTIwIDIxYzAgMTQuMSAxMC45IDI1LjUgMjQuMyAyNS41czI0LjMtMTEuNCAyNC4zLTI1LjVjMC0xNi42LTEyLjgtMzAtMjguNi0zMCAtMTUuOCAwLTI4LjYgMTMuNS0yOC42IDMwIDAgOS4yIDMuNCAxNy45IDkuNiAyNC40IDYuMiA2LjUgMTQuNSAxMC4xIDIzLjIgMTAuMXMxNy0zLjYgMjMuMi0xMC4xYzYuMi02LjUgOS42LTE1LjIgOS42LTI0LjQgMC0xMC40LTMuOS0yMC4yLTEwLjktMjcuNiAtNy03LjQtMTYuMy0xMS40LTI2LjMtMTEuNHMtMTkuMyA0LjEtMjYuMyAxMS40UzEzIDQxLjggMTMgNTIuMmMwIDAuOS0wLjcgMS42LTEuNSAxLjZTMTAgNTMuMSAxMCA1Mi4yYzAtMTEuMyA0LjItMjEuOSAxMS44LTI5LjkgNy42LTggMTcuNy0xMi40IDI4LjQtMTIuNCAxMC43IDAgMjAuOCA0LjQgMjguNCAxMi40IDcuNiA4IDExLjggMTguNiAxMS44IDI5LjkgMCAxMC4xLTMuNyAxOS41LTEwLjUgMjYuN0M3My4xIDg2IDY0LjEgODkuOSA1NC41IDg5Ljl6IiBmaWxsPSIjZmZmIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+';
    options.loading = null;

    var language = (options.language && !/ru/i.test(options.language))
        ? { "trailer": "TRAILER", "torrent": "DOWNLOAD", "next": "NEXT", "prev": "PREV" }
        : { "trailer": "ТРЕЙЛЕР", "torrent": "СКАЧАТЬ", "next": "ВПЕРЕД", "prev": "НАЗАД" };

    var btns = {};
    // options.button = yo_get_players_list2();
    // if (options.button) {
    //     options.button.split(',').forEach(function (button) {
    //         var btn = button.split(':');
    //         if (btn.length === 2 && btn[0] && btn[1]) {
    //             btns[btn[0].trim().toLowerCase()] = btn[1].trim();
    //         }
    //     });
    // }
    options.button_limit = 50;
    options.button_size = (options.button_size && parseFloat(options.button_size))
        ? parseFloat(options.button_size)
        : 1;
    options.separator = (options.separator)
        ? options.separator
        : ',';

    for (var data in options) {
        if (options.hasOwnProperty(data) && options[data]) {
            p += (p)
                ? '&' + data + '=' + encodeURIComponent(options[data])
                : data + '=' + encodeURIComponent(options[data]);
        }
        else {
            options[data] = '';
        }
    }

    if (!options.kinopoisk && !options.title && !options.imdb && !options.tmdb) {
        return false;
    }

    if (options.tv) {
        document.addEventListener('keydown', yo_ahoy_key);
    }

    if (options.resize) {
        window.addEventListener('orientationchange', yo_resize, false);
        window.addEventListener('resize', yo_resize, false);
    }

    var yohoho_loading = document.querySelector('#yohoho-loading');
    if (yohoho_loading) {
        yohoho_loading.parentNode.removeChild(yohoho_loading);
    }
    var yohoho_buttons = document.querySelector('#yohoho-buttons');
    if (yohoho_buttons) {
        yohoho_buttons.parentNode.removeChild(yohoho_buttons);
    }
    var yohoho_iframe = document.querySelector('#yohoho-iframe');
    if (yohoho_iframe) {
        yohoho_iframe.parentNode.removeChild(yohoho_iframe);
    }
    var data_ahoy = document.querySelectorAll('[data-ahoy]');
    for (var da in data_ahoy) {
        if (data_ahoy.hasOwnProperty(da) && data_ahoy[da]) {
            var yohoho_da = document.querySelector('#' + data_ahoy[da].getAttribute('data-ahoy'));
            if (yohoho_da) {
                yohoho_da.removeAttribute('style');
            }
        }
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var css = '#yohoho-loading{z-index:9999;position:absolute;left:0;top:0;width:100%;height:100%;background:#' + bg + ' url(' + options_loading + ') 50% 50% no-repeat}';
    s = document.createElement('style');
    s.type = 'text/css';
    if (s.styleSheet) {
        s.styleSheet.cssText = css;
    }
    else {
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);

    l = document.createElement('div');
    l.setAttribute('id', 'yohoho-loading');
    var searchItems = document.getElementsByClassName('search-line');
    for (var i = 0; i < searchItems.length; i++)
        searchItems[i].style.marginTop = "0%";
    yohoho.innerHTML = '';
    yohoho.appendChild(l);

    i = document.createElement('iframe');
    i.setAttribute('id', 'yohoho-iframe');
    i.setAttribute('frameborder', '0');
    i.setAttribute('allowfullscreen', 'allowfullscreen');
    yohoho.appendChild(i);

    if (parseInt(yohoho.offsetWidth)) {
        w = parseInt(yohoho.offsetWidth);
    }
    else if (yohoho.parentNode && parseInt(yohoho.parentNode.offsetWidth)) {
        w = parseInt(yohoho.parentNode.offsetWidth);
    }
    else {
        w = 610;
    }

    if (yohoho.parentNode && yohoho.parentNode.tagName && yohoho.parentNode.tagName.toLowerCase() === 'body') {
        h = Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    }
    else if (parseInt(yohoho.offsetHeight) && parseInt(yohoho.offsetHeight) < 370) {
        if (yohoho.parentNode && parseInt(yohoho.parentNode.offsetHeight) && parseInt(yohoho.parentNode.offsetHeight) >= 370) {
            h = parseInt(yohoho.parentNode.offsetHeight);
        }
        else {
            h = 370;
        }
    }
    else if (parseInt(yohoho.offsetHeight) && w / 3 < parseInt(yohoho.offsetHeight)) {
        h = parseInt(yohoho.offsetHeight);
    }
    else if (yohoho.parentNode && parseInt(yohoho.parentNode.offsetHeight) && w / 3 < parseInt(yohoho.parentNode.offsetHeight)) {
        h = parseInt(yohoho.parentNode.offsetHeight);
    }
    else {
        h = w / 2;
    }

    var style = 'width:' + w + 'px;height:' + h + 'px;border:0;margin:0;padding:0;overflow:hidden;position:relative';
    i.setAttribute('style', style);
    i.setAttribute('width', w);
    i.setAttribute('height', h);
    yohoho.setAttribute('style', style);

    yo_get(options_url, p,
        function (players) {
            var first = true;
            var buttons = document.createElement('select');
            buttons.setAttribute('id', 'yohoho-buttons');
            buttons.setAttribute('onchange', "player_selector(this.options[this.selectedIndex].getAttribute('player'));");

            var keys = options.player.split(options.separator);
            if (/\/\/|%2F%2F/i.test(options.player)) {
                var p = [];
                for (var k = 0; k < keys.length; k++) {
                    var re = keys[k].match(/^(.*?)(http.*|\/\/.*)$/i);
                    if (!re || !re[1] || !re[1].trim()) continue;
                    p.push(re[1].trim());
                }
                if (p.length) {
                    keys = p;
                } else {
                    var yo_res = Object.keys(players);
                    var yo_new = [];
                    for (var ps = 0; ps < keys.length; ps++) {
                        for (var pp = 0; pp < yo_res.length; pp++) {
                            if (keys[ps].toLowerCase().indexOf(yo_res[pp].toLowerCase()) + 1) {
                                yo_new.push(yo_res[pp]);
                            }
                        }
                    }
                    keys = yo_new;
                }
            }
            var j = 0;
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i].toLowerCase().trim();
                if (players.hasOwnProperty(key) && players[key] && players[key].iframe) {
                    players[key].quality = (players[key].quality)
                        ? players[key].quality.replace(/"/g, '\'')
                        : '';
                    players[key].translate = (players[key].translate)
                        ? players[key].translate.replace(/"/g, '\'')
                        : '';
                    var option = document.createElement('option');
                    option.setAttribute('player', 'yo_player("' + encodeURIComponent(players[key].iframe) + '", "' + players[key].quality + '", "' + players[key].translate + '", this, "' + options.button_size + '")');
                    option.dataset.event = '' + (j + 1);
                    option.dataset.page = Math.ceil((j + 1) / options.button_limit) + '';
                    option.dataset.iframe = players[key].iframe;
                    option.dataset.quality = players[key].quality;
                    option.dataset.translate = players[key].translate;
                    j++;
                    option.innerText ='Источник: ' + players[key].translate.toUpperCase();
                    if (first) {
                        yo_player(players[key].iframe, players[key].quality, players[key].translate, option, buttons, options.button_size);
                        first = false;
                    }
                    buttons.appendChild(option);
                }
            }
            if (j < 1) {
                var yohohoLoading = document.querySelector('#yohoho-loading');
                yohohoLoading.style.display = 'none';
                for (var i = 0; i < searchItems.length; i++)
                    searchItems[i].style.marginTop = "10%";
            }
            else if (j > 1) {
                for (var i = 0; i < searchItems.length; i++)
                    searchItems[i].style.marginTop = "0%";
                document.querySelector('#player-selector').appendChild(buttons);
                if (keys.length > options.button_limit) {
                    yo_page(1, options.button_size);
                }
            }
        });

}

function yo_player(iframe, quality, translate, element, buttons, size) {
    window.parent.postMessage({ "quality": quality, "translate": translate }, "*");
    var yohohoLoading = document.querySelector('#yohoho-loading');
    yohohoLoading.style.display = 'block';
    // setTimeout(function () {
    //     yohohoLoading.style.display = 'none';
    // }, 2000);
    var yohohoIframe = document.querySelector('#yohoho-iframe');
    yohohoIframe.onload = function () {
        yohohoLoading.style.display = 'none';
    };
    yohohoIframe.style.display = 'block';
    if (iframe.indexOf('4h0y') + 1) {
        yo_get(decodeURIComponent(iframe), '', function (json, html) {
            yohohoIframe.setAttribute('src', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
        });
    } else {
        yohohoIframe.setAttribute('src', decodeURIComponent(iframe));
    }
    yohohoIframe.setAttribute('class', '');
    if (typeof element.setAttribute === 'function') {
        var yohohoActive = document.querySelectorAll('.yohoho-active');
        if (yohohoActive) {
            for (var i = 0; i < yohohoActive.length; i++) {
                yohohoActive[i].setAttribute('class', '');
            }
        }
        element.setAttribute('class', 'yohoho-active');
    }
}

function yo_page(page, size) {
    var yohohoPages = document.querySelectorAll('div[data-page]');
    if (yohohoPages) {
        for (var i = 0; i < yohohoPages.length; i++) {
            yohohoPages[i].style.display = 'none';
        }
    }
    var yohohoPage = document.querySelectorAll('div[data-page="' + page + '"]');
    if (yohohoPage) {
        for (var j = 0; j < yohohoPage.length; j++) {
            yohohoPage[j].style.display = 'block';
        }
    }
}

function yo_get(url, body, callback) {
    var YoXmlHttp = new XMLHttpRequest();
    YoXmlHttp.onreadystatechange = function () {
        if (YoXmlHttp.readyState === 4) {
            if (YoXmlHttp.status === 200) {
                callback(yo_json(YoXmlHttp.responseText), YoXmlHttp.responseText);
                console.log("YoXmlHttp.responseText " + YoXmlHttp.responseText)
                if(YoXmlHttp.responseText == "{}") {
                    console.log("YoXmlHttp.responseText == ")
                    var x = document.getElementById("snackbar");
                    x.className = "show";
                }
            }
            else {
                callback({}, '');
                if(YoXmlHttp.status == 403) {
                    var x = document.getElementById("snackbar_cp");
                    x.className = "show";
                } else {
                    var x = document.getElementById("error");
                    x.className = "show";
                }
            }
        }
    };
    YoXmlHttp.open('POST', url, true);
    YoXmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    YoXmlHttp.send(body);
}

function yo_get_players_list() {
    var static_list = 'hdrezkauhd0,hdrezkauhd1,hdrezkauhd2,hdrezkauhd3,hdrezkauhd4,hdrezkauhd5,hdrezkauhd6,hdrezkauhd7,hdrezkauhd8,hdrezka,fancdn,alloha,collaps,videocdn,hdvb,bazon,ustore,iframe,pleer,zetflix,kodik,kodik1,kodik2,kodik3,kodik4,kodik5,kodik6,kodik7,kodik8,kodik9,kodik10,kodik11,kodik12,kodik13,kodik14,kodik15,kodik16,kodik17,kodik18,kodik19,kodik20,kodik21,kodik22,kodik23,kodik24,kodik25,kodik26,kodik27,kodik28,kodik29,kodik30,kodik31,kodik32,kodik33,kodik34,kodik35,kodik36,kodik37,kodik38,kodik39,kodik40,kodik41,kodik42,kodik43,kodik44,kodik45,kodik46,kodik47,kodik48,kodik49,kodik50,linktodo,svetacdn';
    var xmlHttp = new XMLHttpRequest();
    try {
        xmlHttp.open("GET", "https://reyohoho.space:4435/get_pl_list_1", false);
        xmlHttp.send(null);
        if (xmlHttp.status == 200) {
            return xmlHttp.responseText;
        } else {
            return static_list;
        }
    } catch (e) {
        console.log(e);
        return static_list;
    }
}

function yo_json(jsonString) {
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) {
        console.log("Error parse result: " + e)
    }
    return {};
}

function yo_fullscreen() {
    var isInFullScreen = (document.fullscreenElement) ||
        (document.webkitFullscreenElement) ||
        (document.mozFullScreenElement) ||
        (document.msFullscreenElement);

    var iframe = document.querySelector('#yohoho-iframe');
    if (!isInFullScreen) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullScreen) {
            iframe.webkitRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function yo_resize() {
    var yi = document.querySelector('#yohoho-iframe');
    if (!yi || !yi.parentNode || !yi.parentNode.parentNode || !yi.parentNode.parentNode.offsetWidth) return;
    var w = parseInt(yi.parentNode.parentNode.offsetWidth);
    yi.style.width = w + 'px';
    yi.setAttribute('width', w.toString());
    yi.parentNode.style.width = w + 'px';
}

(function () {
    var a = document.querySelectorAll('[data-ahoy]');
    if (a && a.length) {
        for (var i in a) {
            if (a.hasOwnProperty(i) && a[i]) {
                a[i].addEventListener('click', function () {
                    yo(this);
                });
            }
        }
    }
    else {
        yo();
    }
})();
