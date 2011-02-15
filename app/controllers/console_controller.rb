class ConsoleController < ApplicationController
  
  def index
    @courses = Course.all
    @users = User.all
  end
  
end