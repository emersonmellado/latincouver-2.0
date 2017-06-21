module V1
  class EventsController < ApplicationController
  #class EventsController < BaseController
  before_action :set_event, only: [:show, :update, :destroy]

  respond_to :json

    # GET /events
    def index
      @events = Event.all.order(order: :asc)

      render json: @events
    end

    # GET /events/1
    def show
      render json: @event
    end

    # POST /events
    def create
      @event = Event.new(event_params)

      if @event.save
        @event.update_attribute(:order, Event.maximum(:order)+1)

        render json: {success: true, event: @event}, status: :created
      else
        render json: {success: false, message: @event.errors}, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /events/1
    def update
      if @event.update(event_params)
        render json: {success: true, event: @event}, status: :ok
      else
        render json: {success: false, message: @event.errors}, status: :unprocessable_entity
      end
    end

    # DELETE /events/1
    def destroy
      begin
        @event.destroy
      rescue => ex
        render json: {success: false, message: "Cannot delete an event with related data."}
      end

    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def event_params
      params.require(:attributes).permit(:name, :short_description, :description, :image_url, :external_url, :longitude, :latitude, :active, :css_style_id, :order)
    end
  end
end
