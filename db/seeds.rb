# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: 'demo@demo.com' password: 'password', fname: 'Demo', lname: 'User', birthday:'01-01-1999', gender: 'Male', profile_photo_url: '', cover_photo_url: '', school: '', bio: '', work: '', city: '')
User.create(email: 'optimus@gmail.com' password: 'password', fname: 'Optimus', lname: 'Prime', birthday:'03-01-1986', gender: 'Male', profile_photo_url: '', cover_photo_url: '', school: '', bio: '', work: '', city: '')
User.create(email: 'captaina@gmail.com' password: 'password', fname: 'Steve', lname: 'Rogers', birthday:'07-04-1918', gender: 'Male', profile_photo_url: '', cover_photo_url: '', school: '', bio: '', work: '', city: '')
User.create(email: 'sohrob@gmail.com' password: 'password', fname: 'Sohrob', lname: 'Ibrahimi', birthday:'04-08-1999', gender: 'Male', profile_photo_url: '', cover_photo_url: '', school: '', bio: '', work: '', city: '')