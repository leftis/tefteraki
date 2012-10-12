class CreateCustomerAddresses < ActiveRecord::Migration
  def change
    create_table :customer_addresses do |t|
      t.string :address
      t.integer :address_number
      t.string :city
      t.string :address_type_id
      t.integer :customer_id

      t.timestamps
    end
  end
end
