var getParent = document.currentScript;
var spgFrame = document.createElement("iframe");
spgFrame.setAttribute("src", "https://spg.ar-dev.cf");
spgFrame.style.width = "400px";
spgFrame.style.height = "260px";
spgFrame.style.borderStyle = "solid";
spgFrame.style.border = "none" // change the value to "0.1px solid black" if you want a border here
spgFrame.style.borderColor = "black"
spgFrame.style.borderRadius = "7px";
getParent.parentNode.insertBefore(spgFrame, getParent);