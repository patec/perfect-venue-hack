class V1::AnalyticsController < ApplicationController 
  def index 
    render json: { 
      analytics: { 
        name: 'test', 
        value: 'success'
      } 
    }
  end
end
