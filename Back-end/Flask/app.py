from flask import Flask,render_template  #Importing Flask Class from Flask Module
app = Flask(__name__)   #Defining an App

@app.route("/")   
def hello():
    return "Hello World"

@app.route("/bootstrap")   
def bootstrap():
    return render_template("bootstrap.html")

app.run(debug=True)