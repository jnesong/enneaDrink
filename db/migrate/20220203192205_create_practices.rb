class CreatePractices < ActiveRecord::Migration[6.1]
  def change
    create_table :practices do |t|
      t.belongs_to :enneadrink, null: false, foreign_key: true
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
