class Like < ApplicationRecord
  validates :user_id, :likeable_type, :likeable_id, presence: true

  belongs_to :liker,
  class_name: :User,
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :post,
  class_name: :Post,
  foreign_key: :likeable_id,
  primary_key: :id

  
end