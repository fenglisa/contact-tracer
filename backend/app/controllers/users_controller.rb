class UsersController < ApplicationController
  def show
    user = User.find_by_id(params[:id])
    render json: user, except: [:updated_at, :created_at]
  end

  private
    def set_user
      @user = User.find_by_id(params[:id])
    end
end
