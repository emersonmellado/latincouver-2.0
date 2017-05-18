class JsonController < ApplicationController
  respond_to :json

  # GET /json
  def index

    @events = Event.all
    
    render json: @events, :each_serializer => JsonSerializer	    

  end
end