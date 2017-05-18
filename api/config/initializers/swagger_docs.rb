#https://github.com/richhollis/swagger-docs

# swagger::Docs::Config.register_apis({
#   "1.0" => {
#     # the extension used for the API
#     :api_extension_type => :json,
#     # the output location where your .json files are written to
#     :api_file_path => "public/api/v1/",
#     # the URL base path to your API
#     :base_path => "http://latincouverapi.heroku.com",
#     # if you want to delete all .json files at each generation
#     :clean_directory => false,
#     # Ability to setup base controller for each api version. Api::V1::SomeController for example.
#     :parent_controller => Api::EventsController,
#     # add custom attributes to api-docs
#     :attributes => {
#       :info => {
#         "title" => "LatinCouver dynamic app",
#         "description" => "This is aapi to manage data for latincouver app.",
#         "termsOfServiceUrl" => "http://latincouver.er7.ca/",
#         "contact" => "emersonmellado@gmail.com",
#         "license" => "Apache 2.0",
#         "licenseUrl" => "http://www.apache.org/licenses/LICENSE-2.0.html"
#       }
#     }
#   }
# })