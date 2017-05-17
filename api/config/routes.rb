Rails.application.routes.draw do


  resources :events do
  end

  resources :schedules do
  end

  resources :plazas do
  end

  resources :trades do
  end

  resources :css_styles, :path => "css-styles"

  resources :trade_groups, :path => "trade-groups"

  resources :trade_links, :path => "trade-links"

  resources :trade_products, :path => "trade-products"

  resources :trade_types, :path => "trade-types"

  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
