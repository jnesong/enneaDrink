class CreateJourneys < ActiveRecord::Migration[6.1]
  def change
    create_table :journeys do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :date
      t.string :drink
      t.integer :level
      t.text :entry

      t.timestamps
    end
  end
end
