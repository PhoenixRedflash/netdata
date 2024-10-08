# -*- coding: utf-8 -*-
# Description:
# Author: Ilya Mashchenko (ilyam8)
# SPDX-License-Identifier: GPL-3.0-or-later

try:
    from pyyaml3 import SafeLoader as YamlSafeLoader
except ImportError:
    from yaml import SafeLoader as YamlSafeLoader

try:
    from collections import OrderedDict
except ImportError:
    from third_party.ordereddict import OrderedDict

DEFAULT_MAPPING_TAG = 'tag:yaml.org,2002:map'


def dict_constructor(loader, node):
    return OrderedDict(loader.construct_pairs(node))


YamlSafeLoader.add_constructor(DEFAULT_MAPPING_TAG, dict_constructor)


def load_yaml(stream):
    loader = YamlSafeLoader(stream)
    try:
        return loader.get_single_data()
    finally:
        loader.dispose()


def load_config(file_name):
    with open(file_name, 'r') as stream:
        return load_yaml(stream)
