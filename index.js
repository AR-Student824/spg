/* Simple yet super secure password generator API & bookmarklet
   No tracking, no databases, or any crap like that, so your passwords are 100% secure
*/

/* Api has been deprecated due to security measures. None of         the generating is server-side anymore.
*/


const app = require('express')()
app.use((req,res) => {
  res.header('Access-Control-Allow-Origin', '*')
  if (req.path == '/text') {
    var pw = 'SPG Bookmarklet v1 is now deprecated! Please get the new version from spg.ar-dev.cf!'
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
  else if (req.path == '/img.png') {
    res.sendFile(`${__dirname}/img.png`)
  }
  else {
    res.render('index.ejs')
  }
})

app.listen(3000)