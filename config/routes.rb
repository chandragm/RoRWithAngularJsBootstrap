Rails.application.routes.draw do
  resources :customers, only: [:index, :create, :update, :show, :destroy]
  root 'main#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
