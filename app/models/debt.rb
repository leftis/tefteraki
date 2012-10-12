class Debt < ActiveRecord::Base
  attr_accessible :paid, :state, :sum, :customer_id, :products_attributes, :published_at, :doses_attributes
  before_save :calculated_cost
  # before_save :check_status

  # Associations
  #
  has_many :products
  has_many :doses
  belongs_to :customer

  accepts_nested_attributes_for :products, :doses

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

  def debt_status
    if remaining_debt <= 0
      :completed
    else
      :uncompleted
    end
  end
end
