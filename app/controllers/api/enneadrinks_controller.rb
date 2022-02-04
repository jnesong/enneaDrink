class Api::EnneadrinksController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show]

    def index
        render json: Enneadrink.all
    end

    def show
        enneadrink = Enneadrink.find_by(id: params[:id])
        if enneadrink
            render json: enneadrink
        else
            render json: {error: "Enneadrink not found. 🥲"}, status: :not_found
        end
    end

end
