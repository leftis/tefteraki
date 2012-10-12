class CustomersController < ApplicationController
  before_filter :find_single_customer

  def index
    respond_to do |format|
      format.html
      format.json { render json: CustomersDatatable.new(view_context) }
    end
  end

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.new params[:customer]
    if @customer.save
      redirect_to @customer
    else
      render 'new'
    end
  end

  def show
  end

  def update
    if @customer.update_attributes(params[:customer])
      redirect_to @customer
    else
      render 'edit'
    end
  end

  private
  def find_single_customer
    @customer = Customer.find params[:id] unless params[:id].blank?
  end
end