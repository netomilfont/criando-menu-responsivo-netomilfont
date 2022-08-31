class Navbar {

    static showNavbar () {
        const btnNavbar = document.querySelector("#btnNavbar")

        btnNavbar.addEventListener("click", () => {
            const navbar = document.querySelector(".container__nav")
            navbar.classList.toggle("active")
            if(navbar.classList.contains("active")) {
                btnNavbar.src = "src/assets/Frame 7.svg"
            } else {
                btnNavbar.src = "src/assets/Frame 6.svg"
            }
        })
    }

}
Navbar.showNavbar()