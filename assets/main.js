const toolBar = document.getElementById("tool-bar");

function changeTheme() {
    if (getTheme() == "light") {
        document.body.setAttribute("theme", "dark");
        return;
    }
    if (getTheme() == "dark") {
        document.body.setAttribute("theme", "light");
        return;
    }

    console.log(getTheme());
}

function getTheme() {
    return(document.body.getAttribute("theme"))
}