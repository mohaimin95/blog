export default {
    baseBlogUrl: `https://public-api.wordpress.com/rest/v1/sites/namccreativelights.wordpress.com/posts`,
    stripHTML: (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    },
    changeFormat: (date) => {
        let d = new Date(date);
        let months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    },
    getPostPath: (title, id) => {
        return `/${title}/${id}`.toLowerCase().replace(/[^a-z0-9 /]/gi, '').replace(/ /gi, "-");
    },
    refreshDarkModeSettings: () => {
        if(typeof localStorage!=="undefined") {
            let isDarkMode = (localStorage.getItem('isDarkMode') === "true");
            let body = document.querySelector('body');
            if (isDarkMode) {
                body.style.setProperty("--primary-background", "#212026");
                body.style.setProperty("--text-color", "#fff");
            } else {
                body.style.setProperty("--primary-background", "#fff");
                body.style.setProperty("--text-color", "#000");
            }

        }
        return;
    }
}