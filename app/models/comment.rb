class Comment < ApplicationRecord
  validates :author_id, :post_id, :body, presence: true
  
  

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :post,
  class_name: :Post,
  foreign_key: :post_id,
  primary_key: :id

  def created_at
    attributes['created_at'].strftime("%b %-d, %Y %l:%M %p")
  end
end