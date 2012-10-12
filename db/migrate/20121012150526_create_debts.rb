class CreateDebts < ActiveRecord::Migration
  def change
    create_table :debts do |t|
      t.decimal :sum, :precision => 8, :scale => 2
      t.decimal :paid, :precision => 8, :scale => 2
      t.string  :state
      t.date :published_at
      t.integer :customer_id

      t.timestamps
    end
  end
end
