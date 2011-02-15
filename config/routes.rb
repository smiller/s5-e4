S5E4::Application.routes.draw do

  root :to => 'console#index'
  
  match 'courses' => 'courses#create'
  match 'geocode' => 'geocode#show'
  match 'users' => 'users#create'
  match 'map' => 'map#show'
  
end
