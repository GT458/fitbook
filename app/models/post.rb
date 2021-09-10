class Post < ApplicationRecord
  validates :author_id, :body, presence: true
  has_one_attached :photo
  

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :comments,
    class_name: :Comment,
    foreign_key: :post_id,
    primary_key: :id

  has_many :likes,
    class_name: :Like,
    foreign_key: :likeable_id,
    primary_key: :id
end