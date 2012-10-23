class Debt < ActiveRecord::Base
  attr_accessible :paid, :state, :sum, :customer_id, :products_attributes, :published_at, :doses_attributes

  # Callbacks
  #
  before_save :calculated_cost

  # Validations
  #
  validates :paid, :published_at, presence: true

  # Associations
  #
  has_many :products
  has_many :doses
  belongs_to :customer

  # Nested attributes
  #
  accepts_nested_attributes_for :products, :doses

  # Scopes
  #
  default_scope order('published_at DESC')
  scope :on_year , ->(year)             { where('YEAR(published_at) = ?', year) }
  scope :on_month, ->(month, year)      { where('YEAR(published_at) = ? AND MONTH(published_at) = ?', year, month) }
  scope :on_day  , ->(day, month, year) {
    where('YEAR(published_at) = ? AND MONTH(published_at) = ? AND DAY(published_at) = ?', year, month, day)
  }

  # States
  #
  state_machine :state, :initial => :unpaid do
    event :paid_dose do
      transition :from => :unpaid, :to => :paid, :if => lambda {|debt| debt.paid? }
    end
  end

  def self.debts_grouped_by_published_at
    self.all.group_by(&:published_at)
  end

  def paid_untill_now
    paid + doses_ammount unless paid.blank? && doses.blank?
  end

  def calculated_cost
    self.sum = products.collect(&:product_price).inject(&:+) if products
  end

  def remaining_debt
    sum = self.sum - doses_ammount unless self.sum.blank?
    sum - self.paid unless self.paid.blank?
  end

  def doses_ammount
    doses.blank? ? 0 : doses.collect(&:ammount).compact.sum
  end

  def paid?
    remaining_debt.to_i == 0
  end

end
