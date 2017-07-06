module V1
  class SettingsController < ApplicationController
    before_action :set_setting, only: [:show, :update, :destroy]

    # GET /settings
    def index
      @settings = Setting.all

      render json: @settings
    end

    # GET /settings/1
    def show
      render json: @setting
    end

    # POST /settings
    def create
      @setting = Setting.new(setting_params)

      if @setting.save
        render json: {success: true, setting: @setting}, status: :created
      else
        render json: {success: false, message: @setting.errors}, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /settings/1
    def update
      if @setting.update(setting_params)
        render json: {success: true, setting: @setting}, status: :ok
      else
        render json: {success: false, message: @setting.errors}, status: :unprocessable_entity
      end
    end

    # DELETE /settings/1
    def destroy
      @setting.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_setting
      @setting = Setting.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def setting_params
      params.require(:attributes).permit(:main_title, :css_style_id)
    end
  end
end
