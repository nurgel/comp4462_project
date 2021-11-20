import json
original_json_loc=
f1=open(original_json_loc,'r', encoding='UTF-8')
business = []
for line in f1.readlines():
    dic = json.loads(line)
    business.append(dic)
    
transformed_json_loc=
f=open(transformed_json_loc,'w+')
for obj in business:
  j=json.dumps(obj)
  f.write(j)
  f.write(',\n')
