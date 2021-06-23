#!/usr/bin/env python3

import argparse
import os
import time
from sys import stderr

from PIL import Image


def resize(path, max_width, max_height, dest):
    try:
        image = Image.open(path)
        wf = max_width / image.width
        hf = max_height / image.height
        factor = min(wf, hf)

        if factor < 0.8:
            image = image.resize((
                int(image.width * factor),
                int(image.height * factor)
            ))

        image.save(os.path.join(dest, os.path.basename(path)))

    except Exception as e:
        print(f"error: {path}: {str(e)}", file=stderr)


def main(args):
    _start = time.time()

    if not os.path.isdir(args.source):
        print(f"error: '{args.source}' is not a valid path!", file=stderr)
        return -1

    count = 0
    for file in os.listdir(args.source):
        if os.path.splitext(file)[1].lower() in ['.jpg', '.jpeg', '.png']:
            resize(
                os.path.join(args.source, file),
                args.width,
                args.height,
                args.dest
            )
            count += 1
        print(f"\033[0GResized {count} images in {time.time() - _start:.2f}s", end='', flush=True)
    print('')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-s', '--source', help='Path to directory containing images to resize', required=True) # noqa
    parser.add_argument('-d', '--dest', help='Destination for resized images', required=True) # noqa
    parser.add_argument('-w', '--width', help='Max width to respect', type=int, required=True) # noqa
    parser.add_argument('-H', '--height', help='Max height to respect', type=int, required=True) # noqa
    exit(main(parser.parse_args()) or 0)
