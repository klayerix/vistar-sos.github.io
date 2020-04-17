let logBtn = document.getElementById("signIn");
    regBtn = document.getElementById("reg");
    log = document.getElementById("log");



logBtn.addEventListener('click', function(){
    var logVal = log.value;
        passVal = pass.value;
    console.log(logVal);
    console.log(passVal);
})

$.ajax({
    url: "http://192.168.15.133:8081/Servlet",
    data: ({
        log: JSON.stringify(
        {
            
        }
        )
    }),
    type: "POST",
    dataType: "json",     
});