class CustomerAddress < ActiveRecord::Base
  attr_accessible :address, :address_number, :address_type_id, :city

  # Associations
  #
  belongs_to :customer
  belongs_to :address_type

  def to_s
    address
  end
end
