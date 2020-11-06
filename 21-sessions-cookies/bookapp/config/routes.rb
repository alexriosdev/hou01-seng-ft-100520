Rails.application.routes.draw do
  resources :books
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/authors', to: 'authors#index'
  resources :authors
  resources :sessions, only: [:new,:create]
end
