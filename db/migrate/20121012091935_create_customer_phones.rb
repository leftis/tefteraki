class CreateCustomerPhones < ActiveRecord::Migration
  def change
    create_table :customer_phones do |t|
      t.integer :phone_number
      t.integer :phone_type_id
      t.integer :customer_id

      t.timestamps
    end
  end
end
