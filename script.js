function calculate()
{
    const birth=document.getElementById("date1").value;

    if(!birth)
    {
        alert("Invalid Input...");
        return;
    }

    const birth1=new Date(birth);
    const now=new Date();

    let age=now.getFullYear()-birth1.getFullYear();
    const monthd=now.getMonth()-birth1.getMonth();
    const dated=now.getDate()-birth1.getDate();

    if (monthd < 0 || (monthd===0  && dated < 0)) 
    {
        age--;
    }
    
    const result=document.getElementById("result");
    result.innerHTML="Your Age is "+age;

}

