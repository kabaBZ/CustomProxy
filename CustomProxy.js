// 补proxy
function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = `{ \
            get: function(target, property, receiver) { \
                if (property === "Math" || property === "Uint8Array" || property === "encodeURI" || property === "isNaN" ) {}
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

proxy_array = ['window', 'localStorage', 'document', 'location', 'navigator', 'history', 'screen', 'aaa', 'target', 'canvas', 'documentElement']
_log = console.log
_nullfunc = function () {}

window = global;
delete global;
delete Buffer;
delete __filename;
delete __dirname;
delete navigator;
window.setInterval = _nullfunc;
window.setTimeout = _nullfunc;
var Window = function Window(){}
window.__proto__ = Window.prototype

navigator = {}
var Navigator = function Navigator(){};
navigator.__proto__ = Navigator.prototype

screen = {}
var Screen = function Screen(){}
screen.__proto__ = Screen.prototype

localStorage = {}
var LocalStorage = function LocalStorage(){};
localStorage.__proto__ = LocalStorage.prototype

location = {}
var Location = function Location(){}
location.__proto__ = Location.prototype

history = {}
var History = function History(){}
history.__proto__ = History.prototype

document = {};
var Document = function Document(){};
document.__proto__ = Document.prototype

get_enviroment(proxy_array)