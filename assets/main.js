const main = document.getElementById("content");

WelcomeText();

function WelcomeText() {
    const text = `
    _ Loading, please wait...

    [ 2.20160524] sd 0:0:0:0:0ddbu22 [Ded] Assuming drive cache: write through
    Valid path for Logical Volume.

    /lib/player: clean, 1704684/10121989 files, 3813438/7532544 blocks
    Started:    Attempting to mount Dedware fuse mount.
    See "systemctl status: "runDedware//fuse""
    `

    main.innerHTML = text;
}