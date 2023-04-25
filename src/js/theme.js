const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log("systemThem:" + systemTheme);
const sunIcon = document.querySelector(".sun");
console.log("sunIcon:" + sunIcon);
const moonIcon = document.querySelector(".moon");
console.log("moonIcon:" + moonIcon);
const userTheme = localStorage.getItem("theme");
console.log("userTheme:" + userTheme);
const themeSwitcherBtns = document.querySelectorAll(".theme-switcher");
console.log("themeSwitcherBtns:" + themeSwitcherBtns);


function iconSwitch(theme) {
    if (theme = "dark") {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    } else if (theme = "light") {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    }
}

themeSwitcherBtns.forEach(item => {
    console.log(item);
    item.addEventListener("click", (e) => {
        const theme = e.target.dataset.theme;
        console.log(theme);
        switch (theme) {
            case "light": {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                iconSwitch("light");
                break;
            }
            case "dark": {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                iconSwitch("dark");
                break;
            }
            case "system": {
                localStorage.removeItem("theme");
                if (systemTheme === "dark") {
                    document.documentElement.classList.add("dark");
                    iconSwitch("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                    iconSwitch("light");
                }
                break;
            }
        }
    })
})