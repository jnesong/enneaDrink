class User < ApplicationRecord
    has_secure_password
    has_many :journeys

    validates :username, presence: true, uniqueness: true
    validates :displayname, presence: true
    validates :password_digest, presence: true
end
