class CustomerPhone < ActiveRecord::Base
  attr_accessible :customer_id, :phone_number, :phone_type_id

  # Associations
  #
  belongs_to :customer
  belongs_to :phone_type

  def to_s
    phone_number
  end
end
