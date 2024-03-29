module V1
  class TradesController < ApplicationController
    before_action :set_trade, only: [:show, :update, :destroy]

    # GET /trades
    def index
      @trades = Trade.all

      render json: @trades
    end

    # GET /trades/1
    def show
      render json: @trade
    end

    # POST /trades
    def create
      @trade = Trade.new(trade_params)

      if @trade.save
        render json: {success: true, trade: @trade}, status: :created
      else
        render json: {success: false, message: @trade.errors}, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /trades/1
    def update
      if @trade.update(trade_params)
        render json: {success: true, trade: @trade}, status: :ok
      else
        render json: @trade.errors, status: :unprocessable_entity
      end
    end

    # DELETE /trades/1
    def destroy
      @trade.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade
      @trade = Trade.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trade_params
      params.require(:attributes).permit(:event_id, :plaza_id, :name, :description, :short_description, :order, :image_url, :active, :trade_type_id, :trade_group_id)
    end
  end
end
