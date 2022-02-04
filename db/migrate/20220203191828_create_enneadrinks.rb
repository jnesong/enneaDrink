class CreateEnneadrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :enneadrinks do |t|
      t.string :drink
      t.integer :number
      t.string :title
      t.string :emoji
      t.text :about
      t.text :strengths
      t.text :weaknesses

      t.timestamps
    end
  end
end
