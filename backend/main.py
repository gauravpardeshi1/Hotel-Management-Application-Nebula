
from flask import Flask
from pymongo import MongoClient
from flask import Flask, request
from flask_cors import CORS
from flask import jsonify

from bson.objectid import ObjectId

        
app = Flask(__name__)
CORS(app)
client = MongoClient("mongodb+srv://gaurav:pardeshi@cluster0.naivyl2.mongodb.net/ga201?retryWrites=true&w=majority")
db = client["ga201"]
class User: # also this will be diffrent according to the project
    def __init__(self, name, email):
        self._id = ObjectId()
        self.name = name
        self.email = email

def add_user(user_data):
    users_collection = db["users"]  #   new collection will be there according to the project
    user = User(user_data["name"], user_data["email"])
    user_data = {           # data will be diffrent
        "_id": user._id, 
        "name": user.name,
        "email": user.email
    }
    users_collection.insert_one(user_data)
    
@app.route("/")
def home():
    
 return "Welcome to Python Projects"

@app.route('/hosts', methods=['GET'])
def get_hosts():
    hosts = db.hosts.find()
    host_list = []
    for host in hosts:
        host_list.append({
            'id': str(host['_id']),
            'name': host['name'],
            'location': host['location'],
            'property': host['property'],
            'active': host['active']
        })
    return jsonify(host_list)

@app.route('/hosts', methods=['POST'])
def create_host():
    data = request.get_json()
    name = data.get('name')
    location=data.get('location')
    property=data.get('property')
    active=data.get('active')

    host = {
        'name': name,
        'location':location,
        'property':property,
        'active':active
        
    }

    inserted_host = db.hosts.insert_one(host)

    return jsonify({'message': 'Host created successfully', 'id': str(inserted_host.inserted_id)})


@app.route('/users', methods=['GET'])
def get_users():
    users = db.users.find()
    user_list = []
    for user in users:
        user_list.append({
            'id': str(user['_id']),
            'name': user['name'],
            'email': user['email'],
            'password': user['password']
           
        })
    return jsonify(user_list)

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    name = data.get('name')
    email=data.get('email')
    password=data.get('password')
   

    user = {
        'name': name,
        'email':email,
        'password':password,
       
        
    }

    inserted_user = db.users.insert_one(user)

    return jsonify({'message': 'Sign Up successfully', 'id': str(inserted_user.inserted_id)})


# Guest Management
@app.route('/booking', methods=['GET'])
def get_guests():
    guests = db.guests.find()
    guest_list = []
    for guest in guests:
        guest_list.append({
            'id': str(guest['_id']),
            'name': guest['name'],
            'gender':guest['gender'],
            'date':guest['date'],
            'hotel_name':guest['hotel_name'],
            'hotel_price':guest['hotel_price'],
            'hotel_location':guest['hotel_location']    
           
        })
    return jsonify(guest_list)

@app.route('/booking', methods=['POST'])
def create_guest():
    data = request.get_json()

    name = data.get('name')
    gender= data.get('gender')
    date= data.get('date')
    hotel_name=data.get('hotel_name')
    hotel_price=data.get('hotel_price')
    hotel_location=data.get('hotel_location')

    guest = {
        'name': name,
        'gender':gender,
        'date':date,
        'hotel_name':hotel_name,
        'hotel_price':hotel_price,
        'hotel_location':hotel_location
    }

    inserted_guest = db.guests.insert_one(guest)

    return jsonify({'message': 'Guest created successfully', 'id': str(inserted_guest.inserted_id)})

@app.route('/booking/<string:document_id>', methods=['DELETE'])
def delete_document(document_id):
    try:
        result = db.guests.delete_one({'_id': ObjectId(document_id)})
        if result.deleted_count > 0:
            return jsonify({'message': 'Document deleted successfully.'}), 200
        else:
            return jsonify({'message': 'Document not found.'}), 404
    except Exception as e:
        return jsonify({'message': f'Error: {str(e)}'}), 500

# # Booking Management
# @app.route('/bookings', methods=['POST'])
# def create_booking():
#     data = request.get_json()
#     guest_id = data.get('guest_id')
#     property_id = data.get('property_id')
#     check_in = data.get('check_in')
#     check_out = data.get('check_out')

#     booking = {
#         'guest_id': guest_id,
#         'property_id': property_id,
#         'check_in': check_in,
#         'check_out': check_out
#     }

#     inserted_booking = mongo.db.bookings.insert_one(booking)

#     return jsonify({'message': 'Booking created successfully', 'id': str(inserted_booking.inserted_id)})


# # Property Listing
# @app.route('/properties', methods=['GET'])
# def get_properties():
#     location = request.args.get('location')
#     property_type = request.args.get('type')
#     host_id = request.args.get('host_id')

#     properties = mongo.db.properties.find()

#     if location:
#         properties = properties.filter({'location': location})
#     if property_type:
#         properties = properties.filter({'type': property_type})
#     if host_id:
#         properties = properties.filter({'host_id': host_id})

#     property_list = []
#     for property in properties:
#         property_list.append({
#             'id': str(property['_id']),
#             'name': property['name'],
#             'location': property['location'],
#             'type': property['type'],
#             'host_id': property['host_id']
#         })
#     return jsonify(property_list)


if __name__ == '__main__':
    app.run(debug=True)
