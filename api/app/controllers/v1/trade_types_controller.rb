module V1
  class TradeTypesController < BaseController
    before_action :set_trade_type, only: [:show, :update, :destroy]

    # GET /trade_types
    def index
      @trade_types = TradeType.all

      render json: @trade_types
    end

    # GET /trade_types/1
    def show
      render json: @trade_type
    end

    # POST /trade_types
    def create
      @trade_type = TradeType.new(trade_type_params)

      if @trade_type.save
        render json: @trade_type, status: :created, location: @trade_type
      else
        render json: @trade_type.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /trade_types/1
    def update
      if @trade_type.update(trade_type_params)
        render json: @trade_type
      else
        render json: @trade_type.errors, status: :unprocessable_entity
      end
    end

    # DELETE /trade_types/1
    def destroy
      @trade_type.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade_type
      @trade_type = TradeType.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trade_type_params
      params.require(:attributes).permit(:name, :active)
    end
  end
end
