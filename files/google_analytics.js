//dns_qc = "!!";	// 阻擋被植入的廣告
//(function (i, s, o, g, r, a, m) {
//    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
//        (i[r].q = i[r].q || []).push(arguments)
//    }, i[r].l = 1 * new Date(); a = s.createElement(o),
//    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
//})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

//ga('create', 'UA-30929682-1', 'cmoney.tw');
//ga('create', 'UA-30929682-9', 'auto', { 'name': 'vt' });  // New tracker.
//ga('send', 'pageview');
//ga('vt.send', 'pageview', location.pathname + location.search + location.hash);


function sendGaEvent(type, action, tag) {
    //window.ga('send', 'event', type, action, tag);
}

function VirtualPageGA(hashValue) {
    //if (hashValue == null) {
    //    hashValue = location.hash;
    //}
    //window.ga('vt.send', 'pageview', location.pathname + location.search + hashValue);
}


function FancyPageGA(actionValue) {
    //window.ga('vt.send', 'pageview', location.pathname + location.search + '?act=' + actionValue);
}