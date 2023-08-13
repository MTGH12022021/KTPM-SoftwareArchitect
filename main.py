from dotenv import load_dotenv
load_dotenv()

from src.main import app

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')

