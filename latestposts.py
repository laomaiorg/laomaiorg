import glob
import yaml
import json

# 获取最后5个文件的slug
file_list = sorted(glob.glob('content/post/*.md'), key=lambda x: int(x.split('/')[-1].split('.')[0]), reverse=True)[:5]
slugs = []

for file_path in file_list:
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            documents = yaml.safe_load_all(file)
            for document in documents:
                if isinstance(document, dict):
                    slug = document.get('slug')
                    if slug:
                        modified_slug = f"/archives/{slug}/"
                        slugs.append(modified_slug)
    except (yaml.parser.ParserError, FileNotFoundError):
        continue

# 将数据写入 JSON 文件
with open('static/slugs.json', 'w') as outfile:
    json.dump(slugs, outfile)
