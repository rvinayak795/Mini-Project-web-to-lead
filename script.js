let captchaChecked = false;
function beforeSubmit(event){
    if(captchaChecked){
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");
        console.log('inputdate.value',inputdate.value); // object --> date(en_US)
        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
        console.log('formattedDate',formattedDate);
        outputdate.value = formattedDate;
    }else{
        alert("Please check the reCAPTCHA box to submit lead.");
        event.preventDefault(); //this will stop submission of form after closing alert
    }

}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    }
 } 
 setInterval(timestamp, 500); 

 function captchasuccess(){
    captchaChecked = true;
 }