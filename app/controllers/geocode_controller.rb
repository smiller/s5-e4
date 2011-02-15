class GeocodeController < ApplicationController
  
  def show
    @geocoded = Geokit::Geocoders::YahooGeocoder.geocode params[:location]
    render :json => @geocoded
  end
  
end