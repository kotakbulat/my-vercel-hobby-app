import React, { useEffect, useState } from 'react';

export const NotepadWidget: React.FC<{ id: string }> = ({ id }) => {
  const storageKey = `widget-notepad-${id}`;
  const [text, setText] = useState(() => localStorage.getItem(storageKey) || '');

  useEffect(() => {
    localStorage.setItem(storageKey, text);
  },[text, storageKey]);

  return (
    <textarea
      className="notepad-textarea"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type your notes here..."
    />
  );
};