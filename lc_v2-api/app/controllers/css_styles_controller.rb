class CssStylesController < ApplicationController
  before_action :set_css_style, only: [:show, :update, :destroy]

  # GET /css_styles
  def index
    @css_styles = CssStyle.all

    render json: @css_styles
  end

  # GET /css_styles/1
  def show
    render json: @css_style
  end

  # POST /css_styles
  def create
    @css_style = CssStyle.new(css_style_params)

    if @css_style.save
      render json: @css_style, status: :created, location: @css_style
    else
      render json: @css_style.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /css_styles/1
  def update
    if @css_style.update(css_style_params)
      render json: @css_style
    else
      render json: @css_style.errors, status: :unprocessable_entity
    end
  end

  # DELETE /css_styles/1
  def destroy
    @css_style.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_css_style
      @css_style = CssStyle.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def css_style_params
      params.require(:css_style).permit(:name)
    end
end
