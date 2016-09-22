require 'sinatra/base'
require 'securerandom'
require 'json'

DB = {}

# Authorization
#
# Add a header `Username: your-username` to authenticate calls to the API
#
# POST /events - save a new event
#   Parameters
#     name: required
#     date: optional
#   Returns { "id": ..., "name": ..., "date": ... }
# PUT  /events - update an event
#   Same as create
# GET  /events/:id   - see one event
# GET  /events       - see a list of all events
# DELETE /events/:id - remove one event

class App < Sinatra::Base
  def username
    if username = request.env["HTTP_USERNAME"]
      username
    else
      halt "You must supply a Username header"
    end
  end

  def events
    DB[ username ] ||= {}
  end

  def parse_date d
    return unless d
    Date.parse(d)
  end

  post "/events" do
    event = {
      id:   SecureRandom.uuid,
      name: params[:name],
      date: parse_date(params[:date])
    }
    events[ event[:id] ] = event
    event.to_json
  end

  get "/events" do
    events.values.to_json
  end

  get "/events/:id" do
    events[ params[:id] ].to_json
  end

  put "/events/:id" do
    event = {
      id:   params[:id],
      name: params[:name],
      date: parse_date(params[:date])
    }
    events[ params[:id] ] = event
    event.to_json
  end

  delete "/events/:id" do
    events.delete(params[:id]).to_json
  end
end

App.run!
