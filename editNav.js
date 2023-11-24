//Modify nav  - Add or remove class responsive to get style
function editNav() {
    if (x.classList.contains("topnav") || x.classList.contains("movil")) {
        if (!x.classList.contains("responsive")) {
            x.className += " responsive";
        } else {
            x.classList.remove("responsive");

        }
    }
}