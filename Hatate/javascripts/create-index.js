/// <reference path="jquery-1.11.1.min.js"/>
$(document).ready(function () {

    var $index = $("#index").children();
    if ($index.length == 0) return;
    var $span = $("<span>").addClass("octicon octicon-link");

    var add = function (i, $li, i2) {
        var $a = $li.find("a").first();
        var href = $a.attr("href")
        if (!href) return true;

        var $div = $(href);

        $h = !i2 ? $("<h3>") : $("<h4>");

        var title = !i2 ? (i + 1) + "." + $a.text()
                        : (i + 1) + "-" + i2 + "." + $a.text();

        var name = href.replace("#", "");

        var $anchor = $("<a>").attr({ name: name, href: href }).addClass("anchor");
        $anchor.add($span);

        $h.add($anchor).text(title);

        $div.prepend($h);

        $div.find("p").css("margin-left", "1em");

        if (i2) {
            $div.css("margin-left", "1em");
        }
    };

    $index.each(function (i, li) {
        var $li = $(li);

        var $innerOl = $li.find("ol");
        if ($innerOl.length != 0) {
            $innerOl.find("li").each(function (i2, li2) {
                add(i, $(li2), i2 + 1);
            });
        }

        add(i, $li);
    });

}); 