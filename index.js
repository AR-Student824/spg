/* Simple yet super secure password generator API & bookmarklet
No tracking, no databases, or any crap like that, so your passwords are 100% secure
*/
const app = require('express')()
function gen(l = 30) {
    let x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/\\^%$+-=()&.;:\'"?@!{}|#@1234567890';
    let str = '';
    for (let i = 0; i < l; i++) {
        str += x.charAt(Math.floor(Math.random() * x.length));
    }
    return str;
};

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
  else if (!req.query.length && req.path.startsWith('/api')) {
    res.send({password: gen()})
  }
  else if (req.path.startsWith('/api')) {
    res.send({password: gen(req.query.length)})
  }
  else if (req.path === '/terminal'){
    res.send(`<head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Simple Password Generator</title><link href="/terminal.css" rel="stylesheet"/></head><body><br /><p>$desktop spg gen</p><p style="color:green;">Generation success!</p><p><b>${gen()}</b></p><a href="javascript:eval(atob('bG9jYXRpb24ucmVsb2FkKCk='))">Generate new</a> | <a href="javascript:eval(atob('d2luZG93LmxvY2F0aW9uLmhyZWYgPSAiL2FwaSI7'))">API</a> | <a href="javascript:eval(atob('KGZ1bmN0aW9uKCl7ZmV0Y2goJy8vcGFzc3dvcmRnZW5hcGkuaGlqc2dlaXByeWdmaXJoLnJlcGwuY28vdGV4dCcpLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odmFsID0+IHthbGVydChgR2VuZXJhdGVkIHBhc3N3b3JkIVxuJHt2YWx9YCl9KS5jYXRjaChlcnI9PnthbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmchXG5TcGVjaWZpY2FsbHk6ICcgKyBlcnIpfSl9KSgpOw=='))">SPG Bookmarklet</a><br /><br /><div class="comment"># Drag the bookmarklet link to your bookmarks folder & click it everytime you want to quickly generate a password. Works on most sites.</div><br /><div class="comment"># To adjust the max length of the output from the API, use the parameter <i>?length=(number here without brackets)</i> (Default = 30). If you prefer a text response over JSON, use the <i>/text</i> endpoint instead of <i>/api</i>.</div><p class="endCmd"></p><br /><p><sup><i>Simple Password Generator v1 | This is a simple simulated terminal with CSS &amp; JavaScript.</i></sup></p><script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script><script>var typed = new Typed('.endCmd', {strings: ['$desktop spg conclusion<br/><br/>Thanks for using Simple Password Generator!<br />Github: Soon<br />We do not track you or store generated passwords in anyway, it is just a simple JavaScript script. Your data is 100% secure &amp; this project is open source.']})</script></body>`)
  }
  else {
    res.render('index.ejs', {
      pw: gen()
    })
  }
})

app.listen(3000)