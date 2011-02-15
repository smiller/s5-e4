$(function() {
  if ($('#console').length) {

    $('input.name:first').focus();

    /************************************************************************
     * check location
     ************************************************************************/
    setup_input_location($('input.location:first'));
    
    function setup_input_location(field) {
      $(field).blur(function() {
        check_location_field(field);
      });
      $(field).keypress(function(e) {
        if (e.keyCode == '13') {
          check_location_field(this);
        }
      });
    }
    
    $('input.location').blur(function() {
      check_location_field(this);
    });
    
    $('input.location').keypress(function(e) {
      if (e.keyCode == '13') {
        check_location_field(this);
      }
    });
    
    function check_location_field(field) {
      var val = $(field).val();
      var prompt = $(field).prev();
      if (val != '') {
        $.get('/geocode?location=' + val, 
        function(data) {
          prompt.text('Found ' + data['full_address'] + '.');
          prompt.show();
          set_lat_and_lng(field, data['lat'], data['lng']);
          $(field).next().val(data['lat']);
          $(field).next().next().val(data['lng']);
        });
      } else {
        prompt.text('');
        prompt.hide();
        set_lat_and_lng(field, '', '');
      }
    }
    
    function set_lat_and_lng(field, lat, lng) {
      $(field).next().val(lat);
      $(field).next().next().val(lng);
    }
    
    /************************************************************************
     * add user row
     ************************************************************************/
    $('#users .link').click(function() {
      add_user_row();
    });
    
    function add_user_row() {
      var copy = $('#users li:last').clone();
      var number = copy.find('input:first').attr('id').replace(/_name/, '');
      number = parseInt(number);
      var new_number = number + 1;
      copy.find('input').each(function() {
        $(this).val('');
        this.id = this.id.replace(number, new_number);
        this.name = this.name.replace(number, new_number);
      });
      copy.find('select').each(function() {
        $(this).val($('#users li:last select').val());
        this.id = this.id.replace(number, new_number);
        this.name = this.name.replace(number, new_number);
      });
      copy.find('.prompt').hide();
      setup_input_location(copy.find('input.location:first'));
      $('#users li:last').after(copy);
      copy.find('input:first').focus();
    }
    
  }
});

