require 'bcrypt'
class User < ApplicationRecord
  attr_reader :password
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :fname, :lname, :profile_photo_url, :cover_photo_url, :birthday, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  after_initialize :ensure_session_token

  has_one_attached :profile_photo
  has_one_attached :cover_photo
  has_many :posts,
    class_name: :Post,
    foreign_key: :author_id,
    primary_key: :id
  
  has_many :liked_posts, 
    class_name: :Like,
    foreign_key: :user_id,
    primary_key: :id

  has_many :friend_requests_sent,
    class_name: :Friend_Request,
    foreign_key: :requester_id,
    primary_key: :id

  has_many :friend_requests_received,
    class_name: :Friend_Request,
    foreign_key: :requestee_id,
    primary_key: :id
  has_many :friends,
    class_name: :Friend,
    foreign_key: :user_id1,
    primary_key: :id
  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)

    if @user && @user.is_password?(password)
      @user 
    else
      nil
    end
  end

  def is_password?(password)
    password_object = BCrypt::Password.new(password_digest)
    password_object.is_password?(password)
  end

  def generate_session_token
    self.session_token = SecureRandom::urlsafe_base64
  end

  def password
    @password
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password) 
  end

  def ensure_session_token
    self.session_token ||= self.generate_session_token
  end

  def reset_session_token!
    self.generate_session_token
    self.save
    self.session_token
  end

end