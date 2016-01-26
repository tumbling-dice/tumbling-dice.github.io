(function () {
    typeof (require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        var dataType = 'UInt8 UInt16 UInt32 UInt64 Int8 Int16 Int32 Int64 UInt Int ' +
                       'Double Float String Character Bool Array Dictionary Any AnyObject '
        ;
        var keywords = 'let var typealias if else for in _ while do switch case default ' +
                        'where continue break fallthrough func return inout enum ' +
                        'class struct get set willSet didSet static self super mutating init ' +
                        'subscript override convenience deinit weak unowned as protocol extension operator ' +
                        'is true false '
                        ;

        var r = SyntaxHighlighter.regexLib;

        this.regexList = [
            { regex: r.multiLineDoubleQuotedString, css: 'string' },            // double quoted strings
            {regex: r.multiLineSingleQuotedString, css: 'string' },            // single quoted strings
            {regex: r.singleLineCComments, css: 'comments' },          // one line comments
            {regex: r.multiLineCComments, css: 'comments' },          // multiline comments
            //{regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: 'value' },             // numbers
            {regex: new RegExp(this.getKeywords(dataType), 'gm'), css: 'dataType' },          // dataType
            {regex: new RegExp('@\\w+\\b', 'g'), css: 'color1' },           // attribute
            {regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword'}            // keywords
            ];

        this.forHtmlScript(r.scriptScriptTags);
    };

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['swift'];

    SyntaxHighlighter.brushes.Swift = Brush;

    // CommonJS
    typeof (exports) != 'undefined' ? exports.Brush = Brush : null;
})();