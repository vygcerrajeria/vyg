$(function () {
    
    function after_form_submitted(data) {
       // data = JSON object that contact.php returns
        // we recieve the type of the message: success x danger and apply it to the 
        var messageAlert = 'alert-' + data.type;
        var messageText = data.message;
       console.log(data.type);
       // let's compose Bootstrap alert box HTML
       var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';   
       // If we have messageAlert and messageText
       if (messageAlert && messageText) {
           // inject the alert to .messages div in our form
           $('#quoteform').find('.messages').html(alertBox);
           $(window).scrollTop($('.messages').offset().top);
           // empty the form
           $('#quoteform')[0].reset();
       }
         //reverse the response on the button
           $('button[type="button"]', $form).each(function()
           {
               $btn = $(this);
               label = $btn.prop('orig_label');
               if(label)
               {
                   $btn.prop('type','submit' ); 
                   $btn.text(label);
                   $btn.prop('orig_label','');
                   $btn.prop('disabled', false);
               }
           });

           // Set event to Google Analitics
           if (data.type === "success") {
            ga('send', 'event', 'FormSend', 'submitted', 'Zapytanie');
            fbq('track', 'Lead');
           }
   }
   
   // init the validator
   $(".form-validate").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstName: "required",
      phone: {
        number: true,
        required: true
      },
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      message: "required",
      termscheckbox: "required",
    },
    // Specify validation error messages
    messages: {
      firstName: "Please enter your first name ",
      email: "Please enter a valid email address",
      message: "Please enter your message",
      phone: "Please enter a valid phone number",
      termscheckbox: "Please accept terms and condition"
    },
    errorClass: "input--invalid",
    validClass: "input--valid",
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    // submitHandler: function(form) {
    //   form.submit();
    // }
    });
   // when the form is submitted
   $('#quoteform').on('submit', function (e) {
       // if the validator does not prevent form submit
       if (!e.isDefaultPrevented()) {
           var url = "handler.php";
           // Make adnotation to the button
            $form = $(this);
            $('button[type="submit"]', $form).each(function()
           {
           $btn = $(this);
           $btn.prop('type','button' ); 
           $btn.prop('orig_label',$btn.text());
           $btn.text('Sending ...');
           $btn.prop('disabled', true);
           });

           // POST values in the background the the script URL
           $.ajax({
               type: "POST",
               url: url,
               data: $(this).serialize(),
               success: after_form_submitted
           });
           return false;
       }
   })
});