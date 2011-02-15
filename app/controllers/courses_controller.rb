class CoursesController < ApplicationController
  
  def create
    @course = Course.new(params[:course])
    # In the real world we would return the save status 
    # and respond intelligently to the failure case.
    # But since this is mocking something that already exists
    # in rmu/university-web, ignore it here. 
    if @course.save
      render :json => {:courses => Course.all.map { |c| c.name}.join(', '), :new => "<option value='#{@course.id}'>#{@course.name}</option>"}
    else
      render :json => {:courses => Course.all.map { |c| c.name}.join(', '), :new => "<option value='#{@course.id}'>#{@course.name}</option>"}
    end
  end
  
end