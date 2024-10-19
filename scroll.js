// scroll fade in animations
document.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (inView(document.getElementById(section))) {
            document.getElementById(section).classList.add("SectionVisible");
        } else {
            document.getElementById(section).classList.remove("SectionVisible");
        }
    });
});

function inView(section) {
    let rect = section.getBoundingClientRect();
    if (rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150) && rect.bottom > 0) {
        return true;
    } else {
        return false;
    }
}