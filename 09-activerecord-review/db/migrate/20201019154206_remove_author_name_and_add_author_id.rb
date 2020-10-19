class RemoveAuthorNameAndAddAuthorId < ActiveRecord::Migration[6.0]
  def change

    remove_column :books, :author_name, :string
    add_column :books, :author_id, :integer

  end
end
