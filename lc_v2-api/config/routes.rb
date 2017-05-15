Rails.application.routes.draw do


  resources :events do
  end

  resources :schedules do
  end

  resources :plazas do
  end

  resources :trades do
  end

  resources :css_style 


  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
