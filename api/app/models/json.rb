class Json < ApplicationRecord
  def active_model_serializer
      JsonSerializer
  end 
end