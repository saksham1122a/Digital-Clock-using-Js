function updateClock() {
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min"); 
    let sec = document.getElementById("sec");

    const date = new Date();

    hrs.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();  // Adding leading zero for single digit hours
    min.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();  // Adding leading zero for single digit minutes
    sec.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();  // Adding leading zero for single digit seconds
 }


 setInterval(() => {
    updateClock();
    // console.log("Clock updated");
 },1000);
