def count_reservations_by_room_type(reservations):
    counts = {}

    for reservation in reservations:
        room_type = reservation.get("room_type", "Unknown")

        # Handle empty or missing room types
        if not room_type:
            room_type = "Unknown"

        counts[room_type] = counts.get(room_type, 0) + 1

    return counts