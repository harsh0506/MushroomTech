# Use the official Python base image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the Flask application code
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir flask joblib numpy gunicorn scikit-learn flask-cors

# Copy the machine learning model file
COPY models/random_forest_model.pkl /app/random_forest_model.pkl
COPY models/logistic_regression_model.pkl /app/logistic_regression_model.pkl

# Expose the port your Flask application will run on
EXPOSE 80

# Define the command to run your Flask application using Gunicorn
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:80"]
