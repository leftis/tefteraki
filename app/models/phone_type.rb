class PhoneType < ActiveRecord::Base
  attr_accessible :phone_type

  # Associations
  #
  has_many :customer_phones

  def to_s
    phone_type
  end

end
