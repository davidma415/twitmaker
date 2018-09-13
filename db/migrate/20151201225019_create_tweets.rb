class CreateTweets < ActiveRecord::Migration[4.2]
  def change
    create_table :tweets do |t|
      t.text :message

      t.timestamps null: false
    end
  end
end
