from flask import Flask, jsonify, request

# Create an instance of Flask
app = Flask(__name__)

# Define a route for the root endpoint (GET request)
@app.route("/", methods=["GET"])
def hello():
    return "Hello, World! This is a GET request."

# Define a route for a custom endpoint to handle POST requests
@app.route("/data", methods=["POST"])
def receive_data():
    data = request.json  # Retrieve JSON data from the request body
    return jsonify({"message": "Data received successfully", "data": data})

# Define a route for a custom endpoint to handle PUT requests
@app.route("/update", methods=["PUT"])
def update_data():
    data = request.json  # Retrieve JSON data from the request body
    # Perform update operation here
    return jsonify({"message": "Data updated successfully", "data": data})

# Define a route for a custom endpoint to handle GET requests with query parameters
@app.route("/greet", methods=["GET"])
def greet():
    name = request.args.get("name")  # Retrieve query parameter
    return f"Hello, {name}! This is a GET request with query parameters."

if __name__ == "__main__":
    # Run the Flask application
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=8000, debug=True)
