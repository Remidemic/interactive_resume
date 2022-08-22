// A+ image//
const populateAWorkToScreen = () => {
    document.getElementById("theImageA").style.visibility = "visible";
    document.getElementById("priorgif", "theImageB", "theImageExtraCred", "theheadshot").style.visibility = "hidden";

    let gradeA = document.querySelector(".screen");
    let text =
        "Remy is a customer-centric solutions provider with proven success in numerous industry verticles including event sales, business loans, B2B solutions and realestate. risk management is a strength that has worked in his favor "
    gradeA.innerHTML = text;
};

// B work image
const populateBWorkToScreen = () => {
    document.getElementById("theImageB").style.visibility = "visible";
    document.getElementById("priorgif", "theImageExtraCred", "theheadshot", "theImageA").style.visibility = "hidden";

    let gradeB = document.querySelector(".screen");
    let text =
        "Remy is a quck on his feet sponge for new skills, currently learning software engieering at an industry leading program with world class instructors at PerScholas. \n Relevant skills include working knoledge of HTML, CSS, Javascript, Zoom, Windows 98 and Terminal commands "
    gradeB.innerHTML = text;
};

// extra credit 
const populateEXTRACREDIT = () => {
    document.getElementById("theImageExtraCred").style.visibility = "visible";
    document.getElementById("priorgif", "theheadshot", "theImageA", "theImageB").style.visibility = "hidden";

    let extracredit = document.querySelector(".screen");
    let text =
        "EXTRA CREDIT. relevant skills honed outside of an office setting include: \r \n  - online sales, b2b direct sales, inbound phone sales, project management, property management, extablishing an LLC properly (ein, bank account, publishing etc),"
    extracredit.innerHTML = text;
};

// a little bit about me 
const populateTextToScreenABOUT = () => {
    document.getElementById("theheadshot").style.visibility = "visible";
    document.getElementById("theImageA").style.visibility = "hidden";
    document.getElementById("theImageB").style.visibility = "hidden";
    document.getElementById("theImageExtraCred").style.visibility = "hidden";

    let screenabout = document.querySelector(".screen");
    let text =
        "Born & raised in NYC with 5 + years in the sales industry, gaining valuable transferable skills in relationship building, strategic planning & project management. \n Strong track record of quickly adapting and learning in new & complex situations. \n Eager to leverage a diverse range of talents in a new and engaging professional setting. \n Committed to lifelong learning & personal development."
    screenabout.innerHTML = text;
};

// prior work experience 
const workhistory = () => {
    document.getElementById("priorgif").style.visibility = "visible";
    document.getElementById("theheadshot", "theImageA", "theImageB", "theImageExtraCred").style.visibility = "hidden";

    let workhistory = document.querySelector(".screen");
    let text =
        "2019 - present : self employed - small business owner \n \r 2016 - 2019: \t small business loan sales "
    workhistory.innerHTML = text;
}