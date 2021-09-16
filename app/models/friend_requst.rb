class FriendRequest < ApplicationController
  validates :requester_id, :requestee_id, presence: true

end