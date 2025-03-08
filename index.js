var profileMenu = document.getElementById("Profile-menu");
var moreLink = document.getElementById("showMoreLink");
var sidebarActivity = document.getElementById("sidebarActivity");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}

function toggleActivity() {
    sidebarActivity.classList.toggle("open-activity");
    if(sidebarActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>";
    }else {
        moreLink.innerHTML = "Show More <b>+</b>";
    }
}