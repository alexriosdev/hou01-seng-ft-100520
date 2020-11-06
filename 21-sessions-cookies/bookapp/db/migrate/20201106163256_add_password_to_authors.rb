class AddPasswordToAuthors < ActiveRecord::Migration[6.0]
  def change
    add_column :authors, :password, :string, default: 'password'
  end
end
