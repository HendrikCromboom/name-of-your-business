
document.getElementById("tab__one").addEventListener("click", buttonOne);
document.getElementById("tab__two").addEventListener("click", buttonTwo);
document.getElementById("tab__three").addEventListener("click", buttonThree);

function buttonOne(){

    document.getElementById("section__one").style.display="block";
    document.getElementById("section__two").style.display="none";
    document.getElementById("section__three").style.display = "none";
    document.getElementById("section__four").style.display = "none";


    document.getElementById("tab__one").className="active";
    document.getElementById("tab__two").className="inactive";
    document.getElementById("tab__three").className="inactive";
    document.getElementById("tab__four").className = "inactive";
}
function buttonTwo(){

    document.getElementById("section__two").style.display="block";
    document.getElementById("section__one").style.display="none";
    document.getElementById("section__three").style.display="none";
    document.getElementById("section__four").style.display = "none";

    document.getElementById("tab__one").className="inactive";
    document.getElementById("tab__two").className="active";
    document.getElementById("tab__three").className="inactive";
    document.getElementById("tab__four").className = "inactive";
}
function buttonThree() {
    document.getElementById("section__three").style.display = "block";
    document.getElementById("section__four").style.display = "none";
    document.getElementById("section__two").style.display = "none";
    document.getElementById("section__one").style.display = "none";

    document.getElementById("tab__three").className = "active"
    document.getElementById("tab__one").className = "inactive";
    document.getElementById("tab__two").className = "inactive";
    document.getElementById("tab__four").className = "inactive";
}

function buttonFour() {
    document.getElementById("section__four").style.display = "block";
    document.getElementById("section__three").style.display = "none";
    document.getElementById("section__two").style.display = "none";
    document.getElementById("section__one").style.display = "none";

    document.getElementById("tab__four").className = "active"
    document.getElementById("tab__one").className = "inactive";
    document.getElementById("tab__two").className = "inactive";
    document.getElementById("tab__three").className = "inactive";
}