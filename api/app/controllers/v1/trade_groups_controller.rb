module V1
  class TradeGroupsController < ApplicationController
    before_action :set_trade_group, only: [:show, :update, :destroy]

    ## GET /trade_groups
    def index
      @trade_groups = TradeGroup.all

      render json: @trade_groups
    end

    # GET /trade_groups/1
    def show
      render json: @trade_group
    end

    # POST /trade_groups
    def create
      @trade_group = TradeGroup.new(trade_group_params)

      if @trade_group.save
        render json: @trade_group, status: :created, location: @trade_group
      else
        render json: @trade_group.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /trade_groups/1
    def update
      if @trade_group.update(trade_group_params)
        render json: @trade_group
      else
        render json: @trade_group.errors, status: :unprocessable_entity
      end
    end

    # DELETE /trade_groups/1
    def destroy
      @trade_group.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade_group
      @trade_group = TradeGroup.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trade_group_params
      params.require(:attributes).permit(:name, :active)
    end
  end
end
