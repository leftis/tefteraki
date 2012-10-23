class DosesController < ApplicationController
  def index
  end

  def new
  end

  def create
    @dose = Dose.new params[:dose]
    @debt = Debt.find_by_id params[:debt_id]
    @dose.debt_id = params[:debt_id]
    @dose.save
    @debt.paid_dose

    respond_to do |format|
      format.js { render :layout => false }
    end
  end

end
