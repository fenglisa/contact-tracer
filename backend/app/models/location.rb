class Location < ApplicationRecord
  validates :name, presence: true
  before_validation :normalize_name
  has_many :check_ins
  has_many :users, through: :check_ins

  private
  def normalize_name
    self.name = name.downcase.titleize
  end
end
