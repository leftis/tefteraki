class DebtsController < ApplicationController
  before_filter :find_model, only: [:index, :edit, :new]

  def index
    @debts_by_date = @customer.debts.all(:include => :products).group_by(&:published_at)
    @date = params[:date] ? Date.parse(params[:date]) : Date.today
  end

  def new
    @debt = @customer.debts.new
  end

  def edit
    @debt.doses.build
    @doses = @debt.doses.latest.limit(4) unless @debt.doses.blank?
  end

  def update
    @debt = Debt.find_by_id params[:id]
    if @debt.update_attributes(params[:debt])
      redirect_to customer_debts_path(:customer_id => @debt.customer_id)
    else
      render 'edit'
    end
  end

  def create
    @debt = Debt.new params[:debt]
    if @debt.save
      redirect_to customer_debts_path(:customer_id => @debt.customer_id)
    else
      render 'new'
    end
  end

  def destroy
    @debt = Debt.find_by_id params[:id]
    customer_id = @debt.customer_id
    @debt.delete
    redirect_to customer_debts_path(:customer_id => customer_id)
  end

  private
  def find_model
    @customer = Customer.find(params[:customer_id]) if params[:customer_id]
    @debt = @customer.debts.find(:first, :conditions => ["id = ?", params[:id]]) if params[:id]
  end
end