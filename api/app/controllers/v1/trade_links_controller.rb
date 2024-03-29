module V1
  class TradeLinksController < ApplicationController
    before_action :set_trade_link, only: [:show, :update, :destroy]

    # GET /trade_links
    def index
      @trade_links = TradeLink.all

      render json: @trade_links
    end

    # GET /trade_links/1
    def show
      render json: @trade_link
    end

    # POST /trade_links
    def create
      @trade_link = TradeLink.new(trade_link_params)

      if @trade_link.save
        render json: {success: true, trade_link: @trade_link}, status: :created
      else
        render json: {success: false, message: @trade_link.errors}, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /trade_links/1
    def update
      if @trade_link.update(trade_link_params)
        render json: {success: true, trade_link: @trade_link}, status: :ok
      else
        render json: {success: false, message: @trade_link.errors}, status: :unprocessable_entity
      end
    end

    # DELETE /trade_links/1
    def destroy
      @trade_link.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade_link
      @trade_link = TradeLink.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trade_link_params
      params.require(:attributes).permit(:name, :href, :active, :trade_id)
    end
  end
end
