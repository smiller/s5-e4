$(function() {
  if ($('#console').length) {

    $('#courses .link').show();
    $('#courses .form').hide();

    $('#courses .link').click(function() {
      show_new_course_form();
    });
    
    $('#new_course_name').keyup(function(e) {
      if (new_course_form_submittable()) {
        $('#create_course').removeAttr('disabled')
      } else {
        $('#create_course').attr('disabled', 'true');
      }
    });
    
    $('#new_course_name').keypress(function(e) {
      if (e.keyCode == '13' && new_course_form_submittable()) {
        create_new_course();
      }
    });

    $(document).keyup(function(e) {
      if (e.keyCode == "27") {
        hide_new_course_form();
      }
    });
    
    $('#create_course').click(function() {
      create_new_course();
    });
    
    function show_new_course_form() {
      $('#courses .link').hide();
      $('#courses .form').show();
      $('#new_course_name').focus();
      $('#create_course').attr('disabled', 'true');
    }
    
    function new_course_form_submittable() {
      return $('#new_course_name').val() != '';
    }

    function create_new_course() {
      $.post('/courses',
      {
        authenticity_token: $('#authenticity_token').val(),
        course:
        { 
          name: $('#new_course_name').val(),
        }
      },
      function(data) {
        $('#course_list').text(data['courses']);
        $('select').append(data['new'])
        hide_new_course_form();
      });
    }
    
    function hide_new_course_form() {
      $('#new_course_name').val('');
      $('#courses .form').hide();
      $('#courses .link').show();
    }

  }
});

