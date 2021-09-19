class Friend < ApplicationRecord
  validates :user_id1, :user_id2, presence: true

  
  belongs_to :friend1,
    class_name: :User,
    foreign_key: :user_id1,
    primary_key: :id
  
end