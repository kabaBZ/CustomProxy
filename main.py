import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
# 修改编码方式,window默认编码是gbk,Mac和Linux 默认是uft-8
import execjs


def run_js_function(js_file_path, function_name, args=None):
    with open(js_file_path, "r", encoding="utf-8") as f:
        js_code = f.read()
    ctx = execjs.compile(js_code)
    if not args:
        return ctx.call(function_name)
    elif isinstance(args, tuple):
        return ctx.call(function_name, *args)
    else:
        return ctx.call(function_name, args)
