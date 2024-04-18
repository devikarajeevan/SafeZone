import math

def haversine(lat1, lon1, lat2, lon2):
    """
    Calculate the great circle distance between two points
    on the Earth's surface given their latitudes and longitudes
    in decimal degrees.
    """
    # Convert decimal degrees to radians
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])

    # Haversine formula
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2

    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    r = 6371  # Radius of Earth in kilometers
    distance = r * c

    return distance

def is_within_radius(center_lat, center_lon, coordinates, radius):
    """
    Check if each coordinate in the set is within a specified radius
    of a given center coordinate.
    """
    within_radius_list = []
    for coord in coordinates:
        distance = haversine(center_lat, center_lon, coord[0], coord[1])
        within_radius = distance <= radius
        within_radius_list.append(within_radius)
    return within_radius_list

# Example usage:
# center_latitude = 10.5559 
# center_longitude = 76.2246
# coordinates = [
#     (10.5244, 76.2136),
#     (10.5228, 76.2244),
#     (10.3170, 76.3262),
#     (10.6045, 76.2641)
# ]
# radius = 10  # Radius in kilometers

# within_radius_list = is_within_radius(center_latitude, center_longitude, coordinates, radius)
# for i, coord in enumerate(coordinates):
#     print(f"Coordinate {i+1} within radius:", within_radius_list[i])
