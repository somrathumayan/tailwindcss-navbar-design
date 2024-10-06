let ham_icon = document.getElementById("ham_icon");
let main_menu = document.getElementById("main_menu");

ham_icon.addEventListener("click", ()=>{
    main_menu.classList.toggle("hidden");
})