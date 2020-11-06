class User < ApplicationRecord
  has_many :check_ins
  has_many :locations, through: :check_ins
end
