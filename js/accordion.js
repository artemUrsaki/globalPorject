var accord = document.getElementsByClassName("acc-item");

for (i of accord) {
    i.addEventListener("click", function(){
        this.classList.toggle("active");
    })
}