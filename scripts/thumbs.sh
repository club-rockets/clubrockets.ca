#!/bin/bash
./scripts/resize.py --source $1/orig/ --dest $1/hires/ -w 2000 -H 1000
./scripts/resize.py --source $1/orig/ --dest $1/thumb/ -w 800 -H 600
