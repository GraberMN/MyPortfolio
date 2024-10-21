function alertOnReturn() {
    if (document.referrer.includes("form")) {
        alert("Your message has been sent. You will receive a response from grabermn3@gmail.com in 1-2 business days. Thank you for your time.");
    }
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
    alertOnReturn();
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
    setTimeout(activitiesChange1, 6000);
    setTimeout(activitiesChange2, 12000);
    setTimeout(activitiesChange3, 18000);
    setTimeout(activitiesChange4, 24000);
    setTimeout(activitiesChange5, 30000);
    setTimeout(activitiesChange6, 36000);
}
function activitiesChange1() {
    document.getElementById("Activities").innerHTML = "Avid Learner.";
}
function activitiesChange2() {
    document.getElementById("Activities").innerHTML = "Team Player.";
}
function activitiesChange3() {
    document.getElementById("Activities").innerHTML = "AI Enthusiast.";
}
function activitiesChange4() {
    document.getElementById("Activities").innerHTML = "Dog Lover.";
}
function activitiesChange5() {
    document.getElementById("Activities").innerHTML = "Hard Worker.";
}
function activitiesChange6() {
    document.getElementById("Activities").innerHTML = "Comp Sci Major.";
}
function underlineCurrentSection() {
    k = 0;
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const headerButtons = document.getElementsByClassName("HeaderButton");
        for (let i = 0; i < headerButtons.length; i++) {
            headerButtons[i].style.textDecorationLine = "none";
            headerButtons[i].addEventListener("mouseover", () => {
                headerButtons[i].style.textDecorationLine = "underline";
                headerButtons[i].style.textDecorationColor = "white";
                headerButtons[i].style.textDecorationThickness = "4px";
            })
            headerButtons[i].addEventListener("mouseout", () => {
                headerButtons[i].style.textDecorationLine = "none";
                headerButtons[k].style.textDecorationLine = "underline";
            })
        }
        if (scrollTop >= 0 && scrollTop <= 325) {
            underlineSection("ActualHomeButton");
            k = 0;
        }
        else if (scrollTop > 325 && scrollTop <= 795) {
            underlineSection("ActualAboutButton");
            k = 1;
        }
        else if (scrollTop > 795 && scrollTop <= 1530) {
            underlineSection("ActualProjectsButton");
            k = 2;
        }
        else if (scrollTop > 1530 && scrollTop <= 1945) {
            underlineSection("ActualSkillsButton");
            k = 3;
        }
        else if (scrollTop > 1945) {
            underlineSection("ActualContactMeButton");
            k = 4;
        }
    });
}
function underlineSection(sectionName) {
    document.getElementById(sectionName).style.textDecorationLine = "underline";
    document.getElementById(sectionName).style.textDecorationColor = "white";
    document.getElementById(sectionName).style.textDecorationThickness = "4px";
}