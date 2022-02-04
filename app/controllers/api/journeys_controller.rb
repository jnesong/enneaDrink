class Api::JourneysController < ApplicationController
    # before_action :authenticate_user
    # skip_before_action :authenticate_user, only: [:index]

    def index
        render json: @current_user.journeys.all
        # render json: Journey.all
    end

    def show 
        journey = find_journey
        render json: journey
    end

    def create
        new_journey = @current_user.journeys.create!(journey_params)
        # new_journey = Journey.create!(journey_params)
        render json: new_journey, status: :created 
    end
    
    def update 
        past_journey = find_journey
        past_journey.update!(journey_params)
        render json: past_journey
    end

    def destroy 
        goodbye_journey = find_journey
        goodbye_journey.destroy
        head :no_content
    end

    private 

    def find_journey
        Journey.find(params[:id])
    end

    def journey_params 
        params.permit(:date, :drink, :level, :entry)
    end
end
