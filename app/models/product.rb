class Product < ActiveRecord::Base
  attr_accessible :code, :description, :name, :product_price, :created_at, :updated_at

  belongs_to :debt

  def to_s
    name
  end
end
