Rails.application.routes.draw do

  resources :posts, only: [:index]
  resources :users, only: [:index]
  resources :communities, only: [:index]

end
