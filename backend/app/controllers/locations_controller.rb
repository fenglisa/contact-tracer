class LocationsController < ApplicationController
  def index
    locations = Location.all
    render json: locations, except: [:updated_at, :created_at]
  end
end
