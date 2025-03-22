function onClick(newContent, btnID) {
    document.getElementById("content").src = newContent;

    setSelectedBtn(btnID);
}

var btnIsSelected = null;
function setSelectedBtn(btnID) {
    var underline = document.getElementById("ul");
    var btn = document.getElementById(btnID);

    if (btn != null) {
        btn.className = "btn_select";
    
        //make underline visable
        underline.style.visibility = "visible";
        //move underline under button
        underline.style.left = (btn.getBoundingClientRect().x - 16) + 'px';
        //udjust underline width    
        underline.style.width = btn.offsetWidth + 'px';
    
        if(btnID != btnIsSelected && btnIsSelected != null) {
            document.getElementById(btnIsSelected).className = "btn_unselect";
        }
    
        btnIsSelected = btnID;
    }
}

function onHover(btn) {
    if(btn.id != btnIsSelected) {
        btn.className = "btn_hover";
    }
}

function onOut(btn) {
    if(btn.id != btnIsSelected) {
        btn.className = "btn";
    }
}

var lastPath = null;
function oniframeLoad(iframeID) {
    var relPath = document.getElementById(iframeID).contentDocument.location.href.split("/").pop();
    var btnID = relPath.split(".")[0];

    if (relPath != lastPath && lastPath != null) {
        setSelectedBtn(btnID);
    }

    lastPath = relPath;
}
