class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :user_id1, null: false
      t.integer :user_id2, null: false
      t.timestamps
    end
    add_index :friends, :user_id1
    add_index :friends, :user_id2
  end
end
