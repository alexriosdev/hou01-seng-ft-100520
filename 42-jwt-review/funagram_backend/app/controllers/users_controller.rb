class UsersController < ApplicationController

  def create
    @user = User.new(users_params)

    if @user.valid?
      @user.save
      
      payload = { user_id: @user.id }
      token = JWT.encode(payload,'Phase4')

      render json: { auth_key: token }, :status => :ok
    else
      render json: { :msg => "Not a valid user.."}
    end
  end

  private
  def users_params
    params.require(:user).permit(:username,:password)
  end

end
