// sets variables for minutes and seconds
var ctmnts = 0;
var ctsecs = 0;
var startchr = 0;       // used to control when to read data from form

function countdownTimer() {
    // https://coursesweb.net/javascript/
    // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
    if (startchr == 0 && document.getElementById('mns') && document.getElementById('scs')) {
        // makes sure the script uses integer numbers
        ctmnts = parseInt(document.getElementById('mns').value) + 0;
        ctsecs = parseInt(document.getElementById('scs').value) * 1;

        // if data not a number, sets the value to 0
        if (isNaN(ctmnts)) ctmnts = 0;
        if (isNaN(ctsecs)) ctsecs = 0;

        // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
        document.getElementById('mns').value = ctmnts;
        document.getElementById('scs').value = ctsecs;
        startchr = 1;
        document.getElementById('btnct').setAttribute('disabled', 'disabled');     // disable the button
    }

    // if minutes and seconds are 0, sets $startchr to 0, and return false
    if (ctmnts == 0 && ctsecs == 0) {
        startchr = 0;
        document.getElementById('btnct').removeAttribute('disabled');     // remove "disabled" to enable the button

        /* HERE YOU CAN ADD TO EXECUTE A JavaScript FUNCTION WHEN COUNTDOWN TIMER REACH TO 0 */

        return false;
    }
    else {
        // decrease seconds, and decrease minutes if seconds reach to 0
        ctsecs--;
        if (ctsecs < 0) {
            if (ctmnts > 0) {
                ctsecs = 59;
                ctmnts--;
            }
            else {
                ctsecs = 0;
                ctmnts = 0;
            }
        }
    }

    // display the time in page, and auto-calls this function after 1 seccond
    document.getElementById('showmns').innerHTML = ctmnts;
    document.getElementById('showscs').innerHTML = ctsecs;
    setTimeout('countdownTimer()', 1000);
}

const reloadtButton = document.querySelector("#reload");
function countdownStop() {
    reload = location.reload();
}
reloadButton.addEventListener("click", reload, false);
   //-->