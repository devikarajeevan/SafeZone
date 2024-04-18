import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from distance import is_within_radius


cred = credentials.Certificate("disaster.json")
firebase_admin.initialize_app(cred)
from flask import Flask , request , jsonify


db = firestore.client()

app = Flask(__name__)


@app.route('/home-seeker',methods=['POST'])
def home_seeker():
    data=request.json
    name=data.get('name')
    address=data.get('address')
    gender=data.get('gender')
    pincode=data.get('coordinates')
    desc=data.get('desc')
    accomodation_req=data.get('accomodation_req')
    phone_no=data.get('phone_no')
    aadhar_no=data.get('aadhar_no')


    data = {
    'name': name,
    'address': address,
    'gender': gender,
    'coordinates':pincode,
    'desc':desc,
    'accomodation_req':accomodation_req,
    'phone_no':phone_no,
    'aadhar_no':aadhar_no
}

# Add the data to the collection with a generated document ID
    
    if not (name and address and gender and pincode and desc and accomodation_req and phone_no and  aadhar_no):
        return jsonify({'error': 'Incomplete data'}), 400

    ref = db.collection('seeker').add(data)
    return jsonify({'message': ' added successfully'}), 201
    
@app.route('/home-provider',methods=['POST'])
def home_provider():
    print("helo")
    data=request.json
    name=data.get('name')
    address=data.get('address')
    gender=data.get('gender')
    pincode=data.get('coordinates')
    desc=data.get('desc')
    accomodation_avl=data.get('accomodation_avl')
    phone_no=data.get('phone_no')
    aadhar_no=data.get('aadhar_no')
    caution_deposit=data.get('caution_deposit')


    data = {
    'name': name,
    'address': address,
    'gender': gender,
    'coordinates':pincode,
    'desc':desc,
    'accomodation_avl':accomodation_avl,
    'phone_no':phone_no,
    'aadhar_no':aadhar_no,
    'caution_deposit':caution_deposit
}

# Add the data to the collection with a generated document ID
    
    if not (name and address and gender and pincode and desc and accomodation_avl and phone_no and  aadhar_no and caution_deposit):
        return jsonify({'error': 'Incomplete data'}), 400

    ref = db.collection('provider').add(data)
    return jsonify({'message': 'added successfully'}), 201

# @app.route('/supplies',methods=['POST'])
@app.route('/count', methods=['POST'])
def count():
    data = request.json
    name = data.get('name')

    if not name:
        return jsonify({'error': 'Incomplete data'}), 400

    # Add the data to the collection with a generated document ID
    ref = db.collection('camp').where('name','==',name).get()
    documents = [doc.to_dict() for doc in ref]
    # Retrieve all documents from the collection
    return documents

@app.route('/test', methods=['GET'])
def test():
    print("hello")

@app.route('/supplies', methods=['POST'])
def supplies():
    db = firestore.client()
    print("bbb")
    name = request.form.get('name')
    print(name)

    if not name:
        return jsonify({'error': 'Incomplete data'}), 400

    # Query documents based on the name
    ref = db.collection('camp').where('camp_name', '==', name).get()
    print(ref)
    documents = [doc.to_dict() for doc in ref]

    return jsonify(documents)
@app.route('/compare_coordinates', methods=['POST'])
def compare_coordinates():
    # Get latitude and longitude from request data
    data = request.json
    print(data)
    coordinates_str = data.get('coordinates')
    if not coordinates_str:
        return jsonify({'error': 'No coordinates provided'}), 400
    print(coordinates_str)
    lat_str, lon_str = coordinates_str.split(',')
    latitude = float(lat_str)
    longitude = float(lon_str)
    print(latitude)
    print(longitude)
    # Retrieve documents from Firestore collection
    collection_ref = db.collection('seeker')
    docs = collection_ref.stream()

    # Compare coordinates with stored documents
    matched_documents = []
    for doc in docs:
        doc_data = doc.to_dict()
        doc_coordinates = doc_data.get('coordinates')
        doc_lat_str, doc_lon_str = doc_coordinates.split(',')
        doc_latitude = float(doc_lat_str)
        doc_longitude = float(doc_lon_str)
        if is_within_radius(latitude, longitude, [(doc_latitude, doc_longitude)],10):  # Adjust radius as needed
            matched_documents.append(doc_data)

    return jsonify({'matched_documents': matched_documents}), 200

@app.route('/camp-form',methods=['POST'])
def camp_form():
    data=request.json
    children=data.get('children')
    elderly=data.get('elderly')
    men=data.get('men')
    women=data.get('women')
    camp_name=data.get('camp_name')
    mineral_water=data.get('mineral_water')
    sanitary_napkins=data.get('sanitary_napkins')
    first_aid=data.get('first_aid')
    ration=data.get('ration')
    

    data = {
    'children': children,
    'elderly': elderly,
    'men': men,
    'women':women,
    'mineral_water':mineral_water,
    'sanitary_napkins':sanitary_napkins,
    'first_aid':first_aid,
    'ration':ration
    }

# Add the data to the collection with a generated document ID
    
    if not (children and elderly and men and women and mineral_water and sanitary_napkins and first_aid and ration):
        return jsonify({'error': 'Incomplete data'}), 400

    ref = db.collection('camp').add(data)
    return jsonify({'message': 'added successfully'}), 201

@app.route('/supply-truck',methods=['POST'])
def supply_truck():
    
    mineral_water=data.get('mineral_water')
    sanitary_napkins=data.get('sanitary_napkins')
    first_aid=data.get('first_aid')
    ration=data.get('ration')
    additional_items=data.get('additional_items')

    data = {
    'mineral_water':mineral_water,
    'sanitary_napkins':sanitary_napkins,
    'first_aid':first_aid,
    'ration':ration,
    'additional_items':additional_items
    }

# Add the data to the collection with a generated document ID
    
    if not ( mineral_water and sanitary_napkins and first_aid and ration and additional_items):
        return jsonify({'error': 'Incomplete data'}), 400

    ref = db.collection('truck').add(data)
    return jsonify({'message': 'added successfully'}), 201


if __name__ == '__main__':
    app.run(debug=True)


