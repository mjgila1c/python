attendees = ["ken", "Alnea", "treasure"]
attendees.append("Ashley")
attendees.extend(["James", "Gil"])
optional_invitees = ["Ben", "Dave"]
potential_attendees = attendees + optional_invitees
print("There are", len(potential_attendees), "pontential attendees currently")
