#!/Users/osakiyutaka/.pyenv/shims/python
# -*- coding: utf-8 -*-
#ログイン処理

import cgi
import codecs
import cgitb
cgitb.enable()

print("Content-Type: text/html")
print()

form = cgi.FieldStorage()
id = form["ID"].value
Pass = form["password"].value

id = list(id)
common_pass = 'futaba'
pass_1 = ''.join([id[0],id[1],common_pass,id[2],id[6],id[7]])

if Pass == pass_1:
  html = codecs.open('../html/logintop/TOPpage.html', 'r', 'utf-8').read()
else:
  html = codecs.open('../html/logintop/login', 'r', 'utf-8').read()

  print("")
  print(html)