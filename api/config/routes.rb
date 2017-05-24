Rails.application.routes.draw do

  namespace :v1 do
    resources :json

    resources :settings

    resources :events

    resources :schedules

    resources :plazas

    resources :trades

    resources :css_styles, :path => "css-styles"

    resources :trade_groups, :path => "trade-groups"

    resources :trade_links, :path => "trade-links"

    resources :trade_products, :path => "trade-products"

    resources :trade_types, :path => "trade-types"

    #mount_devise_token_auth_for 'User', at: 'auth'
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    post 'authenticate', to: 'authentication#authenticate'
end
end
