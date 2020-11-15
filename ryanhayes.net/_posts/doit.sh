#!/bin/bash
for x in ./*.md; do
    mv $x `$x | cut -c 12-`
done
