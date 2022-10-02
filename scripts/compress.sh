#!/bin/bash
HERE=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
$HERE/resize.py --source public/media/gallery/  --dest public/media/gallery/  --width 2000 --height 2000 --quality 75  --format webp
$HERE/resize.py --source public/media/gallery/  --dest public/media/gallery/  --width 800  --height 800  --quality 75  --format webp --suffix _thumb
$HERE/resize.py --source public/media/hero/     --dest public/media/hero/     --width 2000 --height 2000 --quality 100 --format webp
$HERE/resize.py --source public/media/partners/ --dest public/media/partners/ --width 800  --height 800  --quality 75  --format webp