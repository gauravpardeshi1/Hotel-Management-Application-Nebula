
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


# Guest Management
@app.route('/guests', methods=['GET'])
def get_guests():
    guests = db.guests.find()
    guest_list = []
    for guest in guests:
        guest_list.append({
            'id': str(guest['_id']),
            'name': guest['name'],
            'email': guest['email'],
            'gender':guest['gender'],          
        })
    return jsonify(guest_list)

@app.route('/guests', methods=['POST'])
def create_guest():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    gender= data.get('gender')
    date_of_birth= data.get('date_of_birth')

    guest = {
        'name': name,
        'email': email,
        'gender':gender,
        'date_of_birth':date_of_birth
    }

    inserted_guest = db.guests.insert_one(guest)

    return jsonify({'message': 'Guest created successfully', 'id': str(inserted_guest.inserted_id)})


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
