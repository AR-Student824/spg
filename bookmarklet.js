// v1 (This version may be logged by the host, Replit, as it fetches from serverside, not clientside. Only use this version if you are ok with the risks)
(function v1() {
    fetch('//passwordgenapi.hijsgeiprygfirh.repl.co/text').then(res => res.text()).then(val => {
        alert(`Generated password!\n${val}`)
    }).catch(err => {
        alert('Something went wrong!\nSpecifically: ' + err)
    })
});v1();

// v2 (Current version displayed on website and the "terminal". More secure than v1 as your browser is doing everything, not the api. This version is also more reliable as it'll work with sites that don't allow fetching from external sources via their client.)
(function() {
    function password(length = 30) {
    var buf = new Uint8Array(length);
    window.crypto.getRandomValues(buf);
    return btoa(String.fromCharCode.apply(null, buf)).replace(/\//g,'_').replace(/\+/g,'').replace(/\=/g,'').substring(0,length)
  }
alert(`Your secure password is: ${password()}`)
})();

// minified v2: 
!function(){alert(`Your secure password is: ${function(r=30){var e=new Uint8Array(r);return window.crypto.getRandomValues(e),btoa(String.fromCharCode.apply(null,e)).replace(/\//g,"_").replace(/\+/g,"").replace(/\=/g,"").substring(0,r)}()}`)}();

// minified + atob'd v2: 
eval(atob('IWZ1bmN0aW9uKCl7YWxlcnQoYFlvdXIgc2VjdXJlIHBhc3N3b3JkIGlzOiAke2Z1bmN0aW9uKHI9MzApe3ZhciBlPW5ldyBVaW50OEFycmF5KHIpO3JldHVybiB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhlKSxidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxlKSkucmVwbGFjZSgvXC8vZywiXyIpLnJlcGxhY2UoL1wrL2csIiIpLnJlcGxhY2UoL1w9L2csIiIpLnN1YnN0cmluZygwLHIpfSgpfWApfSgpOw==')) 

// ^ used in the actual bookmarklet