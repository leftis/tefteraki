
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Customers

ActiveRecord::Base.establish_connection
ActiveRecord::Base.connection.tables.each do |table|
  next if table == 'schema_migrations'
  ActiveRecord::Base.connection.execute("DELETE FROM #{table}")
end

100.times.each_with_index do |n, index|
  customer = Customer.new
  customer.name = Forgery(:lorem_ipsum).words(5 + index)
  customer.surname = Forgery(:lorem_ipsum).words(5 + index)
  customer.fathers_name = Forgery(:lorem_ipsum).words(5 + index)
  customer.save(validate: false)
end

PhoneType.create(phone_type: 'Job')
PhoneType.create(phone_type: 'Home')
PhoneType.create(phone_type: 'Fax')

AddressType.create(address_type: 'Home')
AddressType.create(address_type: 'Job')
AddressType.create(address_type: 'Alternative')

User.create(email: 'admin@tefteraki.gr', password: 'admin', password_confirmation: 'admin')
