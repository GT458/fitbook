class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_photo_url, null: false
      t.string :cover_photo_url, null: false
      t.string :birthday, null: false
      t.string :gender
      t.string :school
      t.string :city
      t.string :work
      t.text :bio
      t.timestamps
    end
    add_index :users, :email
    add_index :users, :session_token
    add_index :users, :fname
    add_index :users, :lname
  end
end
