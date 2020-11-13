class LocationsController < ApplicationController
  def index
    locations = Location.all
    render json: locations, except: [:updated_at, :created_at]
  end

  def create
    location = Location.new(location_params)

    if location.save
      render json: location, status: :created, location: location
    else
      render json: location.errors, status: :unprocessable_entity
    end
  end

  private
    def location_params
      params.require(:location).permit(:name)
    end

end
