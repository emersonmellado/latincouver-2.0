class V1::BaseController < ApplicationController
  before_action :authenticate_request
  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: {error: 'Not authorized'}, status: :unauthorized unless @current_user
  end
end
