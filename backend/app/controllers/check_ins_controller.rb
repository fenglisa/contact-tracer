class CheckInsController < ApplicationController
  def index
    check_ins = CheckIn.all
    render json: check_ins, include: [:user => {:only => [:email]}, :location => {:only => [:name]}], except: [:user_id, :location_id, :updated_at]

    # render json: check_ins.to_json(:include => {
    #   :user => {:only => [:email]},
    #   :location => {:only => [:name]}
    # }, :except => [:updated_at])

    # render json: check_ins, include: [:user, :location]
  end

  def create
    user = User.find_or_create_by(email: params[:user][:email])
    location = Location.find_or_create_by(name: params[:location][:name])
    check_in = CheckIn.new(user: user, location: location )

    if check_in.save
      render json: check_in, include: [:user => {:only => [:email]}, :location => {:only => [:name]}], except: [:user_id, :location_id, :updated_at]
    else
      render json: {errors:  check_in.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
    # def check_in_params
    #   params.require(:check_in).permit(:user_id, :location_id)
    # end
end
