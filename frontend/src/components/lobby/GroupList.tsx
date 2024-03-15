import React from 'react';
import GroupListItem from './GroupListItem';

export default function GroupList() {
  return (
    <div className="flex flex-col">
      <h2>GroupList</h2>
      <GroupListItem
        variant="normal"
        data={{ name: 'Group #1', members: ['LNX', 'Equindar'], size: 6 }}
      />
      <GroupListItem
        variant="normal"
        data={{ name: 'Group #2', members: ['Mikko', 'Himala'], size: 20 }}
      />
      <GroupListItem variant="full" data={{ name: 'Group #3', members: ['Pekko'], size: 2 }} />
    </div>
  );
}
