// 补proxy
function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = `{ \
            get: function(target, property, receiver) { \
                if (property === "NodeList" || property === "SVGPointList" || property === "CSSRuleList" || property === "SVGUnitTypes" || property === "Attr" || property === "Window" || property === "JSON" || property === "hasOwnProperty" || property === "Performance" || property === "URIError" || property === "UIEvent" || property === "Date" || property === "encodeURI" || property === "SVGException" || property === "Error" || property === "CSSMediaRule" || property === "DocumentType" || property === "StyleSheet" || property === "DOMParser"|| property === "Function" || property === "SVGTransform" || property === "DOMException" || property === "Location"|| property === "NamedNodeMap"   || property === "RegExp"  || property === "Math"  || property === "NodeIterator"  || property === "Debug"  || property === "Text" || property === "SVGAngle" || property === "Coordinates" || property === "StyleMedia" ) {}
                else {
                    console.log("方法:", "get  ", "对象:", "${proxy_array[i]}" ,"  属性:", property, "  属性类型:", typeof property, "  属性值类型:", typeof target[property]); \
                } \
                return target[property];\
            }, \
            set: function(target, property, value, receiver) { \
                console.log("方法:", "set  ", "对象:", "${proxy_array[i]}" ,"  属性:", property, "  属性类型:", typeof property, "  属性值类型:", typeof value); \
                return Reflect.set(...arguments); \
            } \
        }`
        eval('try{\n' + proxy_array[i] + ';\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

proxy_array = ['iframe', 'plugins', 'body', 'documentElement', 'window', 'localStorage', 'document', 'location', 'navigator', 'history', 'screen', 'aaa', 'target', 'canvas', 'documentElement']
_log = console.log
_nullfunc = function () {}

window = global;
delete global;
delete Buffer;
delete __filename;
delete __dirname;
delete navigator;
globalThis = window
window.screenTop = 0
window.screenLeft = 0
window.innerWidth = 1920
window.innerHeight = 911
window.outerWidth = 1920
window.outerHeight = 1032
window.setInterval = _nullfunc;
window.setTimeout = _nullfunc;
window.frames = window
window.top = window
window.parent = window
error = {}
window.SVGMatrix = function () {
    _log("调用SVGMatrix")
}
window.Node = function () {
    _log("调用Node")
}
window.PluginArray = function () {
    _log("调用PluginArray")
}
window.SVGUnitTypes = function () {
    _log("调用SVGUnitTypes")
}
window.SVGAngle = function () {
    _log("调用SVGAngle")
}
window.Option = function () {
    _log("调用Option")
}
window.Attr = function () {
    _log("调用Attr")
}
window.DOMParser = function () {
    _log("调用DOMParser")
}
window.CSSPageRule = function () {
    _log("调用CSSPageRule")
}
window.SVGException = function () {
    _log("调用SVGException")
}
window.UIEvent = function () {
    _log("调用UIEvent")
}
window.CSSRule = function () {
    _log("调用CSSRule, 参数：", arguments)
}
window.DocumentType = function () {
    _log("调用DocumentType")
}
window.SVGTransform = function () {
    _log("调用SVGTransform")
}
window.StyleSheet = function () {
    _log("调用StyleSheet")
}
window.Text = function () {
    _log("调用Text")
}
window.NamedNodeMap = function () {
    _log("调用NamedNodeMap")
}
window.NodeIterator = function () {
    _log("调用NodeIterator")
}
window.MediaError = function () {
    _log("调用MediaError")
}
window.SVGPointList = function () {
    _log("调用SVGPointList")
}
window.NodeList = function () {
    _log("调用NodeList")
}
window.TimeRanges = function () {
    _log("调用TimeRanges")
}
window.Image = function () {
    _log("调用Image")
}
window.SVGAElement = function () {
    _log("调用SVGAElement")
}
window.StorageEvent = function () {
    _log("调用StorageEvent")
}
window.Geolocation = function () {
    _log("调用Geolocation")
}
window.TextMetrics = function () {
    _log("调用TextMetrics")
}
window.CSSRuleList = function () {
    _log("调用CSSRuleList")
}
window.CSSMediaRule = function () {
    _log("调用CSSMediaRule")
}
window.URIError = function () {
    _log("调用URIError")
}

var Window = function Window(){}
window.__proto__ = Window.prototype
window.Window = Window

plugins = []
navigator = {}
var Navigator = function Navigator(){};
navigator.__proto__ = Navigator.prototype

screen = {
    availWidth: 1920,
    availHeight: 1032,
    width: 1920,
    height: 1080
}
var Screen = function Screen(){}
screen.__proto__ = Screen.prototype
window.Screen = Screen

localStorage = {}
var LocalStorage = function LocalStorage(){};
localStorage.__proto__ = LocalStorage.prototype

location = {

}
var Location = function Location(){}
location.__proto__ = Location.prototype
window.Location = Location

history = {}
var History = function History(){}
history.__proto__ = History.prototype
window.History = History
documentElement = {}
body = {}
iframe = {}
document = {
    documentElement: documentElement,
    body: body,
    createElement: function () {
        _log("调用document.createElement,参数：", arguments)
        if (arguments[0] == 'iframe') {
            return iframe
        }
    }
};
var Document = function Document(){};
document.__proto__ = Document.prototype
window.Document = Document

// 简单的去格式化检测
RegExp.prototype.test = function () { return true }

// tostring 相关
// Function.prototype.toString = function() {
//     return "function" == typeof this && this.__raven__ ? e._originalFunctionToString.apply(this.__orig__, arguments) : e._originalFunctionToString.apply(this, arguments)
// }
// window.constructor = 'function Window() { [native code] }';
// 检测调用toString
// (function () {
//     const tugo = Function.prototype.toString;
//     Object.defineProperty(Function.prototype, 'toString', {
//         get() {
//             const aa = tugo.apply(this);
//             console.log('检测到调用toString 方法');
//             debugger;
//             return aa;
//         }
//     });
// })();

get_enviroment(proxy_array)