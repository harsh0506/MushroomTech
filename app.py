from flask_cors import CORS
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the saved models
saved_models = {
    "random_forest": joblib.load("random_forest_model.pkl"),
    "logistic_regression": joblib.load("logistic_regression_model.pkl"),
    # Add other model filenames and corresponding keys here
}
columns = ['odor', 'spore-print-color', 'gill-color',
           'stalk-surface-above-ring', 'stalk-surface-below-ring', 'ring-type']
# Define the API route for making predictions


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # JSON payload with input data
    # Extract features from the input data
    x = [data[column] for column in columns]
    # Reshape features to match the model's input shape
    x = np.array(x).reshape(1, -1)

    # Make predictions using each saved model
    predictions = {}
    for model_name, model in saved_models.items():
        y_pred = model.predict(x)
        predictions[model_name] = int(y_pred[0])

    print(predictions)
    return jsonify(predictions)


if __name__ == '__main__':
    app.run()
    predict({
    "odor": 2,
    "spore-print-color": 3,
    "gill-color": 1,
    "stalk-surface-above-ring": 2,
    "stalk-surface-below-ring": 3,
    "ring-type": 2
    })

{'class': {'e': 0, 'p': 1},
 'odor': {'a': 0, 'c': 1, 'f': 2, 'l': 3, 'm': 4, 'n': 5, 'p': 6, 's': 7, 'y': 8},
'spore-print-color': {'b': 0, 'h': 1, 'k': 2, 'n': 3, 'o': 4, 'r': 5, 'u': 6, 'w': 7, 'y': 8},
 'gill-color': {'b': 0, 'e': 1, 'g': 2, 'h': 3, 'k': 4, 'n': 5, 'o': 6, 'p': 7, 'r': 8, 'u': 9, 'w': 10, 'y': 11},
 'stalk-surface-above-ring': {'f': 0, 'k': 1, 's': 2, 'y': 3},
 'stalk-surface-below-ring': {'f': 0, 'k': 1, 's': 2, 'y': 3},
 'ring-type': {'e': 0, 'f': 1, 'l': 2, 'n': 3, 'p': 4}}
