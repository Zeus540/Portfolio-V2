import $ from 'jquery';

$(function(){

    $('#contactform').submit(function(){

        var action = $(this).attr('action');

        $('#message').slideUp(300,function() {
        $('#message').hide();

        $('#submit')
            .after('<img src="images/loader.gif" class="loader">')
            .attr('disabled','disabled');

        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            subject: $('#subject').val(),
            comments: $('#comments').val(),
            verify: $('#verify').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown(300);
                $('#contactform img.loader').fadeOut(300,function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp(300);
            }
        );

        });

        return false;

    });

});