# Python dictionaries :>
# -----------------------------
# ------------------------------
thisdict = {
    "brand":"Ford",
    "model":"Mustang",
    "year":1964
}

lenght = len(thisdict)
print(lenght)

a_dict = {'one':1,'two':2,'thee':3,'four':4}
new_dict = {}

for key , value in a_dict.items():
    new_dict[value] = key
    

print(new_dict)

incomes = {'Freelancing':1200,'Fulltimejob':2000,'youtube':1000,'Startup':1000}
totalIncome = 0
for Money in incomes.values():
    totalIncome += Money
    
print(totalIncome)
    

objects = ['blue','apple','dog','']
categories = ['color','fruit','pet','monkey']
a_dict = {key:value for key,value in zip(categories,objects)}
print(a_dict)


