class PostsController < ApplicationController

  def index
    @posts = Post.all
    render json: @posts.to_json(
        except: [ :user_id, :created_at, :updated_at ],
        include: { user: { only: :username } }
    ), :status => :ok
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post.user != current_user
      render json: { msg: "STOP! IT IS NOT YOUR PROPERTY."}
    else
      @post.destroy
      render json: { msg: "Post was deleted.." }
    end
  end

  private
  def post_params
    params.require(:post).permit(:title,:img,:likes)
  end
end
