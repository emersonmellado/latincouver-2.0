# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170604074243) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "configurations", force: :cascade do |t|
    t.string   "main_title"
    t.integer  "css_style_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "css_styles", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.string   "image_url"
    t.string   "external_url"
    t.string   "longitude"
    t.string   "latitude"
    t.boolean  "active"
    t.integer  "css_style_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "description"
    t.integer  "order"
    t.string   "short_description"
    t.index ["css_style_id"], name: "index_events_on_css_style_id", using: :btree
  end

  create_table "plazas", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "image_url"
    t.string   "longitude"
    t.string   "latitude"
    t.boolean  "active"
    t.integer  "css_style_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "event_id"
    t.index ["css_style_id"], name: "index_plazas_on_css_style_id", using: :btree
    t.index ["event_id"], name: "index_plazas_on_event_id", using: :btree
  end

  create_table "schedules", force: :cascade do |t|
    t.datetime "from"
    t.datetime "to"
    t.integer  "trade_id"
    t.integer  "event_id"
    t.integer  "plaza_id"
    t.integer  "css_style_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["css_style_id"], name: "index_schedules_on_css_style_id", using: :btree
    t.index ["event_id"], name: "index_schedules_on_event_id", using: :btree
    t.index ["plaza_id"], name: "index_schedules_on_plaza_id", using: :btree
    t.index ["trade_id"], name: "index_schedules_on_trade_id", using: :btree
  end

  create_table "settings", force: :cascade do |t|
    t.string   "main_title"
    t.integer  "css_style_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "trade_groups", force: :cascade do |t|
    t.string   "name"
    t.boolean  "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trade_links", force: :cascade do |t|
    t.string   "name"
    t.string   "href"
    t.boolean  "active"
    t.string   "icon"
    t.integer  "trade_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trade_id"], name: "index_trade_links_on_trade_id", using: :btree
  end

  create_table "trade_products", force: :cascade do |t|
    t.string   "name"
    t.boolean  "active"
    t.integer  "trade_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trade_id"], name: "index_trade_products_on_trade_id", using: :btree
  end

  create_table "trade_types", force: :cascade do |t|
    t.string   "name"
    t.boolean  "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trades", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.text     "short_description"
    t.string   "order"
    t.string   "image_url"
    t.boolean  "active"
    t.integer  "trade_type_id"
    t.integer  "trade_group_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "event_id"
    t.integer  "plaza_id"
    t.integer  "css_style_id"
    t.index ["css_style_id"], name: "index_trades_on_css_style_id", using: :btree
    t.index ["event_id"], name: "index_trades_on_event_id", using: :btree
    t.index ["plaza_id"], name: "index_trades_on_plaza_id", using: :btree
    t.index ["trade_group_id"], name: "index_trades_on_trade_group_id", using: :btree
    t.index ["trade_type_id"], name: "index_trades_on_trade_type_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "provider",               default: "email", null: false
    t.string   "uid",                    default: "",      null: false
    t.string   "encrypted_password",     default: "",      null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,       null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "email"
    t.json     "tokens"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.string   "type"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree
  end

  add_foreign_key "events", "css_styles"
  add_foreign_key "plazas", "css_styles"
  add_foreign_key "plazas", "events"
  add_foreign_key "schedules", "css_styles"
  add_foreign_key "schedules", "events"
  add_foreign_key "schedules", "plazas"
  add_foreign_key "schedules", "trades"
  add_foreign_key "trade_links", "trades"
  add_foreign_key "trade_products", "trades"
  add_foreign_key "trades", "css_styles"
  add_foreign_key "trades", "events"
  add_foreign_key "trades", "plazas"
  add_foreign_key "trades", "trade_groups"
  add_foreign_key "trades", "trade_types"
end
