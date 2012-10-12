class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :code
      t.string :name
      t.text :description
      t.decimal :product_price, :precision => 8, :scale => 2
      t.integer :debt_id

      t.timestamps
    end
  end
end
