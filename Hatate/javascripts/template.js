/// <reference path="marked.min.js"/>
/// <reference path="vue.js"/>
/// <reference path="jquery-1.11.1.min.js"/>

$(document).ready(function () {
    var query = window.location.search;
    query = query.substr(1, query.length);

    var queryItems = query.split("&");

    var fileName;

    for (var i = 0, length = queryItems.length; i < length; i++) {
        var item = queryItems[i].split("=");
        var key = item[0];

        if (key == "md") {
            fileName = item[1] ? window.decodeURIComponent(item[1]) : undefined;
            break;
        }
    }

    $.ajax({
        url: "./" + fileName + ".md"
    }).success(function (data) {

        var renderer = new marked.Renderer();

        var idx;
        renderer.html = function (html) {
            if (html.indexOf("<note>") != -1) {
                return "<div class=\"note\">Note\n:"
                        + marked(html.replace("<note>", "").replace("</note>", ""))
                        + "</div>";
            } else if (html.indexOf("<index>") != -1) {
                idx = marked(html.replace("<index>", "").replace("</index>", ""));
                return "";
            }

            return html;
        };

        var lastUpdate;
        var indexes = {};

        renderer.link = function (href, title, text) {
            if (text == "LastUpdate") {
                lastUpdate = href;
                return "";
            }

            if (href.substr(0, 1) == "#") {
                indexes[href] = text;
            }

            var out = "<a href=\"" + href + " \"";
            if(title) {
                out += " title=\"" + title + "\"";
            }
            
            out += ">" + text + "</a>"

            return out;
        };

        var projectTagline;

        renderer.heading = function (text, level) {
            switch (level) {
                case 1:
                    projectTagline = text;
                    return "";
                case 2:
                case 3:
                    var hash = "#" + text;
                    if (indexes[hash]) {
                        var idxTitle = indexes[hash];

                        var $header = "<h" + (level + 1) + ">";
                        $header = $header + "<a name=\"" + text + "\" href=\"" + hash + "\" class=\"anchor\">"
                                          + "<span class=\"octicon octicon-link\"></span></a>"
                                          + idxTitle
                                          + "</h" + (length + 1) + ">";

                        return $header;
                    }

                    return "<h" + level + ">" + text + "</h" + level + ">";

                default:
                    return "<h" + level + ">" + text + "</h" + level + ">";

            }
        };

        renderer.paragraph = function (text) {
            return "<p style=\"margin-left:1em;\">" + text + "</p>";
        };

        marked(data, { renderer: renderer }, function (err, content) {
            new Vue({
                el: "html",
                data: {
                    title: projectTagline,
                    index: idx,
                    content: content,
                    lastUpdate: lastUpdate
                }
            });
        });


    });


});
