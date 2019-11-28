function isoDateToString(dateIso)
{
    let date = dateIso.iso.split("T")[0];
    let time = new Date(dateIso.iso);
    let hour = time.getHours();
    if(hour < 10)
    {
        hour = "0"+hour;
    }
    let minutes = time.getMinutes();
    if(minutes < 10)
    {
        minutes = "0"+minutes
    }
    let newdate;
    newdate = date+" "+hour+":"+minutes;
    return newdate
}