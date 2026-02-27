from models import User

import pytest

from main import app as flask_app
from models import db

@pytest.fixture
def app():
    flask_app.config.update(
        {
            'TESTING': True,
            'SQLALCHEMY_DATABASE_URI': f'sqlite:///:memory:',
        }
    )

    with flask_app.app_context():
        db.drop_all()
        db.create_all()

    return flask_app

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def app_context(app):
    with app.app_context():
        yield

def test_check_correct_password():
    user = User()
    user.set_password("testpassword")
    assert user.check_password("testpassword") == True

def test_check_incorrect_password():
    user = User()
    user.set_password("testpassword")
    assert user.check_password("testpassworx") == False