function calculate()
{
    const birth=document.getElementById("date1").value;
    const current=document.getElementById("date2").value;

    if(!birth || !current)
    {
        alert("Invalid Input...");
        return;
    }

    const birth1=new Date(birth);
    const current1=new Date(current);

    let age=current1.getFullYear()-birth1.getFullYear();
    const monthd=current1.getMonth()-birth1.getMonth();
    const dated=current1.getDate()-birth1.getDate();

    if (monthd < 0 || (monthd===0  && dated < 0)) 
    {
        age--;
    }
    
    const result=document.getElementById("result");
    result.innerHTML="Your Age is "+age;

}

