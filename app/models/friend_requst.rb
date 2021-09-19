class FriendRequest < ApplicationController
  validates :requester_id, :requestee_id, presence: true

  belongs_to :requester,
    class_name: :User,
    foreign_key: :requester_id,
    primary_key: :id
end