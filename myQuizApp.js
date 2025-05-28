const box = document.getElementById("fade");
const box2 = document.getElementById("proceed");
const box3 = document.getElementById("nickname-form");

function showInput(){
    box.style.display = "block"; 
    box.scrollIntoView({behaviour:"smooth"});
};

box3.addEventListener("submit", function(e){
    e.preventDefault();
    const nickname = box.value;
    localStorage.setItem("currentUser", nickname);
    window.location.href = "myQuizAppQuizzes.html";
});


box.addEventListener("input", ()=>{
    if(box.value.trim()!==""){
        box2.style.display = "block";
        box2.scrollIntoView({behaviour:"smooth"});
    }
    else{
        box2.style.display = "none";
    }
});



