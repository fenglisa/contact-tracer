user_a = User.create(email: "mac123@gmail.com")
user_b = User.create(email: "456cam@gmail.com")


location_a = Location.create(name: "home")
location_b = Location.create(name: "out")


checkin_a = CheckIn.create(user: user_a, location: location_b)
checkin_b = CheckIn.create(user: user_a, location: location_a)
checkin_c = CheckIn.create(user: user_b, location: location_b)
