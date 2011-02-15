$(function() { 
  var latlng = new google.maps.LatLng(41.3080556, -72.9286111); // centre it on New Haven, CT
  var myOptions = {
    zoom: 2,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  
  $.each($.parseJSON($('#marker_details').val()), function() {

    var color = "D4A017"; // gold for alumni
    if (this.user.course_id == $("#last_course").val()) {
      color = "99CC66"; // green for current students
    }

  	var marker = new google.maps.Marker({
  		position: new google.maps.LatLng(this.user.latitude, this.user.longitude),
  		map: map,
  		icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + this.user.course_id + '|' + color + '|000000'
		});
		
		var infowindow = new google.maps.InfoWindow({
  		content: this.user.name + ' (' + this.user.location + ')<br>course ' + this.user.course_name
  	});
  
  	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map, marker);
		});
  	
	});
});
