class CreatePhoneTypes < ActiveRecord::Migration
  def change
    create_table :phone_types do |t|
      t.string :phone_type

      t.timestamps
    end
  end
end
