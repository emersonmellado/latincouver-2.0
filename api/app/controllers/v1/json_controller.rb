module V1
  class JsonController < BaseController
    respond_to :json

    # GET /json
    def index

      @events = Event.all

      render json: @events, :each_serializer => JsonSerializer

    end
  end
end
