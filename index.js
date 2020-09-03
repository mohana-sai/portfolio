var el = document.getElementById('contact_form_submit');
if(el){
  el.addEventListener('click', submitContactForm);
}



function modal(img)
{
 var btn=document.getElementById('trigger_modal');
 document.getElementById('modal_img').src=img;
 btn.click();
}

function formValidation()
{
    var uname=document.getElementById('contact_form_name').value;
  
    var email=document.getElementById('contact_form_email').value;

    var msg=document.getElementById('contact_form_msg').value;
    if(uname!="" && msg!="" && email!="")
    {
        return true;
    }

    var error_msg;
   
    if(uname=="")
    {
        error_msg="Enter your name";

    }
    else if(email=="")
    {
        error_msg="Enter your mail";
    }
    else if(msg=="")
    {
        error_msg="Message cannot be empty";
    }

    document.getElementById('error_msg').innerHTML=error_msg;

    return false;

}
function submitContactForm(e){

    if(formValidation())
    
    {
  
    var xhr=new XMLHttpRequest();
  
    var uname=document.getElementById('contact_form_name').value;
  
    var email=document.getElementById('contact_form_email').value;

    var msg=document.getElementById('contact_form_msg').value;

    


  
    var pars="uname="+uname+ "&" + "email="+email + "&" + "msg="+msg;
  
    xhr.open('POST','https://bbbs0717.000webhostapp.com/sendmail.php',true);
  
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=function(){
       if(this.status == 200)
        {
         console.log("Sending");
         var res=this.responseText;
            if(res==202)
            {
                document.getElementById('error_msg').innerHTML="Your message was sent successfully.";
            }
         }
      }
      console.log(pars);
      xhr.send(pars);
    
    }
  }