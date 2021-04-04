(function() {
    fetch('//passwordgenapi.hijsgeiprygfirh.repl.co/text').then(res => res.text()).then(val => {
        alert(`Generated password!\n${val}`)
    }).catch(err => {
        alert('Something went wrong!\nSpecifically: ' + err)
    })
})();