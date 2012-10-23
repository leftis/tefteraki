class DashboardController < ApplicationController
  def index
    @debts = Debt.on_year(Time.now.year)
    binding.pry

    @chart = LazyHighCharts::HighChart.new('graph') do |f|
      f.options[:chart][:defaultSeriesType] = "area"
      f.series(:name=>'Jane', :data => @debts.collect(&:paid_untill_now).to_a )
      f.options[:plotOptions] = { areaspline: { pointInterval: 1.month, pointStart: Time.now.day }}
      f.xAxis(type: :date)
    end

  end
end
