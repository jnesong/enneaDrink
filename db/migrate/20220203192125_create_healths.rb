class CreateHealths < ActiveRecord::Migration[6.1]
  def change
    create_table :healths do |t|
      t.belongs_to :enneadrink, null: false, foreign_key: true
      t.integer :level
      t.text :description

      t.timestamps
    end
  end
end
