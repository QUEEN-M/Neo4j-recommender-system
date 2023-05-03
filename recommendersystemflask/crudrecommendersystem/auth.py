import csv
import uuid
from flask import Flask,request,jsonify,redirect,render_template,session
from neo4j import GraphDatabase
from flask_cors import CORS
from werkzeug.security import generate_password_hash,check_password_hash

from datetime import datetime, timedelta

with open("cred.txt") as f1:
    data=csv.reader(f1,delimiter=',')
    for row in data:
        username=row[0]
        pwd=row[1]
        uri=row[2]
    print(username,pwd,uri)
    driver=GraphDatabase.driver(uri=uri,auth=(username,pwd))
    session=driver.session()
    app=Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = 'secretkey'
    @app.route("/admin",methods=["POST"])
    def post():
        data = request.get_json()
        name = data["name"]
        password = data["password"]
        email=data["email"]
        public_id=str(uuid.uuid4())
        hashed_pass=generate_password_hash(password,method='sha256')
        q = """
            CREATE (n:Admin {public_id: $public_id ,name: $name, password: $password, email: $email})
            RETURN n.public_id as id, n.name as name,  n.password as password, n.email as email
        """
        result = session.run(q, {"public_id":public_id, "name": name, "password": hashed_pass, "email": email})
        data = result.data()
        return jsonify(data) 
    @app.route("/adminsdisplay",methods=["GET"])
    def get():
        q1="""
            match (n:Admin) return n.public_id as id, n.name as name, n.password as password, n.email as email
        """
        results=session.run(q1)
        data=results.data()
        return jsonify(data) 

    @app.route("/deleteadmin/<email>",methods=["DELETE"])
    def delete(email):
        q1="""
            match (n:Admin{email:$email}) delete n
        """
        x={"email":email}
        result=session.run(q1,x)
        return jsonify(success=True)
    
    @app.route('/login', methods=['POST'])
    def login():
        data = request.get_json()
        email = data["email"]
        password = data["password"]
        result = session.run('MATCH (u:Admin {email: $email}) RETURN u',
                            email=email)
        user=result.single().get("u")
        results=session.run('MATCH (u:Admin {email: $email}) RETURN u.name as name, u.email as email ,u.password as password',email=email)
        data=results.data()
        if not user :
            return {'message': 'user not found.'}, 401
        if check_password_hash(user['password'], password):
            
            #return {'message': 'Logged in.'}, 200 
            return jsonify(data)
        return {'message': 'Incorrect password.'},401
           
        


if __name__=="__main__":
        app.run(port=5030)