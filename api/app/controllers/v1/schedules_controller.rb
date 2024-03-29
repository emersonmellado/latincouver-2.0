module V1
  class SchedulesController < ApplicationController
    before_action :set_schedule, only: [:show, :update, :destroy]

    # GET /schedules
    def index
      @schedules = Schedule.all

      render json: @schedules
    end

    # GET /schedules/1
    def show
      render json: @schedule
    end

    # POST /schedules
    def create
      @schedule = Schedule.new(schedule_params)

      if @schedule.save
        render json: {success: true, schedule: @schedule}, status: :created
      else
        render json: {success: false, message: @schedule.errors}, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /schedules/1
    def update
      if @schedule.update(schedule_params)
        render json: {success: true, schedule: @schedule}, status: :ok
      else
        render json: {success: false, message: @schedule.errors}, status: :unprocessable_entity
      end
    end

    # DELETE /schedules/1
    def destroy
      @schedule.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_schedule
      @schedule = Schedule.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def schedule_params
      params.require(:attributes).permit(:from, :to, :trade_id, :event_id, :plaza_id, :css_style_id)
    end
  end
end
