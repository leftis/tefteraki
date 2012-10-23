class Dose < ActiveRecord::Base
  attr_accessible :ammount, :paid_at
  belongs_to :debt

  # validates :paid_at, :ammount, presence: true

  scope :latest, order("paid_at DESC")

  default_scope latest
end
