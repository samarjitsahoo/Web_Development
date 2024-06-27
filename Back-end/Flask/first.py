from flask import Flask  #Importing Flask Class from Flask Module
app = Flask(__name__)   #Defining an App

@app.route("/")   #Creating an Endpoint to run the following function
def hello():
    return "Hello World"

@app.route("/harry")   #Creating an Endpoint to run the following function whenever someone go to that endpoint
def harry():
    return "Hello Harry Bhai"

app.run(debug=True)   #Flask App running on Local Host
#debug=True automatically detects the change and reloads
#Fact - template folder is Private by Flask
#Fact - static folder is Public by Flask
#Fact - Flask(Backend) with Bootstrap(Frontend)