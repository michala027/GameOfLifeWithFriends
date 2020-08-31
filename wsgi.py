from flask import Flask


def create_app():
    app = Flask(__name__)
    from webserver.routes import routes_bp
    app.register_blueprint(routes_bp)

    return app

app = create_app()

if __name__ == "__main__": 
        app.run(debug=True) 