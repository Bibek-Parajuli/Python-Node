import requests

url = 'http://localhost:3000/data'

# Data to be sent to the Node.js server
data = {
    'name': 'John Doe',
    'age': 30,
    'occupation': 'Software Developer'
}

# Send data to the server
response = requests.post(url, json=data)

# Print the server's response
print('Response from Node.js server:', response.json())
