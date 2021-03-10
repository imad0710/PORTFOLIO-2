
    function send(event) {
        event.preventDefault();           
        Email.send({
          name:document.getElementById('name').value,    
          Host : "smtp.gmail.com",
          Username : "type u'r email id",
          Password : "type u'r Password",
          To : "type u'r email id",
          From : document.getElementById('email').value,
          Subject : document.getElementById('subject').value,
          Body : document.getElementById('message').value
          }).then(function(response){ 
           if (response == 'OK') {              
               alert("Mail sent succeessfully");
            } else {
                throw new Error("Error: " + response.statusText);
            } 
         });
 
    }    
 







    $(document).ready(function(){
        $(".button").click(function(){
            var value=$(this).attr("data-filter");
            if(value=="all"){
                $(".filter").show("100");
            }
            else{
                $(".filter").not("."+value).hide("1000");
                $("filter").filter("."+value).show("1000");
            }
            $("ul .button").click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            })
        })
    });

      