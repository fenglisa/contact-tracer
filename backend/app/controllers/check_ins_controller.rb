class CheckInsController < ApplicationController
  def index
    check_ins = CheckIn.all
    render json: check_ins, include: [:user => {:only => [:email]}, :location => {:only => [:name]}], except: [:updated_at]

    # render json: check_ins.to_json(:include => {
    #   :user => {:only => [:email]},
    #   :location => {:only => [:name]}
    # }, :except => [:updated_at])

    # render json: check_ins, include: [:user, :location]
  end
end
