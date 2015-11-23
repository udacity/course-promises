#!/usr/local/bin/python

# import requests
import csv
import json

jsonfile = open('file.json', 'w')
csvfile = open('data.csv', 'rb')

# r = requests.get('http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_letter,ra,dec&order=pl_hostname')

# earth-like
# http://www.space.com/30172-six-most-earth-like-alien-planets.html

# potentially habitable
# https://en.wikipedia.org/wiki/List_of_potentially_habitable_exoplanets

fieldnames = ['pl_hostname','pl_letter','ra','dec']
reader = csv.DictReader(csvfile, fieldnames)
out = json.dumps([row for row in reader])
jsonfile.write(out)