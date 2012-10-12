class Dose < ActiveRecord::Base
  attr_accessible :ammount, :paid_at
  belongs_to :debt
end
