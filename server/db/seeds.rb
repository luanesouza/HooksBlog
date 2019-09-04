# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

user1 = User.create(name: 'Bob')
user1.posts.create([
  {content: 'Ipsum lorem', title: "Cool Title"},
  {content: 'Ipsum lorem', title: "Cool Title"},
  {content: 'a pole or stake set up to mark or indicate something
    especially :a metallic fitting attached to an electrical device (such as a storage battery) for convenience in making connections',
  title: "Cool Title"}])

puts '---------------------- seeds done ----------------------'
