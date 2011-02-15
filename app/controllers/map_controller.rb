class MapController < ApplicationController
  
  def show
    @marker_details = User.all.to_json(:methods => :course_name)
    @last_course = Course.last.id
  end
  
end