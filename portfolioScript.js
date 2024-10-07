function alertOnSubmit() {
    alert("Your message has been sent. You will receive a response from grabermn3@gmail.com in 1-2 business days. Thank you for your time.");
}
function checkInputName(checkedINelement) {
    const validCharacters = /.{3,}/i;
    if (!(validCharacters.test(checkedINelement.value))) {
        checkedINelement.value = "";
    }
}
function checkInputPhoneNumber(checkedPNelement) {
    const validCharacters = /[0-9]{10}/i;
    if ((!(validCharacters.test(checkedPNelement.value))) || (checkedPNelement.value.length != 10)) {
        checkedPNelement.value = "";
    }
}
function checkInputEmailAddress(checkedEAelement) {
    const validCharacters = /[A-Za-z0-9._%+\-]{1,}@[A-Za-z0-9._%+\-]{1,}\.[a-z]{2,}$/i;
    if ((!(validCharacters.test(checkedEAelement.value)))) {
        checkedEAelement.value = "";
    }
}
function checkInputMessage(checkedMelement) {
    const validCharacters = /.{8,}/i;
    if (!(validCharacters.test(checkedMelement.value))) {
        checkedMelement.value = "";
    }
}
function project1Linked() {
    document.getElementById("Project1Image").style.borderColor = "aqua";
}
function project1Restored() {
    document.getElementById("Project1Image").style.borderColor = "white";
}
function facebookHover() {
    document.getElementById("Facebook").style.marginBottom = "-60px";
    document.getElementById("Copyright").style.marginBottom = "50px";
}
function facebookLeave() {
    document.getElementById("Facebook").style.marginBottom = "-70px";
    document.getElementById("Copyright").style.marginBottom = "60px";
}
function instaHover() {
    document.getElementById("Insta").style.marginBottom = "-60px";
    document.getElementById("Copyright").style.marginBottom = "50px";
}
function instaLeave() {
    document.getElementById("Insta").style.marginBottom = "-70px";
    document.getElementById("Copyright").style.marginBottom = "60px";
}
function linkedinHover() {
    document.getElementById("Linkedin").style.marginBottom = "-60px";
    document.getElementById("Copyright").style.marginBottom = "50px";
}
function linkedinLeave() {
    document.getElementById("Linkedin").style.marginBottom = "-70px";
    document.getElementById("Copyright").style.marginBottom = "60px";
}
function onLoadFunctions() {
    greetingLangCycle();
    setInterval(greetingLangCycle, 18000);
    activitiesLangCycle();
    setInterval(activitiesLangCycle, 36000);
    underlineCurrentSection();
}
function greetingLangCycle() {
    setTimeout(greetingLangChange1, 3000);
    setTimeout(greetingLangChange2, 6000);
    setTimeout(greetingLangChange3, 9000);
    setTimeout(greetingLangChange4, 12000);
    setTimeout(greetingLangChange5, 15000);
    setTimeout(greetingLangChange6, 18000);
}
function greetingLangChange1() {
    document.getElementById("Greeting").innerHTML = "Hola!";
}
function greetingLangChange2() {
    document.getElementById("Greeting").innerHTML = "Bonjour!";
}
function greetingLangChange3() {
    document.getElementById("Greeting").innerHTML = "Ciao!";
}
function greetingLangChange4() {
    document.getElementById("Greeting").innerHTML = "Hallo!";
}
function greetingLangChange5() {
    document.getElementById("Greeting").innerHTML = "Olá!";
}
function greetingLangChange6() {
    document.getElementById("Greeting").innerHTML = "Hello!";
}
function activitiesLangCycle() {
    setTimeout(activitiesLangChange1, 6000);
    setTimeout(activitiesLangChange2, 12000);
    setTimeout(activitiesLangChange3, 18000);
    setTimeout(activitiesLangChange4, 24000);
    setTimeout(activitiesLangChange5, 30000);
    setTimeout(activitiesLangChange6, 36000);
}
function activitiesLangChange1() {
    document.getElementById("Activities").innerHTML = "Avid Learner.";
}
function activitiesLangChange2() {
    document.getElementById("Activities").innerHTML = "Team Player.";
}
function activitiesLangChange3() {
    document.getElementById("Activities").innerHTML = "AI Enthusiast.";
}
function activitiesLangChange4() {
    document.getElementById("Activities").innerHTML = "Dog Lover.";
}
function activitiesLangChange5() {
    document.getElementById("Activities").innerHTML = "Hard Worker.";
}
function activitiesLangChange6() {
    document.getElementById("Activities").innerHTML = "Comp Sci Major.";
}
function underlineCurrentSection() {
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const headerButtons = document.getElementsByClassName("HeaderButton");
        for (let i = 0; i < headerButtons.length; i++) {
            headerButtons[i].style.textDecorationLine = "none";
        }
        if (scrollTop >= 0 && scrollTop <= 325) {
            underlineSection("ActualHomeButton");
        }
        else if (scrollTop > 325 && scrollTop <= 710) {
            underlineSection("ActualAboutButton");
        }
        else if (scrollTop > 710 && scrollTop <= 1448) {
            underlineSection("ActualProjectsButton");
        }
        else if (scrollTop > 1448 && scrollTop <= 1830) {
            underlineSection("ActualSkillsButton");
        }
        else if (scrollTop > 1830) {
            underlineSection("ActualContactMeButton");
        }
    });
}
function underlineSection(sectionName) {
    document.getElementById(sectionName).style.textDecorationLine = "underline";
    document.getElementById(sectionName).style.textDecorationColor = "white";
    document.getElementById(sectionName).style.textDecorationThickness = "4px";
}