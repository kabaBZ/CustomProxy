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
                console.log("方法:", "set  ", "对象:", "${proxy_array[i]}" ,"  属性:", property, "  属性类型:", typeof property, "  属性值类型:", typeof target[property]); \
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
window.setInterval = _nullfunc;
window.setTimeout = _nullfunc;
navigator = {}
screen = {}
localStorage = {}
location = {}
history = {}
document = {};

get_enviroment(proxy_array)