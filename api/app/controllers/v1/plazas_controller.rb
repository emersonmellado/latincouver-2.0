module V1
  class PlazasController < ApplicationController
    before_action :set_plaza, only: [:show, :update, :destroy]

    # GET /plazas
    def index
      @plazas = Plaza.all

      render json: @plazas
    end

    # GET /plazas/1
    def show
      render json: @plaza
    end

    # POST /plazas
    def create
      @plaza = Plaza.new(plaza_params)

      if @plaza.save
        render json: @plaza, status: :created, location: @plaza
      else
        render json: @plaza.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /plazas/1
    def update
      if @plaza.update(plaza_params)
        render json: @plaza
      else
        render json: @plaza.errors, status: :unprocessable_entity
      end
    end

    # DELETE /plazas/1
    def destroy
      @plaza.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_plaza
      @plaza = Plaza.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def plaza_params
      params.require(:attributes).permit(:name, :description, :image_url, :longitude, :latitude, :active, :css_style_id, :event_id)
    end
  end
end
