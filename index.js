/* Simple yet super secure password generator API & bookmarklet
   No tracking, no databases, or any crap like that, so your passwords are 100% secure
*/

/* Api has been deprecated due to security measures. None of         the generating is server-side anymore.
*/


const app = require('express')()
app.use((req,res) => {
  res.header('Access-Control-Allow-Origin', '*')
  if (req.path == '/text') {
    var pw = gen()
    res.send(pw)
  } 
  else if (req.path == '/terminal.css') {
    res.sendFile(`${__dirname}/terminal.css`)
  }
  else if (req.path == '/main.css') {
    res.sendFile(`${__dirname}/main.css`)
  }
  else if (req.path === '/terminal'){
    res.render('terminal.ejs')
  }
  else {
    res.render('index.ejs')
  }
})

app.listen(3000)