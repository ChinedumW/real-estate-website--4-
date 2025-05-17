from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Email, Length, EqualTo, ValidationError
import re

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[
        DataRequired(message="Email is required"),
        Email(message="Please enter a valid email address")
    ])
    password = PasswordField('Password', validators=[
        DataRequired(message="Password is required")
    ])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Log In')

class SignupForm(FlaskForm):
    username = StringField('Username', validators=[
        DataRequired(message="Username is required"),
        Length(min=3, max=64, message="Username must be between 3 and 64 characters")
    ])
    email = StringField('Email', validators=[
        DataRequired(message="Email is required"),
        Email(message="Please enter a valid email address")
    ])
    password = PasswordField('Password', validators=[
        DataRequired(message="Password is required"),
        Length(min=8, message="Password must be at least 8 characters long")
    ])
    confirm_password = PasswordField('Confirm Password', validators=[
        DataRequired(message="Please confirm your password"),
        EqualTo('password', message="Passwords must match")
    ])
    submit = SubmitField('Sign Up')
    
    def validate_password(self, password):
        """Validate password complexity"""
        pwd = password.data
        
        # Check for at least one lowercase letter
        if not re.search(r'[a-z]', pwd):
            raise ValidationError('Password must contain at least one lowercase letter')
        
        # Check for at least one uppercase letter
        if not re.search(r'[A-Z]', pwd):
            raise ValidationError('Password must contain at least one uppercase letter')
        
        # Check for at least one digit
        if not re.search(r'\d', pwd):
            raise ValidationError('Password must contain at least one number')
        
        # Check for at least one special character
        if not re.search(r'[!@#$%^&*(),.?":{}|<>]', pwd):
            raise ValidationError('Password must contain at least one special character')

class PasswordResetRequestForm(FlaskForm):
    email = StringField('Email', validators=[
        DataRequired(message="Email is required"),
        Email(message="Please enter a valid email address")
    ])
    submit = SubmitField('Request Password Reset')

class PasswordResetForm(FlaskForm):
    password = PasswordField('New Password', validators=[
        DataRequired(message="Password is required"),
        Length(min=8, message="Password must be at least 8 characters long")
    ])
    confirm_password = PasswordField('Confirm New Password', validators=[
        DataRequired(message="Please confirm your password"),
        EqualTo('password', message="Passwords must match")
    ])
    submit = SubmitField('Reset Password')
    
    def validate_password(self, password):
        """Validate password complexity"""
        pwd = password.data
        
        # Check for at least one lowercase letter
        if not re.search(r'[a-z]', pwd):
            raise ValidationError('Password must contain at least one lowercase letter')
        
        # Check for at least one uppercase letter
        if not re.search(r'[A-Z]', pwd):
            raise ValidationError('Password must contain at least one uppercase letter')
        
        # Check for at least one digit
        if not re.search(r'\d', pwd):
            raise ValidationError('Password must contain at least one number')
        
        # Check for at least one special character
        if not re.search(r'[!@#$%^&*(),.?":{}|<>]', pwd):
            raise ValidationError('Password must contain at least one special character')
