#!/usr/local/bin/python

# API: http://exoplanetarchive.ipac.caltech.edu/docs/API_exoplanet_columns.html

# import requests
import csv
import json

jsonfile = open('file.json', 'w')
csvfile = open('data.csv', 'rb')

# earth-like
# http://www.space.com/30172-six-most-earth-like-alien-planets.html

# potentially habitable
# https://en.wikipedia.org/wiki/List_of_potentially_habitable_exoplanets

fieldnames = ['pl_hostname','pl_letter','ra','dec']
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)

# for names - csv to json, altogether in data
#   - include a search parameter: something like "habitable"
# for data - csv to json, each planet individually in data/planets