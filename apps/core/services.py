import requests

class ApiPresidents:
    def __init__(self):
        self.url_request = 'https://api-colombia.com/api/v1/President'
        self.response = requests.get(self.url_request)
        self.data = self.response.json()
        
    def get_presidents(self):
        return self.data

#funcion para buscar un presidente por nombre
    def get_president_by_name(self, name):
        return [p for p in self.data if p['name'].lower() == name.lower() or p['lastName'].lower() == name.lower()]

class ApiComida:
    def __init__(self):
        self.url_request = 'http://www.themealdb.com/api/json/v1/1/categories.php'
        self.response = requests.get(self.url_request)
        self.data = self.response.json()

    def get_categories(self):
        return self.data['categories']

    def get_categories_by_filter(self, categoria):
        categorias= self.data['categories']
        return [c for c in categorias if c['strCategory'].lower() == categoria.lower()]