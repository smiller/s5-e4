class UsersController < ApplicationController
  
  def create
    params.keys.each do |key|
      if key.to_i != 0
        User.create(params[key])
      end
    end
    redirect_to :controller => 'console', :action => 'index'
  end
  
end