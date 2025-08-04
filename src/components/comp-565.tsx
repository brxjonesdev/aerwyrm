'use client';

import React from 'react';
import { hotkeysCoreFeature, syncDataLoaderFeature } from '@headless-tree/core';
import { useTree } from '@headless-tree/react';

import { Tree, TreeItem, TreeItemLabel } from '@/components/tree';

interface Item {
  name: string;
  children?: string[];
}

const items: Record<string, Item> = {
  yellow: {
    name: 'Yellow',
    children: ['yellow-1', 'yellow-2'],
  },
  'yellow-1': {
    name: 'Yellow 1',
  },
  'yellow-2': {
    name: 'Yellow 2',
  },
};

const indent = 20;

export default function CourseTree() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ['yellow', 'yellow-1', 'yellow-2'],
    },
    indent,
    rootItemId: 'yellow',
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  });

  return (
    <div className='flex h-full flex-col gap-2 *:first:grow'>
      <Tree indent={indent} tree={tree}>
        {tree.getItems().map((item) => {
          return (
            <TreeItem key={item.getId()} item={item}>
              <TreeItemLabel />
            </TreeItem>
          );
        })}
      </Tree>
    </div>
  );
}
