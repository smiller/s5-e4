class User < ActiveRecord::Base
  
  belongs_to :course
  
  def course_name
    course.name
  end
  
  def course_color
    course.color
  end
  
end
