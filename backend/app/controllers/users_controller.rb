class UsersController < ApplicationController
  def show
    user = User.find_by_id(params[:id])
    render json: user, except: [:updated_at, :created_at]
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:email)
    end

    # def set_user
    #   user = User.find_by_id(params[:id])
    # end
end
