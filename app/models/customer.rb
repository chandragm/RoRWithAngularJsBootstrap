class Customer < ApplicationRecord
    validates :name, :street, :city, :post_code, :email, presence: true
    validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

    def self.search(query)
        q = "%#{query}%"
        self.where('name LIKE :query OR
                    email LIKE :query OR
                    street LIKE :query OR
                    post_code LIKE :query OR
                    city LIKE :query', query: q)
    end
end
