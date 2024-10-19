var sections =  ['aboutsection', 'projectsection', 'educationsection', 'contactsection'];
var buttons = ['aboutbutton', 'projectbutton', 'educationbutton', 'contactbutton'];

buttons.forEach(button => {
    document.getElementById(button).addEventListener('mouseover', () => {
        sections.forEach(section => {
            if (section.substring(0, 5) === button.substring(0, 5)) {
                document.getElementById(section).scrollIntoView({
                    behavior: 'smooth'
                })
                document.getElementById(section).style.scrollMarginTop = "70px";
            }
        });
    });
});
