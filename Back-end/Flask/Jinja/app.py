from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Data to be passed to the template
    title = "Jinja Template Example"
    items = ["Apple", "Banana", "Cherry", "Date"]
    user = {
        'name': 'John Doe',
        'email': 'john@example.com',
        'is_admin': True
    }
    scores = [80, 95, 78, 92]

    # Render the template with data
    return render_template('template.jinja', title=title, items=items, user=user, scores=scores)

if __name__ == '__main__':
    app.run(debug=True)
