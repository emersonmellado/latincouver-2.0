module V1
  class JsonController < ApplicationController
    respond_to :json

    # GET /json
    def index

      @events = Event.all
      @settings = Setting.all

      render json: @events, :each_serializer => JsonSerializer

      # render json: {
      #   data: @json,
      #   settings: @settings
      # }

      # render json: {
      #   facilities: ActiveModel::ArraySerializer.new(@facilities, each_serializer: FacilitySerializer, root: false),
      #   instructors: ActiveModel::ArraySerializer.new(@instructors, each_serializer: InstructorSerializer, root: false)
      # }

    end
  end
end
