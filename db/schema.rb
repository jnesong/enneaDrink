# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_03_192205) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "enneadrinks", force: :cascade do |t|
    t.string "drink"
    t.integer "number"
    t.string "title"
    t.string "emoji"
    t.text "about"
    t.text "strengths"
    t.text "weaknesses"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "healths", force: :cascade do |t|
    t.bigint "enneadrink_id", null: false
    t.integer "level"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["enneadrink_id"], name: "index_healths_on_enneadrink_id"
  end

  create_table "journeys", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "date"
    t.string "drink"
    t.integer "level"
    t.text "entry"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_journeys_on_user_id"
  end

  create_table "practices", force: :cascade do |t|
    t.bigint "enneadrink_id", null: false
    t.string "title"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["enneadrink_id"], name: "index_practices_on_enneadrink_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "displayname"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "healths", "enneadrinks"
  add_foreign_key "journeys", "users"
  add_foreign_key "practices", "enneadrinks"
end
