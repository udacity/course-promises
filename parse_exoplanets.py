#!/usr/local/bin/python
import csv
import json
import os

jsondir = 'ExoplanetExplorer/app/data/planets'
# jsonfile = open('app/data/earth-like-data.json', 'w')
csvfile = open('earth-like-data.csv', 'rb')

if not os.path.exists(jsondir):
    os.makedirs(jsondir)

# API: http://exoplanetarchive.ipac.caltech.edu/docs/API_exoplanet_columns.html

# earth-like
# http://www.space.com/30172-six-most-earth-like-alien-planets.html

# potentially habitable
# https://en.wikipedia.org/wiki/List_of_potentially_habitable_exoplanets

fieldnames = ['pl_name','pl_rade','pl_masse','pl_radj','pl_massj','pl_dens','st_dist','pl_disc','pl_telescope','pl_eqt','pl_discmethod','pl_facility','pl_mnum','pl_pelink','pl_edelink','pl_cbflag','pl_orbper','pl_pnum','ra','dec','st_spstr','st_age','pl_ratdor','st_rad','rowupdate']
reader = csv.DictReader(csvfile, fieldnames)

for row in reader:
    jsonfile = open(jsondir + '/' + row['pl_name'].replace(' ', '') + '.json', 'w+')
    out = json.dumps(row)
    jsonfile.write(out)