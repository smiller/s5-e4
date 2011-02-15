class User < ActiveRecord::Base
  
  belongs_to :course
  
  def course_name
    course.name
  end
  
end
