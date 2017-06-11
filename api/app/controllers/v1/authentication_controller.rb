# module V1
#   class AuthenticationController < ApplicationController
#     def authenticate
#       auth_username = "lc_admin"
#       auth_password = "^TQV]3[gLkQu8GHQ"
#
#       if params[:username]==auth_username && params[:password]==auth_password
#         render json: {auth_token: JsonWebToken.encode({auth_username: auth_username+auth_password })}
#       else
#         render json: {error: 'Invalid credentials'}, status: :unauthorized
#       end
#     end
#   end
# end
