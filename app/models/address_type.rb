class AddressType < ActiveRecord::Base
  attr_accessible :address_type

  has_many :customer_addresses

  def to_s
    address_type
  end
end
