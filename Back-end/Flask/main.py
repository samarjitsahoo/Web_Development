from flask import Flask,render_template
app = Flask(__name__)

@app.route("/")   #Creating an Endpoint to run the following function
def hello():
    return render_template("index.html")

@app.route("/about")   #Creating an Endpoint to run the following function whenever someone go to that endpoint
def harry():
    name="Samarjit"
    return render_template("about.html", name_template=name)

app.run(debug=True)   #Flask App running on Local Host
#debug=True automatically detects the change and reloads
#Fact - template folder is Private by Flask
#Fact - static folder is Public by Flask