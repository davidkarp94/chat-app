const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button"),
usersList = document.querySelector(".users .users-list");

searchBtn.onclick = () => {
    searchBar.classList.toggle("show");
    searchBtn.classList.toggle("active");
    searchBar.focus();
    if(searchBtn.classList.contains("active")) {
        searchBar.value = "";
        searchBtn.classList.remove("active");
    }
}

searchBar.onkeyup = () => {
    let searchTerm = searchBar.value;

    if(searchTerm != "") {
        searchBar.classList.add('show');
    } else {
        searchBar.classList.remove('show');
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/search.php", true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                usersList.innerHTML = data;
            }
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + searchTerm);
}
setInterval(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "php/user.php", true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                if (!searchBar.classList.contains('show')) {
                    usersList.innerHTML = data;
                }
            }
        }
    }
    xhr.send();
}, 500);