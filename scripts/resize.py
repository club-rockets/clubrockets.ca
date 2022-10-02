#!/usr/bin/env python3

import argparse
import os
import time
from sys import stderr

from PIL import Image


def rewrite(message):
    print(f"\033[0G{message}", end="", flush=True)


def resize(input_path, output_path, max_width, max_height, quality=75):
    try:
        image = Image.open(input_path)
        wf = max_width / image.width
        hf = max_height / image.height
        factor = min(wf, hf)

        if factor < 0.8:
            image = image.resize((int(image.width * factor), int(image.height * factor)))

        image.save(output_path, quality=quality)

    except Exception as e:
        print(f"error: {input_path}: {str(e)}", file=stderr)


def main(args):
    _start = time.time()

    if not os.path.isdir(args.source):
        print(f"error: '{args.source}' is not a valid path!", file=stderr)
        return -1

    count = 0
    for file in os.listdir(args.source):
        if os.path.splitext(file)[1].lower() in [".jpg", ".jpeg", ".png"]:
            resize(
                os.path.join(args.source, file),
                os.path.join(args.dest, f"{os.path.splitext(file)[0]}{args.suffix}.{args.format}"),
                args.width,
                args.height,
                args.quality,
            )
            count += 1
        rewrite(f"Resized {count} images in {time.time() - _start:.2f}s")
    print("")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-s", "--source", help="Dictory to crawl for images", required=True)
    parser.add_argument("-d", "--dest", help="Destination for resized images", required=True)
    parser.add_argument("-w", "--width", help="Max width to respect", type=int, required=True)
    parser.add_argument("-H", "--height", help="Max height to respect", type=int, required=True)

    parser.add_argument("-q", "--quality", help="JPEG quality", type=int, default=75)
    parser.add_argument("-S", "--suffix", help="Filename suffix for resized images", default="")
    parser.add_argument("-F", "--format", help="Output format", default="webp")
    exit(main(parser.parse_args()) or 0)
