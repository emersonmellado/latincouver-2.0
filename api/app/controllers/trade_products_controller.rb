class TradeProductsController < ApplicationController
  before_action :set_trade_product, only: [:show, :update, :destroy]

  # GET /trade_products
  def index
    @trade_products = TradeProduct.all

    render json: @trade_products
  end

  # GET /trade_products/1
  def show
    render json: @trade_product
  end

  # POST /trade_products
  def create
    @trade_product = TradeProduct.new(trade_product_params)

    if @trade_product.save
      render json: @trade_product, status: :created, location: @trade_product
    else
      render json: @trade_product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trade_products/1
  def update
    if @trade_product.update(trade_product_params)
      render json: @trade_product
    else
      render json: @trade_product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trade_products/1
  def destroy
    @trade_product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade_product
      @trade_product = TradeProduct.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trade_product_params
      params.require(:trade_product).permit(:name, :active, :trade_id)
    end
end
