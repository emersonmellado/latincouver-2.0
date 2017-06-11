module V1
  class JsonController < ApplicationController
    respond_to :json

    # GET /json
    def index

      @events = Event.all.order(order: :asc)
      @css_style = CssStyle.all
      @settings = Setting.all

      # render json: {@events, :each_serializer => JsonSerializer}

      render json: {
        events: ActiveModel::Serializer::CollectionSerializer.new(@events, each_serializer: JsonSerializer),
        css_style: ActiveModel::Serializer::CollectionSerializer.new(@css_style, each_serializer: CssStyleSerializer),
        settings: ActiveModel::Serializer::CollectionSerializer.new(@settings, each_serializer: SettingSerializer)
      }

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
