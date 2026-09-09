from collections import defaultdict

def count_reservations_by_room_type(reservations, default_label="Unknown"):
    """
    Count hotel reservations grouped by room type.

    Args:
        reservations: list of dicts, each representing a reservation.
                       Expected to optionally have a 'room_type' key.
        default_label: label used when room_type is missing, None, or blank.

    Returns:
        dict mapping room_type -> count of reservations.
    """
    counts = defaultdict(int)

    for reservation in reservations:
        if not isinstance(reservation, dict):
            # Skip malformed entries instead of crashing
            continue

        room_type = reservation.get("room_type")

        # Handle None, missing key, empty string, or whitespace-only strings
        if not room_type or not str(room_type).strip():
            room_type = default_label
        else:
            room_type = str(room_type).strip()

        counts[room_type] += 1

    return dict(counts)