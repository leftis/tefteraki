Tefteraki::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  resources :debts, :only =>  :destroy
  devise_for :users, :path => '/', :path_names => { :sign_in => 'login',
                                                    :sign_out => 'logout' }

  resources :customers do
    resources :debts do
      get 'doses'
    end
  end

  resources :phone_types
  resources :address_types
  resources :customer_phones

  root :to => 'customers#index'
end
