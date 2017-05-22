class Event < ApplicationRecord
  before_destroy :validate_destroy
  #belongs_to :user
  belongs_to :css_style
  has_many :schedules
  has_many :plazas
  has_many :trades

  protected

  def validate_destroy
    unless Plaza.count("event_id = #{id}") > 0
      @event.errors.add(:base, "Cannot delete event with related data.")
      return false
    end
  end
end
