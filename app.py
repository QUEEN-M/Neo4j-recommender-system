import csv
from flask import Flask,request,jsonify,redirect,render_template
from neo4j import GraphDatabase
from flask_cors import CORS

with open("cred.txt") as f1:
    data=csv.reader(f1,delimiter=',')
    for row in data:
        username=row[0]
        pwd=row[1]
        uri=row[2]
    driver=GraphDatabase.driver(uri=uri,auth=(username,pwd))
    session=driver.session()
    app=Flask(__name__)
    CORS(app)
    @app.route("/patients",methods=["POST"])
    def post():
        data = request.get_json()
        name = data["name"]
        id = data["id"]
        age=data["age"]
        tel=data["tel"]
        q = """
            CREATE (n:Patient {NAME: $name, ID: $id, AGE: $age, TEL: $tel})
            RETURN n.NAME as NAME, n.ID as ID, n.AGE as AGE, n.TEL as TEL
        """
        result = session.run(q, {"name": name, "id": id, "age": age, "tel": tel})
        data = result.data()
        return jsonify(data)
    @app.route("/display",methods=["GET"])
    def get():
        q1="""
            match (n:Patient) return n.NAME as NAME, n.ID as ID, n.AGE as AGE, n.TEL as TEL
        """
        results=session.run(q1)
        data=results.data()
        return jsonify(data)
    @app.route("/displaypat/<int:id>",methods=["GET"])  
    def display_patient(id):
        q1="""
            match(n:Patient{ID:$id}) return n.NAME as NAME, n.ID as ID, n.AGE as AGE, n.TEL as TEL
        """
        x={"id":id}
        results=session.run(q1,x)
        data=results.data()
        return jsonify(data)
    @app.route("/delete/<int:id>",methods=["DELETE"])
    def delete(id):
        q1="""
            match (n:Patient{ID:$id}) delete n
        """
        x={"id":id}
        result=session.run(q1,x)
        return jsonify(success=True)
    @app.route("/updatepatient/<id>", methods=["PUT"])
    def update_patient(id):
        data = request.get_json()
        name = data["name"]
        id=data["id"]
        age = data["age"]
        tel= data["tel"]
        q = """
            MATCH (n:Patient {ID: $id})
            SET n.NAME = $name, n.ID= $id, n.AGE =$age, n.TEL =$tel
            RETURN n.NAME as NAME, n.ID as ID, n.AGE as AGE, n.TEL as TEL
        """
        result = session.run(q, {"id": id, "name": name,"id": id,"age":age, "tel":tel})
        data = result.data()
        return jsonify(data)
    @app.route("/displaydoctors",methods=["GET"])
    def getdoctor():
        q1="""
            match (n:Doctor) return n.NAME as NAME, n.ID as ID, n.AGE as AGE, n.TEL as TEL,n.LIEU as LIEU,n.SPECIALTY as SPECIALTY
        """
        results=session.run(q1)
        data=results.data()
        return jsonify(data)
    @app.route("/doctors",methods=["POST"])
    def postdoctor():
        data = request.get_json()
        name = data["name"]
        id = data["id"]
        age=data["age"]
        tel=data["tel"]
        lieu=data["lieu"]
        spec=data["specialty"]
        q = """
        CREATE (n:Doctor {NAME: $name, ID: $id, AGE: $age, TEL: $tel,LIEU:$lieu, SPECIALTY: $spec})
        RETURN n.NAME as NAME, n.ID as ID, n.AGE as AGE, n.TEL as TEL,n.LIEU as LIEU, n.SPECIALTY as SPEC
        """
        result = session.run(q, {"name": name, "id": id, "age": age, "tel": tel,"lieu":lieu,"spec":spec})
        data = result.data()
        return jsonify(data)
    @app.route("/deletedoctor/<int:id>",methods=["DELETE"])
    def deletedoctor(id):
        q1="""
            match (n:Doctor{ID:$id}) delete n
        """
        x={"id":id}
        result=session.run(q1,x)
        return jsonify(success=True)
    @app.route("/displaydoctor/<int:id>",methods=["GET"])  
    def display_doctor(id):
        q1="""
            match(n:Doctor{ID:$id}) return n.NAME as NAME, n.ID as ID, n.AGE as AGE, n.TEL as TEL,n.LIEU as LIEU,n.SPECIALTY as SPECIALTY
        """
        x={"id":id}
        results=session.run(q1,x)
        data=results.data()
        return jsonify(data)
    @app.route("/updatedoctor/<id>", methods=["PUT"])
    def update_doctor(id):
        data = request.get_json()
        name = data["name"]
        id=data["id"]
        age = data["age"]
        tel= data["tel"]
        lieu=data["lieu"]
        specialty=data["specialty"]
        q = """
            MATCH (n:Doctor {ID: $id})
            SET n.NAME = $name, n.ID= $id, n.AGE =$age, n.TEL =$tel,n.LIEU=$lieu,n.SPECIALTY=$specialty
            RETURN n.NAME as NAME, n.ID as ID, n.AGE as AGE, n.TEL as TEL,n.SPECIALTY as SPECIALTY
        """
        result = session.run(q, {"id": id, "name": name,"id": id,"age":age, "tel":tel,"lieu":lieu,"specialty":specialty})
        data = result.data()
        return jsonify(data)
    
if __name__=="__main__":
        app.run(port=5010)