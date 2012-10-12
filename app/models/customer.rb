class Customer < ActiveRecord::Base
  attr_accessible :afm, :doi, :fathers_name, :identity_created_at, :identity_number, :job_title, :memo, :name, :surname, :customer_phones_attributes, :customer_addresses_attributes

  # Validations
  #
  validates_presence_of :name, :surname, :fathers_name
  validates_uniqueness_of :afm, :identity_number

  # Associations
  #
  has_many :customer_phones
  has_many :customer_addresses
  has_many :debts

  # Nested form_for
  #
  accepts_nested_attributes_for :customer_phones, :customer_addresses

  def full_name
    unless name.blank? && surname.blank?
      surname << ' ' << name
    end
  end
end
