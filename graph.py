import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import networkx as nx
from distance import haversine

cred = credentials.Certificate("disaster.json")
firebase_admin.initialize_app(cred)
db=firestore.client()

G=nx.Graph()

nodes_ref=db.collection('camp')
documents=nodes_ref.stream()


for doc in documents:
    doc_data=doc.to_dict()
    camp_name=doc_data['camp_name']
    coordinates=doc_data['coordinates']
    print(camp_name)
    print(coordinates)

    G.add_node(camp_name,coordinates=coordinates)
#print(enumerate(documents))

documents1=nodes_ref.stream()

for i in documents1:
    print("k")
    for j in documents1:
        if i != j:
            print("helo")
            print(i)
            print(j)  # Avoid creating self-loops
            # node1 = do.get('camp_name')
            # node2 = doc2.get('camp_name')
            i1=i.to_dict()
            j1=j.to_dict()
            node1=i1['camp_name']
            node2=j1['camp_name']
            # distance = nx.haversine([doc1.get('coordinates'), doc2.get('coordinates')])
            
            # lati1,long1=float(doc1.get('coordinates').split(', '))
            # lati2,long2=float(doc2.get('coordinates').split(', '))
            # lati1,long1=float(i1['coordinates'].split(', '))
            lati1, long1 = map(float, i1['coordinates'].split(','))

            # lati11=float(lati1)
            # lati12=float(lati2)
            # lati2,long2=float(j1['coordinates'].split(', '))
            lati2,long2=map(float,j1['coordinates'].split(', '))
            distance=haversine(lati1,long1,lati2,long2)
            print(node1," ",node2)
            G.add_edge(node1, node2, weight=distance)


shortest_path = nx.shortest_path(G, source='ragam', target='gec', weight='weight')
shortest_path_length = nx.shortest_path_length(G, source='ragam', target='gec', weight='weight')

print("Shortest path:", shortest_path)
print("Shortest path length:", shortest_path_length)