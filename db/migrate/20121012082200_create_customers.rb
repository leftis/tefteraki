class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :surname
      t.string :fathers_name
      t.string :afm
      t.string :doi
      t.string :identity_number
      t.datetime :identity_created_at
      t.string :job_title
      t.text :memo

      t.timestamps
    end
  end
end
