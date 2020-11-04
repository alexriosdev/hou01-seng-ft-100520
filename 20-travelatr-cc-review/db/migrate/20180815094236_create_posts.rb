class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.integer :likes
      t.references :blogger
      t.references :destination

      t.timestamps
    end
  end
end
