# Reload the browser automatically whenever files change
activate :livereload

###
# Compass
###
compass_config do |config|
  config.output_style = :compressed
end

###
# Helpers
###
helpers do
  def get_url
    absolute_prefix + url_prefix
  end
end

###
# Config
###
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :url_prefix, '/'
set :absolute_prefix, 'http://localhost:4567'

# Build-specific configuration
configure :build do
  puts "local build"
  set :http_prefix, "/image-builder"
  set :url_prefix, ""
  set :absolute_prefix, ""
  activate :asset_hash
  activate :minify_javascript
  activate :minify_css
end

activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
  # deploy.branch   = 'custom-branch' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end