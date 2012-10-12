class CreateDoses < ActiveRecord::Migration
  def change
    create_table :doses do |t|
      t.decimal :ammount, :precision => 8, :scale => 2
      t.date :paid_at
      t.integer :debt_id

      t.timestamps
    end
  end
end
