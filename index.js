/* Simple yet super secure password generator API & bookmarklet
   No tracking, no databases, or any crap like that, so your passwords are 100% secure
*/

/* Api has been deprecated due to security measures. None of         the generating is server-side anymore.
*/


const app = require('express')()
app.use((req,res) => {
console.log(req.headers)
   if (req.path == '/terminal.css' && req.header('sec-fetch-dest') == 'style') {
    res.sendFile(`${__dirname}/terminal.css`)
  }
  else if (req.path == '/main.css' && req.header('sec-fetch-dest') == 'style') {
    res.sendFile(`${__dirname}/main.css`)
  }
  else if (req.path === '/terminal'){
    res.render('terminal.ejs')
  }
  else if (req.path == '/img.png' && req.header('sec-fetch-dest') == 'image') {
    res.sendFile(`${__dirname}/img.png`)
  }
  else if (req.path == '/embed.js') {
    res.sendFile(`${__dirname}/embed.js`)
  }
  else if (req.path == '/embed') {
    res.render('embed.ejs')
  }
  else if (req.path == '/embed/images/embedexample.png') {
    res.sendFile(`${__dirname}/embedexample.png`)
  }
  else if (req.path == '/why') {
    res.render('why.ejs')
  }
  else if (req.header('sec-fetch-dest') == 'iframe') {
    res.render('iframe.ejs')
  }
  else {
    res.render('index.ejs')
  }
})

app.listen(3000)